import React from 'react';
import './App.css';
import { Form } from './components/Form';
import { Table } from './components/Table';

function App() {
  const [data, setdata] = React.useState([])
  const [obj, setobj] = React.useState({})

  return (
    <>
    <h2 className='text-center my-1 text-secondary'>EMPLOYEE DETAILS</h2>  
    <div className="App">
      <Form className="left" style={{width:"25%"}} data={data} setdata={setdata} setobj={setobj}/>
      <Table className="right" style={{width:"10%"}} data={data} setdata={setdata} key={Date.now()}/>
    </div>
    </>
  );
}

export default App;
