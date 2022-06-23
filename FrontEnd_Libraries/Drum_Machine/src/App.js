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
  press() {
    document.addEventListener('keydown', (e) => {
      console.log(this.state.play)
      let letter = e.key;
      let id = letter.toUpperCase();
      let player = document.querySelector(`#${id}`);
      if (!this.state.play) {
        player.play();
      }
      else {
        player.load();
      }
    })
    this.setState((state) => ({ play: !state.play }));
  }
  click(e) {
    console.log(this.state.play)
    let letter = e.target.id;
    let id = letter.toUpperCase();
    let player = document.querySelector(`#${id}`);
    if (!this.state.play) {
      player.play();
    }
    else {
      player.load();
    }
    document.querySelector("#display").innerHTML = "Playing";
    this.setState((state) => ({ play: !state.play }));
  }
  render() {
    return (
      <div id="drum-machine" onKeyPress={this.press}>
        <div id="keypad">
          <button className='drum-pad' id='q' onClick={this.click}>
            <audio controls className='clip' id='Q'>
              <source src="https://docs.google.com/uc?export=download&id=1n_CKOBamzmczmWaFnIFJE0k7mFp70L-X" />
            </audio>
          </button>
          <button className='drum-pad' id='w'>

          </button>
          <div className='drum-pad' id='e'></div>
          <div className='drum-pad' id='a'></div>
          <div className='drum-pad' id='s'></div>
          <div className='drum-pad' id='d'></div>
          <div className='drum-pad' id='z'></div>
          <div className='drum-pad' id='x'></div>
          <div className='drum-pad' id='c'></div>
        </div>
        <div id="display"></div>
      </div>
    )
  }
}

export default App;
