import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getRandomCatFact } from './state/action-creators';

function App(props) {

  const { facts }=props

  useEffect(() => {
    props.getRandomCatFact()
  }, [])

  return (
    <div className="App">
      <h1>Async Redux Project</h1>
      <h3>Facts go here:</h3>
      <p>{facts}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    facts: state.facts
  }
}

export default connect(mapStateToProps, { getRandomCatFact } )(App);