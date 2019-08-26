import React from 'react';
import update from 'react-addons-update'; // ES6
export default class Increment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    }
  }
  
  addSome = () => {
    this.setState({ clicks: this.state.clicks + 1 });
      this.setState(
        update(this.state, {array: {$push: ["val added on queue"]}}));
    };
  render() {
    const list = this.state.array.map((item, i) => {
      return <li key={i}>{item}</li>
      
    });
    const count = this.state.array.map((item, i) => {
      return i;
    });
    console.log(this.state.clicks);
    return (
      <div id = "counter">
         <span>{count}</span> 
      <div className='list'>
        <button onClick={this.addSome}>stack increment</button>
        <ul>
        {list}
        </ul> 
      </div>
      </div>
    );
  }
};
