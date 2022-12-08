import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import SleepForm from "../components/SleepForm";
import SleepItems from "../components/SleepItems";
import { addItems, deleteItems } from "../redux/actions";
import Chart from "../components/Data"

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      activeItem: null,
    };
  }
  render() {
    const { addItems, SleepItems, deleteItems } = this.props;
    const { show, activeItem } = this.state;
    return (
      <div>
        <div className="grid-container">
          <div className="journal">
            <h1>Sleep Tracker</h1>
            <SleepForm addItems={(item) => addItems(item)} />
          </div>
          <div className="journal" style={{ paddingTop: 35 }}>
            {SleepItems.length > 0 ? (
              SleepItems.map((item) => {
                return (
                  <SleepItems
                    deleteItems={(id) => deleteItems(id)}
                    showModal={(item) =>
                      this.setState({ show: true, activeItem: item })
                    }
                    item={item}
                  />
                );
              })
            ) : (
              < Chart />
            )}
          </div>
        </div>
        <Modal
          size="lg"
          show={show}
          onHide={() => this.setState({ show: false })}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {activeItem?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{activeItem?.text}</Modal.Body>
          <Modal.Footer>{activeItem?.date}</Modal.Footer>
        </Modal>
        <div>Data</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ SleepItems: state.SleepItems });

const mapDispatchToProps = (dispatch) => ({
  addItems: (item) => dispatch(addItems(item)),
  deleteItems: (id) => dispatch(deleteItems(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
