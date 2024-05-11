// const div = document.createElement("div");
// div.setAttribute("title", "Outer Div");
// const h1 = document.createElement("h1");
// h1.innerHTML = "Hello World!";
// div.appendChild(h1);
// document.querySelector("#contents").appendChild(div);

// const h1 = React.createElement("h1", {}, "Hello World!");
// const div = React.createElement("div", { title: "Outer Div" }, h1);
// ReactDOM.render(div, document.querySelector("#contents"));

const div = (
    <div title="Outer Div" className="wrapper">
        <h1>Hello World!</h1>
    </div>
);
ReactDOM.render(div, document.querySelector("#contents"));
