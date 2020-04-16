import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import {Row, Col,Badge} from "react-bootstrap"
import moment from 'moment'
import {useHistory} from 'react-router-dom'

export default function JobCard(props) {
    let item = props.job
    let history=useHistory();

    const jobSelect = () =>{
        history.push(`/job/${item.id}`)
    }
    if(item ==null){
        return<div>no data yet</div>
    }
  return (
    <div className="job-content" onClick={()=>jobSelect()}>
      <Row>
        <Col><div className="logo"><img src={item.img}/></div></Col>
        <Col xs={8}><div className="descriptions">
  <h2 className="title">{item.title}</h2>
  <div>$ {item.salary}</div>
            <div>
                <ul className="benefit">
  {item.benefit.map((item)=><li>{item}</li>)}
                    
                </ul>
            </div>
            <div>
  {item.tags.map((item)=><Badge variant="secondary" style={{marginRight:"10px"}}>{item}</Badge>)}
                 
                 
            </div>


            </div></Col>
        <Col><div className="date-location-box">
            <div className="hotjob">Hot Job</div>
            <div className="location">
  <div>{item.city}</div>
  <div>District {item.district}</div>

            </div>
            <div style={{color:"#06c"}}>{moment(item.time).fromNow()   }</div>
            </div></Col>
      </Row>
    </div>
  );
}
