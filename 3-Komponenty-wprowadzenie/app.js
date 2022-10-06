// komponent funkcyjny, bezstanowy

const Header = () => {
  return (
      <h1>Witaj na stronie</h1>
  )
}

// komponent klasowy, stanowy

class Blog extends React.Component {
    // state = {
    //   number:0,
    // }
  render() {
    return (
      <section>
        <h2>Artykuł</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora voluptatibus eveniet architecto sint quam fuga iste? Eos ab harum aspernatur tempora perferendis sint quibusdam quod vero culpa, numquam repellendus?</p>
      </section>
    )
  }
}

const App = () => {
  return (
    <>
    <Header/>
    <Blog/>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))