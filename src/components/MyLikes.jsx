import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SpinnerCircular } from 'spinners-react';
import ListItem from '../elements/ListItem';
import URLS from '../utils/CONSTANTS';

function MyLikes() {
  const [likes, setLikes] = useState();
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line max-len
  const arrLikes = (likes && likes.length > 0)
    // eslint-disable-next-line max-len
    ? likes.map((like) => <ListItem key={like._id} image={like.image} name={like.name} email={like.email} />)
    : [];
  useEffect(() => {
    axios.post(URLS.allILikeUsers, { _id: sessionStorage.getItem('_id') })
      .then((usersLikes) => {
        // console.log(usersLikes);
        if (usersLikes.data.statusCode >= 200) {
          setLikes(usersLikes.data.response);
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
      {arrLikes.length > 0 ? arrLikes : (
        <h1 className="text-center">No le has dado me gusta a nadie!</h1>
      )}
    </article>
  );
}

export default MyLikes;
