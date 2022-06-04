import React, { useEffect, useState } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import { SpinnerCircular } from 'spinners-react';
import ListItem from '../elements/ListItem';
import URLS from '../utils/CONSTANTS';

function Matches() {
  const [matches, setMatches] = useState();
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line max-len
  const arrMatches = (matches && matches.length > 0)
    // eslint-disable-next-line max-len
    ? matches.map((match) => <ListItem key={match._id} image={match.image} name={match.name} email={match.email} match />)
    : [];
  useEffect(() => {
    axios.post(URLS.allMatches, { _id: sessionStorage.getItem('_id') })
      .then((usersMatched) => {
        // console.log('usersMatched', usersMatched);
        if (usersMatched.data.statusCode >= 200) {
          setMatches(usersMatched.data.response);
        }
      }).finally(() => setLoading(false));
  }, []);
  if (loading) {
    return (
      <article className="text-center">
        <SpinnerCircular size={100} thickness={180} speed={137} color="#FA4659" secondaryColor="#01D392" />
      </article>
    );
  }
  return (
    <article className="d-flex flex-column">
      {arrMatches.length > 0 ? arrMatches : (
        <h1 className="text-center">No tienes ningun Match!</h1>
      )}
    </article>
  );
}

export default Matches;
