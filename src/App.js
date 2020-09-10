import React, { Component } from "react";
import "./index.css";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import SpacexListing from "./components/spacex/SpacexListing";
import Filters from "./components/spacex/Filters";
import { connect } from "react-redux";
import { compose } from "redux";
import { listSpacexLaunches } from "./store/actions/spacexActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.listSpacexLaunches();
  }

  render() {
    const { spacexLists, isLoading } = this.props;
    // if (isLoading)
    //   return (
    //     <Row>
    //       <Col>
    //         <div className="d-flex align-items-center justify-content-center">
    //           <Spinner animation="grow" />
    //         </div>
    //       </Col>
    //     </Row>
    //   );
    return (
      <Container fluid className="p-3 min-vh-100">
        <h1 className="main-header mb-4 text-center">SpaceX Launch Programs</h1>
        <Row className="main-content">
          <Col>
            <Filters />
          </Col>
          <Col>
            {isLoading ? (
              <div className="d-flex align-items-center justify-content-center">
                <Spinner animation="grow" />
              </div>
            ) : (
              <SpacexListing spacexLists={spacexLists} />
            )}
          </Col>
        </Row>

        <p className="text-center pt-4 pb-2">
          <strong>Developed by: Subhabrata Khatua</strong>
        </p>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    spacexLists: state.spacex.spacexLists,
    isLoading: state.spacex.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listSpacexLaunches: () => dispatch(listSpacexLaunches()),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(App);
