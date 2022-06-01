import React from 'react'
import axios from 'axios'
import { Pagination } from './Pagination'


export const Table = (props) => {
  // console.log(props.data);

  const [userdata,setuserdata]= React.useState([])
  const [filterdata,setfilterdata]= React.useState([])
  const [page,setpage]= React.useState(1)
  const [sort,setsort]= React.useState("")
  const [reload,setreload] = React.useState("")
  const [filter,setfilter]= React.useState("")
  // setfilterdata(userdata)
  
  const getdata=()=>{
    axios.get(`http://localhost:8080/posts?_page=${page}&_limit=5`)
    .then((response)=> {
      console.log(response);
      setuserdata(response.data)
      setfilterdata(response.data)
    })
  }
React.useEffect(() => {
  getdata()
},[page])

React.useEffect(() => {
  switch (filter) {
    case 'Math':{
      const a = userdata.filter((item)=>(item.Depar=='Math'));
      // console.log(userdata)
      // setuserdata(a);
      setfilterdata(a)
      console.log(userdata,a)
      break;
    }

    case 'Bio':{
      const a = userdata.filter((item)=>(item.Depar=='Bio'));
      // setuserdata(a);
      setfilterdata(a)
      console.log(a)
      break;
    }
    case 'Phy':{
      const a = userdata.filter((item)=>(item.Depar=='Phy'));
      // setuserdata(a);
      setfilterdata(a)
      console.log(a)
      break;
    }
    case 'Che':{
      const a = userdata.filter((item)=>(item.Depar=='Che'));
      // setuserdata(a);
      setfilterdata(a)
      console.log(a)
      break;
    } 
    default: {
   setfilterdata(userdata)
    }     
      break;
  }
  // setuserdata()
},[filter])

React.useEffect(() => {
  if(sort==='ascending'){
    userdata.sort((a,b)=>a.Salary-b.Salary)
    console.log(userdata)
    setuserdata(userdata)
    setreload(Date.now())
  }else if(sort==='descending'){
    userdata.sort((a,b)=>b.Salary-a.Salary)
    console.log(userdata)
    setuserdata(userdata)
    setreload(Date.now())
  }
},[sort])
  
  

  return (
    <div>
    {/* <div>Table</div> */}
      <select name="" id="" onChange={(e)=>setfilter(e.target.value)}>
        <option value="">Filter By Department</option>
        <option value="Math">Mathematics</option>
        <option value="Bio">Biology</option>
        <option value="Phy">Physics</option>
        <option value="Che">Chemistry</option>
      </select>

      <select name="" id="" onChange={(e)=>setsort(e.target.value)}>
        <option value="">Sort</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
  <table className="table table-bordered" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Profile</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Address</th>
      <th scope="col">Department</th>
      <th scope="col">Salary</th>
      <th scope="col">Marited</th>
    </tr>
  </thead>
  <tbody>
    {filterdata.map((item)=>{return(
      <tr>
      <td>{item.id}</td>
      <td><img src={item.Profile} alt="" /></td>
      <td>{item.Name}</td>
      <td>{item.Age}</td>
      <td>{item.Address}</td>
      <td>{item.Depar}</td>
      <td>{item.Salary}</td>
      <td>{item.MaritalState?'Yes':'No'}</td>
    </tr>
      )})}
  </tbody>
</table>
<Pagination page={page} setpage={setpage}/>
</div>
  )
}
