import React from 'react';
import ListInfo from './ListViewComponents/ListInfo';
import BookNow from './ListViewComponents/BookNow';

function ListView(props) {

  const id = props.match.params.id;


    return (
      <div>
        <ListInfo id={id} />
        <BookNow />
      </div>
    );

}

export default ListView;
