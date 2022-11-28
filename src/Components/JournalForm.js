import React, { useState } from "react";

export default function JournalForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    let itemObject = {
      title: title,
      date: date,
      text: text,
    };
    props.addItems(itemObject);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="journal-form">
          <input
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Today's Entry"
            className="journal-input"
          />
          <input
            onChange={(event) => setDate(event.target.value)}
            type="date"
            className="journal-date"
          />
        </div>
        <textarea
          onChange={(event) => setText(event.target.value)}
          rows="5"
          className="journal-textarea"
        />
        <button type="submit" className="journal-button">
          Save
        </button>
      </form>
    </div>
  );
}
