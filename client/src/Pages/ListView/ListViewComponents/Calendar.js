import React, { Component } from 'react';
import moment from 'moment';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { formatDate, parseDate } from 'react-day-picker/moment'

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: moment(this.props.checkin).toDate(),
      to:  moment(this.props.checkout).toDate(),
      unAvailable: []
    };
  }

  async componentDidMount(){
    const settings = {
        "async": true,
        "crossDomain": true,
        "method": "GET",
        "headers": {
          "authorization": `${process.env.REACT_APP_HOSTAWAY_BEARER}`,
          "cache-control": "no-cache"
        },
        "data": {
          "grant_type": "client_credentials",
          "client_id": `${process.env.REACT_APP_HOSTAWAY_ID}`,
          "client_secret": `${process.env.REACT_APP_HOSTAWAY_API_KEY}`,
          "scope": "general"
        }
      }

      const response = await fetch('https://api.hostaway.com/v1/listings/' + this.props.id + '/calendar', settings);
      const data = await response.json();

      let unAvailable = [];

      data.result.forEach(item => {
        if(!item.isAvailable) {
          console.log(item.date)
          unAvailable.push(moment(item.date, "YYYY-M-D")._d)
        }
      })
      this.setState({unAvailable: unAvailable})
  }


  showFromMonth() {
  const { from, to } = this.state;
  if (!from) {
    return;
  }
  if (moment(to).diff(moment(from), 'months') < 2) {
    this.to.getDayPicker().showMonth(from);
  }
}

handleChange(check, date) {
  this.setState({[check]: date})
  this.props.updateDate(check, date);
}


  render(){
            const { from, to, unAvailable } = this.state;
           const modifiers = { start: from, end: to };
           return (
             <div className="InputFromTo">
               <DayPickerInput
                 value={from}
                 placeholder="From"
                 formatDate={formatDate}
                 parseDate={parseDate}
                 dayPickerProps={{
                   selectedDays: [from, { from, to }],
                   disabledDays: unAvailable,
                   modifiers,
                   numberOfMonths: 2,
                   onDayClick: () => this.to.getInput().focus(),
                 }}
                 onDayChange={this.handleChange.bind(this, 'from')}
               />
               <span className="InputFromTo-to">
                 <DayPickerInput
                   ref={el => (this.to = el)}
                   value={to}
                   placeholder="To"
                   formatDate={formatDate}
                   parseDate={parseDate}
                   dayPickerProps={{
                     selectedDays: [from, { from, to }],
                     disabledDays: unAvailable,
                     modifiers,
                     numberOfMonths: 2,
                   }}
                   onDayChange={this.handleChange.bind(this, 'to')}
                 />
               </span>
             </div>

    )
  }

}

export default Calendar;
