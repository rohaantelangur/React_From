import React from "react";
import { Button } from 'react-bootstrap';
import axios from 'axios'

export const Form = (props) => {

  const [userdata, setuserdata]=React.useState({
    Name:'',
    Age:'',
    Address:'',
    Depar:'',
    Salary:'',
    MaritalState:false,
    Profile:'',
  })

  const inputhandle=(e)=>{
    // console.log(e)
    let {name, value} = e.target;
    setuserdata({
      ...userdata, 
      [name] : value,
    });
    if(name === 'MaritalState'){
      setuserdata({
        ...userdata, 
        [name] : (value==='on'),
      });
    }

  }


  const uloaduser=()=>{
    axios.post('http://localhost:8080/posts/',{
      ...userdata
    })
    .then((response)=> {
    console.log(response);
  })
  }

  const savedata=(e)=>{
    e.preventDefault()
    props.data.push(userdata)
    props.setdata(props.data)
    props.setobj(userdata)
    uloaduser()
    // console.log(props.data)
    }

  return (
    <div className="left">
      <form action="" className="form" onSubmit={savedata}>
        <label htmlFor="">Name</label>
        <input type="text" name="Name" onChange={inputhandle} />

        <label htmlFor="">Age</label>
        <input type="text" name="Age" onChange={inputhandle} />

        <label htmlFor="">Address</label>
        <input type="text" name="Address" onChange={inputhandle} />

        <label htmlFor="">Department</label>
        <select name="Depar" id="" className="selectdepart" onChange={inputhandle}>
          <option value="">Select Department</option>
          <option value="Math">Math</option>
          <option value="Che">Che</option>
          <option value="Phy">Phy</option>
          <option value="Bio">Bio</option>
        </select>
        {/* <input type="text" name="Department" /> */}

        <label htmlFor="">Salary</label>
        <input type="text" name="Salary" onChange={inputhandle} />

        <label htmlFor="">Marital state</label>
        <input type="checkbox" className="checkboxui" name="MaritalState" onChange={inputhandle}/>

        <label htmlFor="">Profile Picture Link</label>
        <input type="text" name="Profile" onChange={inputhandle}/>

        <button type="submit">Save</button>
      </form>
      </div>
  );
};
