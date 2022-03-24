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
    <div className="App" id='wrapper'>
      <h1>Cat Facts</h1>
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