import React, { useState, useEffect } from "react";
import JobList from "../components/JobCard";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Container, Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Jobs() {
  let [originalList, setOriginalList] = useState([]);
  let [jobs, setJobs] = useState([]);
  let [keyword, setKeyword] = useState("");
  let [encode, setEncode] = useState("");
  let history = useHistory();
  let searchTerm = [];
  let query = useQuery();
  let filteredList = [];

  const getData = async () => {
    console.log("here1");
    //let url ="http://localhost:3001/jobs";
    let url = `https://my-json-server.typicode.com/legobitna/Itviec/jobs`;
    let data = await fetch(url);
    let result = await data.json();
    setOriginalList(result);
    setJobs(result);
  };

  const getQuery = () => {
    console.log("ori", originalList);
    console.log("here2");
    filteredList = originalList;
    let searchParam = query.get("q");
    if (searchParam) {
      searchTerm = searchParam.split(" ");
      filteredList = filteredList.filter((item) =>
        searchTerm.some((key) =>
          item.title.toLowerCase().includes(key.toLowerCase())
        )
      );
    }
    setJobs(filteredList);
  };

  const search = (e) => {
    e.preventDefault();
    setEncode(encodeURIComponent(keyword));
    history.push("/jobs/?q=" + encodeURIComponent(keyword));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (jobs.length > 0) {
      getQuery();
    }
  }, [encode]);

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
          <Form onSubmit={(e) => search(e)}>
            <Row className="search-form-wrapper">
              <Col xs={12} md={10}>
                <div className="search-section-wrapper">
                  <Row className="search-field-wrapper" noGutters={true}>
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="icon-fasearch"
                    />

                    <Col col={12}>
                      <input
                        value={keyword}
                        type="text"
                        className="search-box"
                        placeholder="Keyword skill(Java,IOS...),Job Title,Company..."
                        onChange={(e) => setKeyword(e.target.value)}
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs={12} md={2}>
                <button className="search-button" type="submit">
                  Search
                </button>
              </Col>
            </Row>
          </Form>
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
