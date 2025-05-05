import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 10,
      color : 'cyan-700'
    };
  }

  addHandler() {

    this.setState((prevSate) => {
        return { count : prevSate.count + 1}
    })
  }


  decreseHandler() {
    if (this.state.count < 1) {
        return false
    }
    this.setState((prevSate) => {
        console.log(prevSate.count)
        return { count : prevSate.count - 1}
    })
  }

  render() {
    return (
      <div>
        <div className=" flex flex-col items-center">
          <div className={`w-52 h-52 bg-${this.state.color}  mb-2 text-white flex justify-center items-center font-bold text-4xl rounded-xl`}>{this.state.count}</div>
          <div className="space-x-9 "> 
            <button
              className="bg-black text-white p-3 rounded-md flex-auto"
              onClick={() => this.addHandler()}
            >
              Add
            </button>
            <button
              className="bg-black text-white p-3 rounded-md flex-auto"
              onClick={() => this.decreseHandler()}
            >
              Decrese
            </button>
          </div>
        </div>
      </div>
    );
  }
}
