import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createcard(emoji) {
  return (
    <Card
      id={emoji.id}
      key={emoji.id}
      Emoji={emoji.emoji}
      Name={emoji.name}
      Meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createcard)}</dl>
    </div>
  );
}

export default App;
