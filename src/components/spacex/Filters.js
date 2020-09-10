import React, { Component } from "react";
import "./index.css";
import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { compose } from "redux";
import { listSpacexLaunches } from "../../store/actions/spacexActions";

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedYear: "",
      launchSuccess: "",
      landingSuccess: "",
      queryParams: { limit: 100 },
    };
  }

  handleYearClick = (e) => {
    this.setState(
      {
        selectedYear: e.target.value,
        queryParams: {
          ...this.state.queryParams,
          launch_year: e.target.value,
        },
      },
      (prevState, props) => {
        this.props.listSpacexLaunches({
          ...this.state.queryParams,
        });
      }
    );
  };
  handleLaunchClick = (e) => {
    this.setState(
      {
        launchSuccess: e.target.value,
        queryParams: {
          ...this.state.queryParams,
          launch_success: e.target.value,
        },
      },
      (prevState, props) => {
        this.props.listSpacexLaunches({
          ...this.state.queryParams,
        });
      }
    );
  };
  handleLandClick = (e) => {
    this.setState(
      {
        landingSuccess: e.target.value,
        queryParams: {
          ...this.state.queryParams,
          land_success: e.target.value,
        },
      },
      (prevState, props) => {
        this.props.listSpacexLaunches({
          ...this.state.queryParams,
        });
      }
    );
  };

  resetFilter = () => {
    this.setState(
      {
        selectedYear: "",
        launchSuccess: "",
        landingSuccess: "",
        queryParams: {
          limit: 100,
        },
      },
      () => {
        this.props.listSpacexLaunches({
          ...this.state.queryParams,
        });
      }
    );
  };

  createLaunchFilter = () => {
    let launchYears = [];
    let startYear = 2006;

    for (let i = 0; i <= 14; i++) {
      launchYears.push(
        <Col key={startYear}>
          <Button
            variant="green"
            size="sm"
            value={startYear}
            onClick={this.handleYearClick}
            className={
              this.state.selectedYear === startYear.toString() ? "active" : ""
            }
          >
            {startYear++}
          </Button>
        </Col>
      );
    }
    return launchYears;
  };

  render() {
    return (
      <section className="filter mb-4 p-2">
        <div className="section-heading">
          <h5 className="p-2">Filters</h5>
        </div>
        <div className="launch-year text-center mb-2">
          <span className="text-muted">Launch Year</span>
          <hr className="hr-ruler" />
          <Row lg={2} xs={2}>
            {this.createLaunchFilter()}
          </Row>
        </div>
        <div className="success-launch text-center  mb-2">
          <span className="text-muted">Successful Launch</span>
          <hr className="hr-ruler" />
          <Row lg={2} xs={2}>
            <Col>
              <Button
                variant="green"
                size="sm"
                value="true"
                onClick={this.handleLaunchClick}
                className={this.state.launchSuccess === "true" ? "active" : ""}
              >
                True
              </Button>
            </Col>
            <Col>
              <Button
                variant="green"
                size="sm"
                value="false"
                onClick={this.handleLaunchClick}
                className={this.state.launchSuccess === "false" ? "active" : ""}
              >
                False
              </Button>
            </Col>
          </Row>
        </div>
        <div className="success-landing text-center mb-4">
          <span className="text-muted">Successful Landing</span>
          <hr className="hr-ruler" />
          <Row lg={2} xs={2}>
            <Col>
              <Button
                variant="green"
                size="sm"
                value="true"
                onClick={this.handleLandClick}
                className={this.state.landingSuccess === "true" ? "active" : ""}
              >
                True
              </Button>
            </Col>
            <Col>
              <Button
                variant="green"
                size="sm"
                value="false"
                onClick={this.handleLandClick}
                className={
                  this.state.landingSuccess === "false" ? "active" : ""
                }
              >
                False
              </Button>
            </Col>
          </Row>
        </div>
        <div className="reset">
          <Row>
            <Col>
              <Button
                variant="danger"
                size="sm"
                value="false"
                onClick={this.resetFilter}
                block
              >
                Reset
              </Button>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    listSpacexLaunches: (params) => dispatch(listSpacexLaunches(params)),
  };
};

export default compose(connect("", mapDispatchToProps))(Filters);
