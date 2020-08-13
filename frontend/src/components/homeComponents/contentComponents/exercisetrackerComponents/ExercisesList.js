import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';

import './ExercisesList.css'

const Exercise = props => (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.repetition}</td>
      <td>{props.exercise.round}</td>
      <td>{props.exercise.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.exercise._id}><Button variant='primary'>edit</Button></Link> | <Button variant="danger" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</Button>
      </td>
    </tr>
  )
  
  export default class ExercisesList extends Component {
    constructor(props) {
      super(props);
  
      this.deleteExercise = this.deleteExercise.bind(this)
  
      this.state = {exercises: []};
    }
  
    componentDidMount() {
      axios.get('http://localhost:5001/exercises/')
        .then(response => {
          this.setState({ exercises: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
    deleteExercise(id) {
      axios.delete('http://localhost:5001/exercises/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        exercises: this.state.exercises.filter(el => el._id !== id)
      })
    }
  
    exerciseList() {
      return this.state.exercises.map(currentexercise => {
        return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
      })
    }
  
    render() {
      return (
        <Container style={{backgroundColor: 'white'}}>
          <h3>Logged Exercises</h3>
          <div className='scroll' 
          style={{                        
                    overflowY: 'scroll', 
                    height: '300px',                                        
                  }}>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Username</th>
                <th>Workout</th>
                <th>Repetition(s)</th>
                <th>Set(s)</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>            
            </thead>
            <tbody>
              { this.exerciseList() }
            </tbody>
          </table>
          </div>
        </Container>
      )
    }
  }