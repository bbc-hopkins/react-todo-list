import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class TodoForm extends Component {
  state = {
    inputValue: '',
    id: 999,
    isInvalid: false,
  };

  addTodo = (e) => {
    e.preventDefault();

    if (this.state.inputValue.trim() === '') {
      this.setState({ isInvalid: true });
      return;
    }

    this.setState({ isInvalid: false });
    const todo = {
      id: Math.random() * 1000,
      title: this.state.inputValue,
    };

    this.setState({ inputValue: '' });
    this.props.emitInputValue(todo);
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    let { inputValue } = this.state;
    return (
      <React.Fragment>
        <Form className='todo-form'>
          <Form.Group controlId='formBasicEmail' className='todo-input'>
            <Form.Control
              className='input'
              type='text'
              placeholder='New todo :)'
              value={inputValue}
              onChange={this.handleInputChange}
            />
            {this.state.isInvalid && (
              <Form.Text className='is-invalid'>
                Please enter valid todo !!!
              </Form.Text>
            )}
          </Form.Group>

          <Button
            variant='secondary'
            className='submit-btn'
            type='submit'
            onClick={this.addTodo}
          >
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default TodoForm;
