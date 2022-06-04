import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SpinnerCircular } from 'spinners-react';
import ListItem from '../elements/ListItem';
import URLS from '../utils/CONSTANTS';

const GotLikes = () => {
  const [likes, setLikes] = useState();
  const [loading, setLoading] = useState(true);

  const onClickLike = (_id) => {
    console.log(_id);
    axios.post(URLS.match, {
      user1_id: sessionStorage.getItem('_id'),
      user2_id: _id,
    });
  };
  // eslint-disable-next-line max-len
  const arrLikes = (likes && likes.length > 0)
    // eslint-disable-next-line max-len
    ? likes.map((like) => <ListItem key={like._id} _id={like._id} image={like.image} name={like.name} email={like.email} gotLike onClickLike={onClickLike} />)
    : [];
  useEffect(() => {
    axios.post(URLS.allGotLikeUsers, { _id: sessionStorage.getItem('_id') })
      .then((usersLikes) => {
        console.log(usersLikes);
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
        <h1 className="text-center">Lo siento, naide te ha dado Me gusta</h1>
      )}
    </article>
  );
};
export default GotLikes;
