import React, { Component } from 'react';

class RobotForm extends Component {
    constructor(){
        super();
        this.state = {
            type: "",
            name: "",
            mass: 0
        }
    }
    addRobot = () => {
        let r ={};
        r.type = this.state.type;
        r.name = this.state.name;
        r.mass = this.state.mass;
        this.props.onAdd(r)
    }
    render() {
      return (
        <div>
            <form>
                <label>Type:
                <input type="text" id="type" onChange={(evt) => this.setState({type: evt.target.value})} />
                </label>
                <p>{"\n"}</p>
                <label>Name:
                <input type="text" id="name" onChange={(evt) => this.setState({name: evt.target.value})} />
                </label>
                <p>{"\n"}</p>
                <label>Mass:
                <input type="text" id="mass" onChange={(evt) => this.setState({mass: evt.target.value})} />
                </label>
                <p>{"\n"}</p>
                <button onClick={() => this.addRobot()}>Add</button>
            </form>
        </div>
      )
    }
  }
  
  export default RobotForm