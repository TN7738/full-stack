// const div = (
//     <div title="Outer Div" className="wrapper">
//         <h1>Hello World!</h1>
//     </div>
// );

// Class based component
class HelloWorld extends React.Component {
  render() {
    const continents = ["Asia", "Africa", "Russia"];
    const helloContinents = Array.from(continents, continent => `Hello ${continent}!`);
    console.log("Array", helloContinents);
    const str = helloContinents.join(" ");
    console.log("String", str);
    return /*#__PURE__*/React.createElement("div", {
      title: "Outer Div",
      className: "wrapper"
    }, /*#__PURE__*/React.createElement("h1", null, "From String: ", str), /*#__PURE__*/React.createElement("p", null, "From Array:"), helloContinents.map((continent, indx) => /*#__PURE__*/React.createElement("h3", {
      key: indx
    }, continent)));
  }
}

// Function based component
const HelloWorldFunctn = () => {
  const continents = ["Asia", "Africa", "Russia"];
  const helloContinents = Array.from(continents, continent => `Hello ${continent}!`);
  const str = helloContinents.join(" ");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "From String: ", str), /*#__PURE__*/React.createElement("p", null, "From Array:"), helloContinents.map((continent, indx) => /*#__PURE__*/React.createElement("h3", {
    key: indx
  }, continent)));
};

// Child Component
const IssueTable = ({
  text
}) => {
  console.log(text);
  return /*#__PURE__*/React.createElement("h4", null, "This is ", text);
};
const IssueAdd = () => {
  return /*#__PURE__*/React.createElement("h4", null, "This is IssueAdd");
};
const IssuuFilter = () => {
  return /*#__PURE__*/React.createElement("h4", null, "This is IssuuFilter");
};

// Parent Component
const IssueList = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IssueTable, {
    text: "IssueTable"
  }), /*#__PURE__*/React.createElement(IssueAdd, null), /*#__PURE__*/React.createElement(IssuuFilter, null));
};
const element = /*#__PURE__*/React.createElement(IssueList, null);
ReactDOM.render(element, document.querySelector("#contents"));