import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import moment from 'moment';

class Search extends Component {
  constructor(props) {
   super(props);
   this.state = {
     guests: 1,
     start: moment().format('YYYY-MM-DD'),
     out: moment().add(1, 'day').format('YYYY-MM-DD')
   }
}


handleChange(event){
  const target = event.target;
  const value = target.value;
  const name = target.name;
  this.setState({[name]: value});
}

  render() {
    const { guests, start, out } = this.state;
    return (
      <div className="hero">
      <Form>
        <Form.Group>
          <Form.Field control={Input} type="number" label='Number of Guests' name="guests" onChange={this.handleChange.bind(this)} />
          <Form.Field control={Input} type="date" label='Check In' name="start" onChange={this.handleChange.bind(this)} />
          <Form.Field control={Input} type="date" label='Check Out' name="out" onChange={this.handleChange.bind(this)} />
          <Button color='green' href={`/listings/guests${guests}/${start}/${out}`} content="Submit" />
        </Form.Group>
      </Form>

    </div>
    );
  }
}

export default Search;
