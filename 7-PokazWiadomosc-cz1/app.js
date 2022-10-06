class Message extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false
    }
    this.handleMessageButton = this.handleMessageButton.bind(this)
  }

  handleMessageButton() {

    this.setState({
      messageIsActive: !this.state.messageIsActive
    })
  }
  
  
  render() {
    console.log(this.state.messageIsActive)
    const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates id vitae dolores tempora quas, perferendis, laudantium commodi dolore ducimus ullam mollitia veritatis ut repellat architecto consequuntur sint impedit! Dolorem."

    return (
      <React.Fragment>
        <button onClick={this.handleMessageButton}>
          {this.state.messageIsActive ? 'Ukryj' : 'Pokaż' }
          </button>
          {/* {this.state.messageIsActive ? <p>{text}</p> : null} */}

          {this.state.messageIsActive && <p>{text}</p>}

      </React.Fragment>
    );
  }

}

ReactDOM.render(<Message/>, document.getElementById('root'))
{/* <p>{this.state.messageIsActive && text}</p> */}