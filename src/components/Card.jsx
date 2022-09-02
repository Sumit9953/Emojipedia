import React from "react";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.Emoji}
        </span>
        <span>{props.Name}</span>
      </dt>
      <dd>{props.Meaning}</dd>
    </div>
  );
}

export default Card;
