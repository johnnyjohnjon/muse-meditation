import React, { useState } from "react";

export default function SleepForm(props) {
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
            placeholder="How many hours did you sleep last night?"
            className="journal-input"
          />
          <input
            onChange={(event) => setDate(event.target.value)}
            type="date"
            className="journal-date"
          />
        </div>
        <button type="submit" className="journal-button">
          Save
        </button>
      </form>
    </div>
  );
}
