import React, { Component } from 'react'
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';

import './ExercisesList.css'
import TrackerNavbar from './TrackerNavbar'

const User = props => (
    <tr>
      <td>{props.user.username}</td>
      <td><Button variant="danger" onClick={() => { 
        props.deleteUser(props.user._id) }}>delete</Button></td>
    </tr>
  )
  
  export default class UserList extends Component {
    constructor(props) {
      super(props);
  
      this.deleteUser = this.deleteUser.bind(this)
  
      this.state = {users: []};
    }
  
    componentDidMount() {
      axios.get('http://localhost:5001/users/')
        .then(response => {
          this.setState({ users: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
    deleteUser(id) {
      axios.delete('http://localhost:5001/users/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        users: this.state.users.filter(el => el._id !== id)
      })
    }
  
    userList() {
      return this.state.users.map(currentuser => {
        return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
      })
    }
  
    render() {
      return (
        <Container style={{backgroundColor: 'white'}}>
            <TrackerNavbar />
          <h3>Logged Exercises</h3>
          <div className='scroll' 
          style={{                        
                    overflowY: 'scroll', 
                    height: '200px',                                        
                  }}>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Username</th>
                <th>Action</th>
              </tr>            
            </thead>
            <tbody>
              { this.userList() }
            </tbody>
          </table>
          </div>          
        </Container>
      )
    }
  }