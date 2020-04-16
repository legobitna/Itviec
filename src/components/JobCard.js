import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import moment from "moment";
import { useHistory } from "react-router-dom";

export default function JobCard(props) {
  let item = props.job;
  let history = useHistory();

  const jobSelect = () => {
    history.push(`/job/${item.id}`);
  };
  if (item == null) {
    return <div>no data yet</div>;
  }
  return (
    <div className="job-content" onClick={() => jobSelect()}>
      <Row>
        <Col>
          <div className="jobcard-logo">
            <img src={item.img} />
          </div>
        </Col>
        <Col xs={8}>
          <div className="jobcard-descriptions">
            <h2 className="jobcard-title">{item.title}</h2>
            <div>$ {item.salary}</div>
            <div>
              <ul className="jobcard-benefit">
                {item.benefit.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              {item.tags.map((item) => (
                <Badge variant="secondary" style={{ marginRight: "10px" }}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </Col>
        <Col>
          <div className="date-location-box">
            {item.isHotjob ? (
              <div className="hotjob-label">Hot Job</div>
            ) : (
              <div></div>
            )}

            <div className="jobcard-location">
              <div>{item.city}</div>
              <div>District {item.district}</div>
            </div>
            <div style={{ color: "#06c" }}>{moment(item.time).fromNow()}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
