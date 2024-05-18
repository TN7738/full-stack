// Child Component
const IssueRow = ({
  style,
  issue
}) => {
  console.log("issue", issue);
  console.log("entries", Object.entries(issue));
  const created = issue.created !== undefined ? issue.created.toDateString() : "Date not defined";
  const due = issue.due !== undefined ? issue.due.toDateString() : "Date not defined";
  return /*#__PURE__*/React.createElement("tr", null, Object.entries(issue).map(value => {
    if (value[0] === "created") {
      return /*#__PURE__*/React.createElement("td", {
        key: value[0],
        style: style
      }, created);
    } else if (value[0] === "due") {
      return /*#__PURE__*/React.createElement("td", {
        key: value[0],
        style: style
      }, due);
    }
    return /*#__PURE__*/React.createElement("td", {
      key: value[0],
      style: style
    }, value[1]);
  }));
};
const IssueTable = ({
  issues
}) => {
  // console.log("issueList", issues);

  const rowStyle = {
    border: "1px solid silver",
    padding: 4
  };
  const issueRows = issues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
    key: issue.id,
    style: rowStyle,
    issue: issue
  }));
  return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, Object.keys(issues[0]).map(title => /*#__PURE__*/React.createElement("th", {
    key: title,
    style: rowStyle
  }, title)))), /*#__PURE__*/React.createElement("tbody", null, issueRows));
};
const IssueAdd = () => {
  return /*#__PURE__*/React.createElement("h4", null, "This is IssueAdd");
};
const IssuuFilter = () => {
  return /*#__PURE__*/React.createElement("h4", {
    style: {
      color: "red"
    }
  }, "This is IssuuFilter");
};

// Parent Component
const IssueList = () => {
  const issueList = [{
    id: 1,
    status: "New",
    owner: "Raven",
    effort: 5,
    created: new Date("2018-08-15"),
    due: undefined,
    title: "Error in console while click Add button"
  }, {
    id: 2,
    status: "Assigned",
    owner: "Eddie",
    effort: 14,
    created: new Date("2018-08-16"),
    due: new Date("2018-08-30"),
    title: "Missing border bottom on panel"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IssueTable, {
    issues: issueList
  }), /*#__PURE__*/React.createElement(IssueAdd, null), /*#__PURE__*/React.createElement(IssuuFilter, null));
};
const element = /*#__PURE__*/React.createElement(IssueList, null);
ReactDOM.render(element, document.querySelector("#contents"));