const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "hi from tag1"),
    React.createElement("h2", {}, "hi from tag2")
], React.createElement("div", {
    id: "child2"
}, [
    React.createElement("h1", {}, "hi from tag1"),
    React.createElement("h2", {}, "hi from tag2")
])));
const heading = React.createElement("h1", {
    id: "heading"
}, "hello from react!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
