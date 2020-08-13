import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'

import Data from './Data'

import { Container,Row,Col } from 'react-bootstrap'

export default class CreateExercises extends Component {
    constructor(props) {
        super(props);    

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeRepetition = this.onChangeRepetition.bind(this);
        this.onChangeRound = this.onChangeRound.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        username: '',
        description: '',
        repetition: 0,
        round: 0,
        date: new Date(),
        users: [],
        Data       
    }
}

componentDidMount() {
    axios.get('http://localhost:5001/users/')
    .then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username),
          username: response.data[0].username
        })
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

onChangeUsername(e) {
    this.setState({
        username: e.target.value
    });
}

onChangeDescription(e) {
    this.setState({
        description: e.target.value
    });
}

onChangeRepetition(e) {
    this.setState({
        repetition: e.target.value
    });
}

onChangeRound(e) {
  this.setState({
      round: e.target.value
  });
}


onChangeDate(date) {
    this.setState({
        date: date
    });
}

onSubmit(e){
    e.preventDefault();

    const exercise = {
        username: this.state.username,
        description: this.state.description,
        repetition: this.state.repetition,
        round: this.state.round,
        date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
    .then(res => console.log(res.data));

    window.location = '/ExerciseTracker';
}

render() {
    return (        
        <Container style={{background: 'white'}}>            
          <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={this.onSubmit}>
              <Row>
                <Col> 
                <div className="form-group">                 
                <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}>                    
                    {
                      this.state.users.map(function(user) {
                        return <option 
                          key={user}
                          value={user}>{user}
                          </option>;
                      })
                    }
                </select>
              </div> 

                </Col>
                <Col>
                <div className="form-group">                 
                <select  ref="userInput"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}>  
                    <option>SELECT WORKOUT</option>
              {
                  this.state.Data.map((value) =>    
                    <option value={value.name}>{value.name}</option>                
                )                
              }
              </select>               
            </div>
                </Col>
              </Row>
                           
              
              <Row>
                    <Col>
                    <div className="form-group">
                    <label>Repetition(s): </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.repetition}
                        onChange={this.onChangeRepetition}
                        />
                  </div>
                    </Col>
                    <Col>
                    <div className="form-group">
                    <label>Set(s): </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.round}
                        onChange={this.onChangeRound}
                        />
                  </div>
                    </Col>
                    <Col>
                    <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                    />
                    </div>
                  </div>
                    </Col>
              </Row>
              
              
      
              <div className="form-group">
                <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
              </div>
            </form>            
          </div>          
        </Container>
        )
    }
}