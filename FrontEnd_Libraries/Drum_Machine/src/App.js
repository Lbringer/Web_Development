import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.press = this.press.bind(this);
    this.state = {
      play: false
    }
  }
  componentDidMount() {
    document.querySelector("body").addEventListener("keydown", this.press);
  }
  componentWillUnmount() {
    document.querySelector("body").removeEventListener("keydown", this.press);
  }
  press(e) {
    console.log(e.key)
    let letter = e.key;
    let id = letter.toUpperCase();
    let display = document.querySelector("#display");
    switch (id) {
      case "Q": {
        display.innerHTML = "Playing Unravel";
      }
        break;
      case "W": {
        display.innerHTML = "Playing Hacking to the Gate";
      }
        break;
      case "E": {
        display.innerHTML = "Playing Gurenge";
      }
        break;
      case "A": {
        display.innerHTML = "Playing MHA S3 op";
      }
        break;
      case "S": {
        display.innerHTML = "Playing Polaris";
      }
        break;
      case "D": {
        display.innerHTML = "Playing Kawaki Wo Ameku";
      }
        break;
      case "Z": {
        display.innerHTML = "Playing Black Catcher";
      }
        break;
      case "X": {
        display.innerHTML = "Playing Black Rover";
      }
        break;
      case "C": {
        display.innerHTML = "Playing Tabibito no Uta";
      }
        break;
      default: {
        display.innerHTML = "Press or Click a valid key"
      }
    }
    let player = document.querySelector(`#${id}`);
    if (!this.state.play) {
      player.play();
    }
    else {
      document.querySelector("#display").innerHTML = "Press or Click another key";
      player.load();
    }
    this.setState((state) => ({ play: !state.play }));
  }
  click(e) {
    console.log(this.state.play)
    let letter = e.target.id;
    let id = letter.toUpperCase();
    let display = document.querySelector("#display");
    switch (id) {
      case "Q": {
        display.innerHTML = "Playing Unravel";
      }
        break;
      case "W": {
        display.innerHTML = "Playing Hacking to the Gate";
      }
        break;
      case "E": {
        display.innerHTML = "Playing Gurenge";
      }
        break;
      case "A": {
        display.innerHTML = "Playing MHA S3 op";
      }
        break;
      case "S": {
        display.innerHTML = "Playing Polaris";
      }
        break;
      case "D": {
        display.innerHTML = "Playing Kawaki Wo Ameku";
      }
        break;
      case "Z": {
        display.innerHTML = "Playing Black Catcher";
      }
        break;
      case "X": {
        display.innerHTML = "Playing Black Rover";
      }
        break;
      case "C": {
        display.innerHTML = "Playing Tabibito no Uta";
      }
        break;
      default: {
        display.innerHTML = "Press or Click a valid key"
      }
    }
    let player = document.querySelector(`#${id}`);
    if (!this.state.play) {
      player.play();
    }
    else {
      document.querySelector("#display").innerHTML = "Press or Click another key";
      player.load();
    }
    this.setState((state) => ({ play: !state.play }));
  }
  render() {
    return (
      <div id="drum-machine">
        <div id="keypad">
          <button className='drum-pad' id='q' onClick={this.click}>
            <audio className='clip' src="https://docs.google.com/uc?export=download&id=1n_CKOBamzmczmWaFnIFJE0k7mFp70L-X" id='Q'>
            </audio>
            Q
          </button>
          <button className='drum-pad' id='w' onClick={this.click}>
            <audio className='clip' src="https://docs.google.com/uc?export=download&id=1psJQmmE0G2jVD-dppHugfzOu_GDAcWGJ" id='W'>
            </audio>
            W
          </button>
          <button className='drum-pad' id='e' onClick={this.click}>
            <audio className='clip' src="https://docs.google.com/uc?export=download&id=1LHYpeIMpWprM6zW6axsyrx2QilmYmE6n" id='E'>
            </audio>
            E
          </button>
          <button className='drum-pad' id='a' onClick={this.click}>
            <audio className='clip' src="https://docs.google.com/uc?export=download&id=1Jzpyts93jyKjNxDq4XQbcpxjxNHdY5aI" id='A'>
            </audio>
            A
          </button>
          <button className='drum-pad' id='s' onClick={this.click}>
            <audio className='clip' src="https://docs.google.com/uc?export=download&id=1tMF8F-bCrD5UNTmV4pPlyzNLmSu7NEsW" id='S'>
            </audio>
            S
          </button>
          <button className='drum-pad' id='d' onClick={this.click}>
            <audio className='clip' src="https://docs.google.com/uc?export=download&id=1XBDCaVjfnPFMP4PLdwce4HFkasGZnEAN" id='D'>
            </audio>
            D
          </button>
          <button className='drum-pad' id='z' onClick={this.click}>
            <audio className='clip' src="https://docs.google.com/uc?export=download&id=1XLIoDsjsuh0ZkMM-t9Mzrc0M7-APc_RD" id='Z'>
            </audio>
            Z
          </button>
          <button className='drum-pad' id='x' onClick={this.click}>
            <audio className='clip' src="https://docs.google.com/uc?export=download&id=1Zf1TgVjvRHk4fR1sOkyxCCZaEMJrMQMp" id='X'>
            </audio>
            X
          </button>
          <button className='drum-pad' id='c' onClick={this.click}>
            <audio className='clip' src="https://docs.google.com/uc?export=download&id=1VUHFhx4wk6vNhkFrfmHZGYas7tgi6pok" id='C'>
            </audio>
            C
          </button>
        </div>
        <div id="display"></div>
      </div>
    )
  }
}

export default App;
