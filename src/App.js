// Child Component
const IssueRow = ({ style, issue }) => {
    console.log("issue", issue);
    console.log("entries", Object.entries(issue));
    const created =
        issue.created !== undefined
            ? issue.created.toDateString()
            : "Date not defined";

    const due =
        issue.due !== undefined ? issue.due.toDateString() : "Date not defined";
    return (
        <tr>
            {Object.entries(issue).map((value) => {
                if (value[0] === "created") {
                    return (
                        <td key={value[0]} style={style}>
                            {created}
                        </td>
                    );
                } else if (value[0] === "due") {
                    return (
                        <td key={value[0]} style={style}>
                            {due}
                        </td>
                    );
                }
                return (
                    <td key={value[0]} style={style}>
                        {value[1]}
                    </td>
                );
            })}
            {/* <td style={style}>{issue.id}</td>
            <td style={style}>{issue.status}</td>
            <td style={style}>{issue.owner}</td>
            <td style={style}>{issue.effort}</td>
            <td style={style}>{created}</td>
            <td style={style}>{due}</td>
            <td style={style}>{issue.title}</td> */}
        </tr>
    );
};

const IssueTable = ({ issues }) => {
    // console.log("issueList", issues);

    const rowStyle = { border: "1px solid silver", padding: 4 };

    const issueRows = issues.map((issue) => (
        <IssueRow key={issue.id} style={rowStyle} issue={issue} />
    ));

    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(issues[0]).map((title) => (
                        <th key={title} style={rowStyle}>
                            {title}
                        </th>
                    ))}
                    {/* <th style={rowStyle}>ID</th>
                    <th style={rowStyle}>Status</th>
                    <th style={rowStyle}>Owner</th>
                    <th style={rowStyle}>Effort</th>
                    <th style={rowStyle}>Created</th>
                    <th style={rowStyle}>Due</th>
                    <th style={rowStyle}>Title</th> */}
                </tr>
            </thead>
            <tbody>{issueRows}</tbody>
        </table>
    );
};

const IssueAdd = () => {
    return <h4>This is IssueAdd</h4>;
};

const IssuuFilter = () => {
    return <h4 style={{ color: "red" }}>This is IssuuFilter</h4>;
};

// Parent Component
const IssueList = () => {
    const issueList = [
        {
            id: 1,
            status: "New",
            owner: "Raven",
            effort: 5,
            created: new Date("2018-08-15"),
            due: undefined,
            title: "Error in console while click Add button",
        },
        {
            id: 2,
            status: "Assigned",
            owner: "Eddie",
            effort: 14,
            created: new Date("2018-08-16"),
            due: new Date("2018-08-30"),
            title: "Missing border bottom on panel",
        },
    ];

    return (
        <>
            <IssueTable issues={issueList} />
            <IssueAdd />
            <IssuuFilter />
        </>
    );
};

const element = <IssueList />;

ReactDOM.render(element, document.querySelector("#contents"));
