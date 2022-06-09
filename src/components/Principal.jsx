import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SpinnerCircular } from 'spinners-react';
import URLS from '../utils/CONSTANTS';
import Pretendiente from '../elements/Pretendiente';

import '../scss/principal.scss';

function Principal() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const requestUser = async () => {
  // eslint-disable-next-line no-use-before-define
    const _id = sessionStorage.getItem('_id');
    const userNew = await axios.post(URLS.getNewUser, { _id });
    // console.log(userNew);
    if (userNew.data.statusCode === 200) {
      return userNew.data.response;
    }
    return null;
  };
  const getNewUser = () => {
    requestUser().then((response) => {
      if (response !== null) {
        setUser(response);
      }
    }).finally(() => setLoading(false));
  };

  const onLike = () => {
    const data = {
      _id: sessionStorage.getItem('_id'),
      userGetLikedID: user._id,
    };
    axios.post(URLS.iLikeUser, data).then((response) => {
      // console.log(response);
      if (response.data.statusCode === 200) {
        getNewUser();
      }
    });
  };

  const onDisLike = () => {
    getNewUser();
  };

  useEffect(() => {
    let mounted = false;
    if (mounted === false) {
      getNewUser();
      mounted = true;
    }
  }, []);

  if (loading) {
    return (
      <article className="text-center">
        <SpinnerCircular size={100} thickness={180} speed={137} color="#FA4659" secondaryColor="#01D392" />
      </article>
    );
  }
  return (
    <article className="principal">
      {user ? (
        <section className="principal__prentendiente">
          <Pretendiente
            name={user.name}
            image={user.image}
            sex={user.sex}
            size={user.size}
            email={user.email}
          />
          <div className="principal__actions">
            <button type="button" onClick={onLike} className="button">
              <svg viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="51.5" cy="51.5" r="47.5" fill="white" stroke="#949494" strokeWidth="8" />
                <path d="M38.5 29C31.5975 29 26 34.5917 26 41.4905C26 47.0595 28.1875 60.2768 49.72 73.6378C50.1057 73.8747 50.5485 74 51 74C51.4515 74 51.8943 73.8747 52.28 73.6378C73.8125 60.2768 76 47.0595 76 41.4905C76 34.5917 70.4025 29 63.5 29C56.5975 29 51 36.57 51 36.57C51 36.57 45.4025 29 38.5 29Z" fill="#2EB872" fillOpacity="0.75" />
              </svg>
            </button>
            <button type="button" onClick={onDisLike} className="button">
              <svg viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="51.5" cy="51.5" r="47.5" fill="white" stroke="#949494" strokeWidth="8" />
                <path d="M64.3522 30.6681C59.9037 35.1193 55.4473 39.5713 51.0034 44.0232C46.5517 39.5736 42.1001 35.1216 37.6468 30.6681C32.4958 25.5199 24.5145 33.5042 29.6632 38.6524C34.1134 43.0997 38.5674 47.554 43.0121 51.9997C38.5643 56.4494 34.111 60.9029 29.6632 65.3549C24.5145 70.5015 32.4997 78.4835 37.6468 73.3384C42.097 68.8865 46.5486 64.4352 51.0034 59.9833C55.4551 64.4352 59.9037 68.8849 64.3522 73.3384C69.5017 78.4843 77.4838 70.5015 72.3389 65.3557C67.8865 60.9037 63.4348 56.4541 58.9823 52.0005C63.4356 47.5493 67.8873 43.0973 72.3389 38.6453C77.4838 33.4987 69.5017 25.5144 64.3522 30.6626" fill="#FA4659" fillOpacity="0.75" />
              </svg>
            </button>
          </div>
        </section>
      ) : (
        <h1 className="text-center">Lo siento, no hay pretendientes</h1>
      )}
    </article>
  );
}

export default Principal;
