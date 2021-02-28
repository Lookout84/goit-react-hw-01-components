import React from 'react';
import style from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={style.friendList}>
        {friends.map(el => {
          const { avatar, name, isOnline, id } = el;
          return (
            <li className={style.item} key={id}>
              {!isOnline === false ? (
                <span className={style.statusOnline}></span>
              ) : (
                <span className={style.statusOffline}></span>
              )}
              <img
                className={style.avatar}
                src={avatar}
                alt={name}
                width="48"
              />
              <p className={style.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FriendList;

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  currency: PropTypes.number.isRequired,
};
