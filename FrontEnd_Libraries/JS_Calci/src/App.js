import React from 'react';
import './App.css'
const Equation = require('equations').default
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dis: "",
      dis2: "",
      dec: false,
      eq: false,
      val: null
    }
    this.click = this.click.bind(this);
  }
  click(e) {
    let val = e.target.id;
    switch (val) {
      case "seven": {
        if (this.state.eq) {
          this.setState({ dis2: "" });
          this.setState({ dis: "" });
          this.setState({ dec: false });
          this.setState({ eq: false });
        }
        if (this.state.dis2 == "x" || this.state.dis2 == "/" || this.state.dis2 == "-" || this.state.dis2 == "+") {
          this.setState({ dis2: "" });
        }
        this.setState((state) => ({ dis2: state.dis2 + "7" }));
        this.setState((state) => ({ dis: state.dis + "7" }))
      }
        break;
      case "eight": {
        if (this.state.eq) {
          this.setState({ dis2: "" });
          this.setState({ dis: "" });
          this.setState({ dec: false });
          this.setState({ eq: false });
        }
        if (this.state.dis2 == "x" || this.state.dis2 == "/" || this.state.dis2 == "-" || this.state.dis2 == "+") {
          this.setState({ dis2: "" });
        }
        this.setState((state) => ({ dis2: state.dis2 + "8" }))
        this.setState((state) => ({ dis: state.dis + "8" }))
      }
        break;
      case "nine": {
        if (this.state.eq) {
          this.setState({ dis2: "" });
          this.setState({ dis: "" });
          this.setState({ dec: false });
          this.setState({ eq: false });
        }
        if (this.state.dis2 == "x" || this.state.dis2 == "/" || this.state.dis2 == "-" || this.state.dis2 == "+") {
          this.setState({ dis2: "" });
        }
        this.setState((state) => ({ dis2: state.dis2 + "9" }))
        this.setState((state) => ({ dis: state.dis + "9" }))
      }
        break;
      case "four": {
        if (this.state.eq) {
          this.setState({ dis2: "" });
          this.setState({ dis: "" });
          this.setState({ dec: false });
          this.setState({ eq: false });
        }
        if (this.state.dis2 == "x" || this.state.dis2 == "/" || this.state.dis2 == "-" || this.state.dis2 == "+") {
          this.setState({ dis2: "" });
        }
        this.setState((state) => ({ dis2: state.dis2 + "4" }))
        this.setState((state) => ({ dis: state.dis + "4" }))
      }
        break;
      case "five": {
        if (this.state.eq) {
          this.setState({ dis2: "" });
          this.setState({ dis: "" });
          this.setState({ dec: false });
          this.setState({ eq: false });
        }
        if (this.state.dis2 == "x" || this.state.dis2 == "/" || this.state.dis2 == "-" || this.state.dis2 == "+") {
          this.setState({ dis2: "" });
        }
        this.setState((state) => ({ dis2: state.dis2 + "5" }))
        this.setState((state) => ({ dis: state.dis + "5" }))
      }
        break;
      case "six": {
        if (this.state.eq) {
          this.setState({ dis2: "" });
          this.setState({ dis: "" });
          this.setState({ dec: false });
          this.setState({ eq: false });
        }
        if (this.state.dis2 == "x" || this.state.dis2 == "/" || this.state.dis2 == "-" || this.state.dis2 == "+") {
          this.setState({ dis2: "" });
        }
        this.setState((state) => ({ dis2: state.dis2 + "6" }))
        this.setState((state) => ({ dis: state.dis + "6" }))
      }
        break;
      case "one": {
        if (this.state.eq) {
          this.setState({ dis2: "" });
          this.setState({ dis: "" });
          this.setState({ dec: false });
          this.setState({ eq: false });
        }
        if (this.state.dis2 == "x" || this.state.dis2 == "/" || this.state.dis2 == "-" || this.state.dis2 == "+") {
          this.setState({ dis2: "" });
        }
        this.setState((state) => ({ dis2: state.dis2 + "1" }))
        this.setState((state) => ({ dis: state.dis + "1" }))
      }
        break;
      case "two": {
        if (this.state.eq) {
          this.setState({ dis2: "" });
          this.setState({ dis: "" });
          this.setState({ dec: false });
          this.setState({ eq: false });
        }
        if (this.state.dis2 == "x" || this.state.dis2 == "/" || this.state.dis2 == "-" || this.state.dis2 == "+") {
          this.setState({ dis2: "" });
        }
        this.setState((state) => ({ dis2: state.dis2 + "2" }))
        this.setState((state) => ({ dis: state.dis + "2" }))
      }
        break;
      case "three": {
        if (this.state.eq) {
          this.setState({ dis2: "" });
          this.setState({ dis: "" });
          this.setState({ dec: false });
          this.setState({ eq: false });
        }
        if (this.state.dis2 == "x" || this.state.dis2 == "/" || this.state.dis2 == "-" || this.state.dis2 == "+") {
          this.setState({ dis2: "" });
        }
        this.setState((state) => ({ dis2: state.dis2 + "3" }))
        this.setState((state) => ({ dis: state.dis + "3" }))
      }
        break;
      case "zero": {
        if (this.state.dis2 != "0") {
          if (this.state.eq) {
            this.setState({ dis2: "" });
            this.setState({ dis: "" });
            this.setState({ dec: false });
            this.setState({ eq: false });
          }
          if (this.state.dis2 == "x" || this.state.dis2 == "/" || this.state.dis2 == "-" || this.state.dis2 == "+") {
            this.setState({ dis2: "" });
          }
          if (this.state.dis2 == "/") { alert("Zero error") }
          else {
            this.setState((state) => ({ dis2: state.dis2 + "0" }))
            this.setState((state) => ({ dis: state.dis + "0" }))
          }
        }
      }
        break;
      case "decimal": {
        if (this.state.eq) {
          this.setState({ dis2: "" });
          this.setState({ dis: "" });
          this.setState({ dec: false });
          this.setState({ eq: false });
        }
        if (this.state.dis2 == "x" || this.state.dis2 == "/" || this.state.dis2 == "-" || this.state.dis2 == "+") {
          this.setState({ dis2: "" });
        }
        if (!this.state.dec) {
          this.setState((state) => ({ dec: !state.dec }));
          this.setState((state) => ({ dis2: state.dis2 + "." }))
          this.setState((state) => ({ dis: state.dis + "." }))
        }
      }
        break;
      case "clear": {
        this.setState({ dis2: "" });
        this.setState({ dis: "" });
        this.setState({ dec: false });
        this.setState({ eq: false });
        this.setState({ val: null });
      }
        break;
      case "add": {
        this.setState({ dec: false });
        if (this.state.eq) {
          this.setState({ dis: this.state.val });
          this.setState({ eq: false });
        }
        if (this.state.dis2 == "x" || this.state.dis2 == "/" || this.state.dis2 == "+") {
          this.setState((state) => {
            let newStr = state.dis.slice(0, -1);
            return { dis: newStr };
          })
        }
        if (this.state.dis2 == "-") {
          this.setState((state) => {
            let newStr = state.dis.substring(0, state.dis.length - 2);
            return { dis: newStr };
          })
        }
        this.setState({ dis2: "+" });
        this.setState((state) => ({ dis: state.dis + "+" }));
      }
        break;
      case "multiply": {
        this.setState({ dec: false });
        if (this.state.eq) {
          this.setState({ dis: this.state.val });
          this.setState({ eq: false });
        }
        if (this.state.dis2 == "x" || this.state.dis2 == "/" || this.state.dis2 == "-" || this.state.dis2 == "+") {
          this.setState((state) => {
            let newStr = state.dis.slice(0, -1);
            return { dis: newStr };
          })
        }
        this.setState({ dis2: "x" });
        this.setState((state) => ({ dis: state.dis + "*" }));
      }
        break;
      case "subtract": {
        this.setState({ dec: false });
        if (this.state.eq) {
          this.setState({ dis: this.state.val });
          this.setState({ eq: false });
        }
        // if (this.state.dis2 == "x" || this.state.dis2 == "/" || this.state.dis2 == "-" || this.state.dis2 == "+") {
        //   this.setState((state) => {
        //     let newStr = state.dis.slice(0, -1);
        //     return { dis: newStr };
        //   })
        // }
        this.setState({ dis2: "-" });
        this.setState((state) => ({ dis: state.dis + "-" }));
      }
        break;
      case "divide": {
        this.setState({ dec: false });
        if (this.state.eq) {
          this.setState({ dis: this.state.val });
          this.setState({ eq: false });
        }
        if (this.state.dis2 == "x" || this.state.dis2 == "/" || this.state.dis2 == "-" || this.state.dis2 == "+") {
          this.setState((state) => {
            let newStr = state.dis.slice(0, -1);
            return { dis: newStr };
          })
        }
        this.setState({ dis2: "/" });
        this.setState((state) => ({ dis: state.dis + "/" }));
      }
        break;
      case "equals": {
        let res = Equation.solve(this.state.dis);
        this.setState({ val: res });
        this.setState((state) => ({ eq: !state.eq }))
        this.setState({ dis2: res });
        this.setState((state) => ({ dis: state.dis + "=" + res }));
      }
        break;
    }
  }
  render() {
    return (<div id="calci">
      <div className='col0' id="display2">{this.state.dis}</div>
      <div className='col' id="display">{this.state.dis2 === "" ? 0 : this.state.dis2}</div>
      <div className='col2'>
        <button id="clear" onClick={this.click}>AC</button>
        <button id="divide" onClick={this.click}>/</button>
        <button id="multiply" onClick={this.click}>x</button>
      </div>
      <div className='col3'>
        <div className='col4'>
          <button id="seven" onClick={this.click}>7</button>
          <button id="eight" onClick={this.click}>8</button>
          <button id="nine" onClick={this.click}>9</button>
          <button id="four" onClick={this.click}>4</button>
          <button id="five" onClick={this.click}>5</button>
          <button id="six" onClick={this.click}>6</button>
          <button id="one" onClick={this.click}>1</button>
          <button id="two" onClick={this.click}>2</button>
          <button id="three" onClick={this.click}>3</button>
          <button id="zero" onClick={this.click}>0</button>
          <button id="decimal" onClick={this.click}>.</button>
        </div>
        <div className='col5'>
          <button id="subtract" onClick={this.click}>-</button>
          <button id="add" onClick={this.click}>+</button>
          <button id="equals" onClick={this.click}>=</button>
        </div>
      </div>
    </div>)
  }
}

export default App;
