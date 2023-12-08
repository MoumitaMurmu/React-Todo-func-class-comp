import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: '',
      myObj: {},
    };
  }

  handleChange(e) {
    this.setState({ obj: e.target.value });
  }

  handleAddObj() {
    // this.setState((prevState) => {
      // return { myObj: { ...prevState.myObj, [Date.now()]: prevState.obj }, obj: '' };
    // });

    const myId = uuidv4();
   this.setState((prevState)=>{
    return { myObj : {...prevState.myObj, [myId] : prevState.obj}}
   })
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.obj}
          onChange={(e) => this.handleChange(e)}
        />
        <button onClick={() => this.handleAddObj()}>Add Value</button>
        <h2>{this.state.obj}</h2>
        <h2>OBJECT :</h2>
        {Object.entries(this.state.myObj).map(([key, value]) => (
          <h2 key={key}>
            {key} : {value}
          </h2>
        ))}
      </div>
    );
  }
}

export default App;
