import React from 'react';
import './App.css';
import { Form } from './components/Form';
import { Table } from './components/Table';

function App() {
  const [data, setdata] = React.useState([])
  const [obj, setobj] = React.useState({})

  return (
    <div className="App">
      <Form className="left" data={data} setdata={setdata} setobj={setobj}/>
      <Table className="right" data={data} setdata={setdata} key={Date.now()}/>
    </div>
  );
}

export default App;
