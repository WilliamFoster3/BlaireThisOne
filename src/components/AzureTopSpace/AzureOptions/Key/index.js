import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {connect} from 'react-redux';
import store from '../../../../store/';
import { flip_entered_key } from '../../../../redux/actions'



class UserInput extends React.Component {


  constructor(props) {


    store.azureKeyReducer = "hihihihihi";
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

    alert('A name was submitted: ' + this.state.value);
    store.azureKeyReducer = this.state.value;
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default UserInput;
