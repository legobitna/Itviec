import React, { useState, useEffect } from "react";
import JobList from "../components/JobCard";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Container } from "react-bootstrap";
export default function Jobs() {
  let originalList = [];
  let filteredList = [];
  let [jobs, setJobs] = useState([]);
  let keyword = "";

  const getData = async () => {
    //let url ="http://localhost:3001/jobs";
    let url = `https://my-json-server.typicode.com/legobitna/Itviec/jobs`;
    let data = await fetch(url);
    let result = await data.json();
    originalList = result;

    setJobs(result);
  };
  useEffect(() => {
    getData();
  }, []);

  const search = () => {};

  return (
    <div className="App">
      <div className="search-header">
        <Container>
          <Col>
            {" "}
            <img
              className="logo-itviec"
              alt="itviec"
              src="https://itviec.com/assets/logo-itviec-65afac80e92140efa459545bc1c042ff4275f8f197535f147ed7614c2000ab0f.png"
            />
          </Col>
          <Row className="search-form-wrapper">
            <Col xs={12} md={10}>
              <div className="search-section-wrapper">
                <Row class="search-field-wrapper">
                  <Col md={1}>
                    <FontAwesomeIcon
                      icon={faSearch}
                      style={{ marginRight: "10px", marginLeft: "10px" }}
                    />
                  </Col>
                  <Col md={11}>
                    <input
                      type="text"
                      className="search-box"
                      placeholder="Keyword skill(Java,IOS...),Job Title,Company..."
                      onChange={(e) => (keyword = e.target.value)}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} md={2}>
              <button className="search-button" onClick={() => search()}>
                Search
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div className="job-list">
          <h1>{jobs && jobs.length} IT jobs in Vietnam for you</h1>
          {jobs && jobs.map((item) => <JobList job={item} />)}
        </div>
      </Container>
    </div>
  );
}
