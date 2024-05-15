// const div = (
//     <div title="Outer Div" className="wrapper">
//         <h1>Hello World!</h1>
//     </div>
// );

// Class based component
class HelloWorld extends React.Component {
    render() {
        const continents = ["Asia", "Africa", "Russia"];
        const helloContinents = Array.from(
            continents,
            (continent) => `Hello ${continent}!`
        );
        console.log("Array", helloContinents);
        const str = helloContinents.join(" ");
        console.log("String", str);
        return (
            <div title="Outer Div" className="wrapper">
                <h1>From String: {str}</h1>
                <p>From Array:</p>
                {helloContinents.map((continent, indx) => (
                    <h3 key={indx}>{continent}</h3>
                ))}
            </div>
        );
    }
}

// Function based component
const HelloWorldFunctn = () => {
    const continents = ["Asia", "Africa", "Russia"];
    const helloContinents = Array.from(
        continents,
        (continent) => `Hello ${continent}!`
    );
    const str = helloContinents.join(" ");
    return (
        <>
            <h1>From String: {str}</h1>
            <p>From Array:</p>
            {helloContinents.map((continent, indx) => (
                <h3 key={indx}>{continent}</h3>
            ))}
        </>
    );
};

// Child Component
const IssueTable = ({ text }) => {
    console.log(text);
    return <h4>This is {text}</h4>;
};

const IssueAdd = () => {
    return <h4>This is IssueAdd</h4>;
};

const IssuuFilter = () => {
    return <h4>This is IssuuFilter</h4>;
};

// Parent Component
const IssueList = () => {
    return (
        <>
            <IssueTable text={"IssueTable"} />
            <IssueAdd />
            <IssuuFilter />
        </>
    );
};

const element = <IssueList />;

ReactDOM.render(element, document.querySelector("#contents"));
