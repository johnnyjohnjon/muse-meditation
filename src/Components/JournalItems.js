import React from "react";
import { addItems, deleteItems } from "/Users/sjamuar/Desktop/muse-meditation/src/redux/actions.js";
import { MdDeleteForever } from "react-icons/md";

export default function JournalItems({ item, showModal, deleteItems }) {
  return (
    <div className="journal-row">
      <span onClick={() => showModal(item)}>{item.title}</span>
      <div>
        <span className="date">{item.date}</span>
        <MdDeleteForever
          onClick={() => deleteItems(item.id)}
          className="delete"
          style={{ color: "red" }}
        />
      </div>
    </div>
  );
}
