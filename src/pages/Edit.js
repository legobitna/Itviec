import React,{useState,useEffect} from "react";
import {useParams,useHistory} from 'react-router-dom'
import {Form, Button,Col} from 'react-bootstrap'

export default function Edit() {
    const {id} = useParams()
    const history = useHistory()
    let [job,setJob] = useState(null)

    const getData = async() =>{
        // let url = `http://localhost:3001/jobs/${id}`
        let url=`https://my-json-server.typicode.com/legobitna/Itviec/jobs/${id}`
     
        let data = await fetch(url)
        let result = await data.json();
        console.log("Rr",result)
        setJob(result)
    }
    useEffect(()=>{
        getData();
    },[])

    const editJob=async (e)=>{
        e.preventDefault();
        const config = {
            method: "PUT",
            body: JSON.stringify(job),
            headers: {
              "Content-Type": "application/json"
            }
          };
          try {
            const response = await fetch(
            //   `http://localhost:3001/jobs/${job.id}`,
            ` https://my-json-server.typicode.com/legobitna/Itviec/jobs/${id}`,
              config
            );
            history.push("/")
          } catch (error) {
            console.log("Oops");
          }
    }
    const tagChange = (e)=>{
        let string = e.target.value;
        let splitString = string.split(',')
        setJob({...job,tags:splitString})
    }
    const benefitChange = (e,idx)=>{
        let array = job.benefit;
        array[idx] =  e.target.value;
        setJob({...job,benefit:array})
    }
  
    if(job===null){
        return<div>No data yet</div>
    }

  return (
    <div className="App">
      <div className="searchHeader-login">
        <div className="pageMenu">
          <img
            className="logo-itviec"
            alt="itviec"
            src="https://itviec.com/assets/logo-itviec-65afac80e92140efa459545bc1c042ff4275f8f197535f147ed7614c2000ab0f.png"
          />
        </div>
      </div>
      <div className="middle">
        <Form className="login-form" onSubmit = {(e)=>editJob(e)}>
          <Form.Row>
              
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" value = {job.title} onChange={(e)=>setJob({...job, title: e.target.value})}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSalary">
              <Form.Label>Salary</Form.Label>
              <Form.Control type="number" value={job.salary} onChange={(e)=>setJob({...job,salary:e.target.value})}/>
            </Form.Group>

          </Form.Row>

          <Form.Group controlId="formGridImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="url" value={job.img} onChange={(e)=>setJob({...job,img:e.target.value})}/>
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Benefit </Form.Label>
            {job.benefit.map((item,idx)=><Form.Control value={item} onChange={(e)=>benefitChange(e,idx)}/>)}
            
          </Form.Group>

          <Form.Group controlId="formGridImage">
            <Form.Label>Job Description</Form.Label>
            <Form.Control value={job.description} onChange={(e)=>setJob({...job,description:e.target.value})}  as="textarea" rows="3"/>
          </Form.Group>

          <Form.Group controlId="formGridImage">
            <Form.Label>Tags</Form.Label>
            <Form.Control value={job.tags} onChange={(e)=>tagChange(e)}/>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control value={job.city} onChange={(e)=>setJob({...job,city:e.target.value})}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>District</Form.Label>
              <Form.Control value={job.district} onChange={(e)=>setJob({...job,district:e.target.value})}/>
            </Form.Group>
          

            
          </Form.Row>

         

          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
