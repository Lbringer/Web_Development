import React from 'react';
import './App.css';
const axios = require('axios').default;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      colors: [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
      ],
      color: "black"
    }
    this.req = this.req.bind(this);
  }
  componentDidMount() {
    this.req();
  }
  req() {
    axios.get('https://api.quotable.io/random')
      .then(r => {
        this.setState({ quote: r.data.content, author: r.data.author })
      })
      .catch(e => console.log(e));
    let random = Math.floor(Math.random() * 12);
    let col = this.state.colors[random];
    this.setState({ color: col });
    document.querySelector('body').style.backgroundColor = this.state.color;
    document.querySelector('#text').style.color = this.state.color;
    document.querySelector('#author').style.color = this.state.color;
    document.querySelector('button').style.backgroundColor = this.state.color;
    document.querySelector('a').style.backgroundColor = this.state.color;
  }

  render() {
    return (
      <div id='quote-box'>
        <div id='text'>"{this.state.quote}"</div>
        <div id='author'>- {this.state.author}</div>
        <div className='butCon'>
          <a href={"twitter.com/intent/tweet" + this.state.quote + this.state.author} id='tweet-quote' target="_blank"><i class="fa fa-twitter"></i></a>
          <button id='new-quote' onClick={this.req}>New Quote</button>
        </div>
      </div>
    );
  }
}

export default App;
