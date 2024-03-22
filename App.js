const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "h1 tag"),
    React.createElement("h5", {}, "h5 tag")]
    )
  
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
