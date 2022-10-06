// console.log(React);
// console.log(ReactDOM);

const element = <div id="app">Pierwszy element React</div>

const element2 = React.createElement(
  "div",
  null,
  "Pierwszy element React"
);

const element3 = React.createElement(
  "p",
  {id:'par1'},
  "lorem ipsum"
)
const element4 = (
  <div>
    <p id="main" className="red">Tekst</p>
  </div>
)
const element5 = (
  <React.Fragment>
    <section></section>
    <section></section>
  </React.Fragment>
)

const element6 = (
  <>
    <section></section>
    <section></section>
  </>
)