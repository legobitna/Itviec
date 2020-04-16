import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import moment from "moment";
import { useHistory } from "react-router-dom";

/**
Sample prop job:
{
    id: 0,
    img: "https://cdn.itviec.com/employers/antada/logo/s65/re9ZtCRGvxqdPL8otJ8Ca8zR/ANTADA%20-%20LOGO_final.png",
    title: "Game developer",
    salary: 2500,
    city: "Ho Chi Minh",
    district: 3,
    time: 1586762303771,
    tags: [],
    isHotjob:true,
    benefit: [],
    description: "Experience in React"
},

**/

export default function JobCard({ job }) {
  let history = useHistory();

  const jobSelect = () => {
    history.push(`/job/${job.id}`);
  };
  if (job == null) {
    return <div>no data yet</div>;
  }
  return (
    <div className="job-content" onClick={() => jobSelect()}>
      <Row>
        <Col>
          <div className="jobcard-logo">
            <img src={job.img} />
          </div>
        </Col>
        <Col xs={8}>
          <div className="jobcard-descriptions">
            <h2 className="jobcard-title">{job.title}</h2>
            <div>$ {job.salary}</div>
            <div>
              <ul className="jobcard-benefit">
                {job.benefit.map((job) => (
                  <li>{job}</li>
                ))}
              </ul>
            </div>
            <div>
              {job.tags.map((job) => (
                <Badge variant="secondary" style={{ marginRight: "10px" }}>
                  {job}
                </Badge>
              ))}
            </div>
          </div>
        </Col>
        <Col>
          <div className="date-location-box">
            {job.isHotjob ? (
              <div className="hotjob-label">Hot Job</div>
            ) : (
              <div></div>
            )}

            <div className="jobcard-location">
              <div>{job.city}</div>
              <div>District {job.district}</div>
            </div>
            <div style={{ color: "#06c" }}>{moment(job.time).fromNow()}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
