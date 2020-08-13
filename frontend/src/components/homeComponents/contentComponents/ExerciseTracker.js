import React from 'react'

import { Container,Row,Col } from 'react-bootstrap';

import TrackerNavbar from './exercisetrackerComponents/TrackerNavbar'
import ExercisesList from './exercisetrackerComponents/ExercisesList'
import CreateExercise from './exercisetrackerComponents/CreateExercise'
import CreateUser from './exercisetrackerComponents/CreateUser'


  
const ExerciseTracker = () => (
  <Container style={{backgroundColor: 'white'}}>
  <TrackerNavbar />
  <Row>
    <Col>
    <CreateExercise />
    </Col>
    <Col>
    <CreateUser />
    </Col>
  </Row>
  <Row>
    <Col>
     <ExercisesList />
    </Col>
  </Row>
  <br></br>
  
  
  </Container>
)
export default ExerciseTracker