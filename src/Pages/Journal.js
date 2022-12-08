import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import JournalForm from "/Users/JohnD/muse/src/Components/JournalForm.js";
import JournalItems from "/Users/JohnD/muse/src/Components/JournalItems.js";
import { addItems, deleteItems } from "/Users/JohnD/muse/src/redux/actions.js";
import "/Users/JohnD/muse/src/App.css";

export class Journal extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      activeItem: null,
    };
  }
  render() {
    const { addItems, journalItems, deleteItems } = this.props;
    const { show, activeItem } = this.state;
    console.log(journalItems);
    return (
      <div>
        <div className="grid-container">
          <div className="journal">
            <h1>My Journal</h1>
            <JournalForm addItems={(item) => addItems(item)} />
          </div>
          <div className="journal" style={{ paddingTop: 35 }}>
            {journalItems.length > 0 ? (
              journalItems.map((item) => {
                return (
                  <JournalItems
                    deleteItems={(id) => deleteItems(id)}
                    showModal={(item) =>
                      this.setState({ show: true, activeItem: item })
                    }
                    item={item}
                  />
                );
              })
            ) : (
              <h1>No entries</h1>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ journalItems: state.journalItems });

const mapDispatchToProps = (dispatch) => ({
  addItems: (item) => dispatch(addItems(item)),
  deleteItems: (id) => dispatch(deleteItems(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Journal);
