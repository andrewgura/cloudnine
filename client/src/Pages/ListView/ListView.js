import React from 'react';
import ListInfo from './ListViewComponents/ListInfo';
import BookNow from './ListViewComponents/BookNow';


function ListView(props) {

  const id = props.match.params.id;
  const { checkin, checkout } = props.location.state;

    return (
      <div>
        <ListInfo id={id} checkin={checkin} checkout={checkout} />
        <BookNow />
      </div>
    );

}

export default ListView;
