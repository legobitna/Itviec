import React ,{useState,useEffect}from 'react'
import '../App.css';
import JobList from '../components/JobList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Jobs() {
      let [jobs,setJobs]=useState([])

    const getData = async()=>{
        // let url ="http://localhost:3001/jobs"
        let url=`https://my-json-server.typicode.com/legobitna/Itviec/jobs`
        let data = await fetch(url)
        let result =await data.json()
        console.log("result",result)
        setJobs(result);

    }
    useEffect (()=>{
        getData()
    },[])
    
    return (
        <div className="App">
        <div className="searchHeader">
          <div className="pageMenu">
            <img className="logo-itviec" alt="itviec" src="https://itviec.com/assets/logo-itviec-65afac80e92140efa459545bc1c042ff4275f8f197535f147ed7614c2000ab0f.png"/>
          </div>
          <div className="search-form-wrapper">
            <div className="search-section-wrapper">
              
              <div class="search-field-wrapper">
              <FontAwesomeIcon icon={faSearch} style={{marginRight:"10px",marginLeft:"10px"}} />
                <input type="text" className="search-box" placeholder="Keyword skill(Java,IOS...),Job Title,Company..."/>
                
              </div>
            </div>
            <button className="search-button">Search</button>
  
          </div>
        </div>
        <div className="job-list">
    <h1>{jobs&&jobs.length} IT jobs in Vietnam for you</h1>
          {jobs && jobs.map((item)=><JobList job={item}/>)}
          
        </div>
      </div>
    )
}
