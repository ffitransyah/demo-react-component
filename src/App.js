import React from 'react';
import './App.css';
import ContentClass from './components/ContentClass';
import ContentFn from './components/ContentFn';

class IntContentClass extends React.Component {
  render() {
    return <h2>Class Component Internal</h2>
  }
}

const IntContentFn = () => {
  return <h2>Functional Component Internal</h2>
}

function App() {
  return (
    <div className="App">
      <h1>Component dalam React</h1>
      <ContentClass />
      <hr />
      <ContentFn />
      <hr />
      <IntContentClass />
      <hr />
      <IntContentFn />
    </div>
  );
}

export default App;
