import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      food: '',
      hates: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const item = {
      name: this.state.name,
      food: this.state.food,
      hates: this.state.hates
    }
    this.props.addItem(item);
    event.target.reset();
  }

  handleInputChange(evt) {
    const field = evt.target.id;
    const value = evt.target.value;
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id='thing-form' autocomplete='off'>
          <label htmlFor='name'>Name</label>
          <input onChange={this.handleInputChange} type='text' name='name' id='name' />
          <label htmlFor='food'>Favourite Food</label>
          <input onChange={this.handleInputChange} type='text' name='food' id='food' />
          <label htmlFor='hates'>Dislikes</label>
          <input onChange={this.handleInputChange} type='text' name='hates' id='hates' />
          <input type='submit' id='submit' value='Enter Details' />
        </form>
      </div>
    )
  }
}

export default Form;
