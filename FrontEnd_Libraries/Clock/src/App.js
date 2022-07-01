import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      mm: 25,
      ss: 0,
      timer: false,
      enter: false
    }
    this.reset = this.reset.bind(this);
    this.sdec = this.sdec.bind(this);
    this.sinc = this.sinc.bind(this);
    this.bdec = this.bdec.bind(this);
    this.binc = this.binc.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }
  reset() {
    this.setState({
      break: 5,
      session: 25,
      mm: 25,
      ss: 0,
      timer: false,
      enter: false
    })
    for (let i = 0; i < 100; i++) {
      window.clearInterval(i);
    }
    document.querySelector("#beep").load();
  }
  sdec() {
    if (this.state.session >= 2) {
      if (!this.state.timer) {
        this.setState((state) => ({ mm: state.mm - 1 }));
      }
      this.setState((state) => ({ session: state.session - 1 }));
    }
  }
  sinc() {
    if (this.state.session < 59) {
      if (!this.state.timer) {
        this.setState((state) => ({ mm: state.mm + 1 }));
      }
      this.setState((state) => ({ session: state.session + 1 }));
    }
  }
  bdec() {
    if (this.state.break >= 2) {
      this.setState((state) => ({ break: state.break - 1 }));
    }
  }
  binc() {
    if (this.state.break < 59) {
      this.setState((state) => ({ break: state.break + 1 }));
    }
  }
  startTimer() {
    if (!this.state.timer) {
      setInterval(() => {
        if (!(this.state.mm === 0 && this.state.ss === 0)) {
          if (this.state.ss === 0) {
            this.setState((state) => ({ mm: state.mm - 1, ss: 60 }));
          }
          this.setState((state) => ({ ss: state.ss - 1 }));
        }
        else {
          if (!this.state.enter) {
            document.querySelector("#beep").play();
            this.setState((state) => ({ mm: state.break, enter: !state.enter }));
          }
          else {
            this.reset();
          }
        }
      }, 1000)
    }
    else {
      for (let i = 0; i < 100; i++) {
        window.clearInterval(i);
      }
    }
    this.setState((state) => ({ timer: !state.timer }));
  }
  render() {
    return (<div id="clock">
      <h1>25 + 5 CLOCK</h1>
      <div className='con' id="one">
        <div className='con2'>
          <div className="label" id="break-label">Break Length</div>
          <div className='con3'>
            <button className='but' onClick={this.bdec} id="break-decrement">-</button>
            <div id="break-length" className='len'>{this.state.break}</div>
            <button className='but' onClick={this.binc} id="break-increment">+</button>
          </div>
        </div>
        <div className='con2'>
          <div className="label" id="session-label">Session Length</div>
          <div className='con3'>
            <button className='but' onClick={this.sdec} id="session-decrement">-</button>
            <div id="session-length" className='len'>{this.state.session}</div>
            <button className='but' onClick={this.sinc} id="session-increment">+</button>
          </div>
        </div>
      </div>
      <div className='con' id="two">
        <div id="timer-label">{this.state.enter ? "Break" : "Session"}</div>
        <div id="time-left">{`${this.state.mm < 10 ? `0${this.state.mm}` : this.state.mm} : ${this.state.ss < 10 ? `0${this.state.ss}` : this.state.ss}`}</div>
      </div>
      <div className='con' id="three">
        <button onClick={this.startTimer} id="start_stop" className='but2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
        </svg></button>
        <button id="reset" onClick={this.reset} className='but2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
        </svg></button>
      </div>
      <audio id="beep" src='https://docs.google.com/uc?export=download&id=15L60GqBje1zC_H3ChoiQTpCYPHSS2dMa'></audio>
    </div >)
  }
}

export default App;
