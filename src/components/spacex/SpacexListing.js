import React from "react";
import "./index.css";
import { Row, Col } from "react-bootstrap";
import SpacexSummary from "./SpacexSummary";

const SpacexListing = (props) => {
  const { spacexLists } = props;
  if (spacexLists.length < 1)
    return <p className="text-center mt-5">No spacex mission found.</p>;

  return (
    <Row className="list" lg={4} md={3} sm={2} xs={1}>
      {spacexLists &&
        spacexLists.map((spacex) => {
          return (
            <Col key={spacex.flight_number}>
              <SpacexSummary spacex={spacex} />
            </Col>
          );
        })}
    </Row>
  );
};

export default SpacexListing;
