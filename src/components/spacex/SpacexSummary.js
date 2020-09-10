import React from "react";
import "./index.css";
import { Card, Image } from "react-bootstrap";

const SpacexListing = (props) => {
  const { spacex } = props;
  return (
    <Card className="mb-3">
      <Card.Body>
        <Image
          src={spacex.links.mission_patch_small}
          className="img-fluid d-block w-100 mb-3"
          alt="image"
        />
        <Card.Title>
          <strong>{spacex.mission_name}</strong>
        </Card.Title>
        <Card.Text className="text-sm">
          <b className="d-block">Mission Ids:</b>
        </Card.Text>
        <ul>
          {spacex.mission_id &&
            spacex.mission_id.map((mid) => {
              return <li key={mid}>{mid}</li>;
            })}
        </ul>

        <Card.Text>
          <span>
            <b>Launch Year: </b> {spacex.launch_year}
          </span>
        </Card.Text>
        <Card.Text>
          <span>
            <b>Successful Launch: </b>{" "}
            {spacex.launch_success != null
              ? spacex.launch_success
                ? "True"
                : "False"
              : "N/A"}
          </span>
        </Card.Text>
        <Card.Text>
          <span>
            <b>Successful Landing: </b>{" "}
            {spacex.rocket.first_stage.cores[0].land_success != null
              ? spacex.rocket.first_stage.cores[0].land_success
                ? "True"
                : "False"
              : "N/A"}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SpacexListing;
