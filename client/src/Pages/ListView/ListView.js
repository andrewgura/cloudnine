import React from 'react';
import ListInfo from './ListViewComponents/ListInfo';


function ListView(props) {

  const id = props.match.params.id;
  const { checkin, checkout } = props.location.state;

    return (
      <div>
        <ListInfo id={id} checkin={checkin} checkout={checkout} />
      </div>
    );

}

export default ListView;
