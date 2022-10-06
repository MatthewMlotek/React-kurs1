class Counter extends React.Component {

  state = {
    count: 0,
    result: this.props.result
  }

  handleMathClick(type, number=1) {
    // debugger
    if(type === "subtraction") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result - number
      }))
    }else if(type === "reset") {
      this.setState(prevState => (
        {
          count: prevState.count + 1,
          result: this.props.result
        }
        
      ))
    }else {
      this.setState(prevState => (
        {
          count: prevState.count + 1,
          result: prevState.result + number
        }
      ))
    }
  }

render() {
  return (
    <>
      <MathButton
       name="-10"
      number="10"
      type="subtraction" 
      click={this.handleMathClick.bind(this)}
      />
      <MathButton
       name="-1"
      number="1"
      type="subtraction" 
      click={this.handleMathClick.bind(this)}
      />
      <MathButton
       name="reset"
      number="0"
      type="reset" 
      click={this.handleMathClick.bind(this)}
      />
      <MathButton
       name="+1"
      number="1"
      type="addition" 
      click={this.handleMathClick.bind(this)}
      />
      <MathButton
       name="+10"
      number="10"
      type="addition" 
      click={this.handleMathClick.bind(this)}
      />
      <h1>Liczba kliknięć: {this.state.count}</h1>
      <h1>Wynik: {this.state.result}</h1>
    </>
  )
}

}

const MathButton = (props) => {
  return(
   <button onClick={() => props.click(props.type, parseInt(props.number))}>{props.name}</button>
   )
}

ReactDOM.render(<Counter result={0}/>, document.getElementById('root'))