import React, { useState } from 'react';
import classes from './style.module.scss';
import { AiFillHeart, AiOutlineHeart, AiOutlinePlusCircle } from 'react-icons/ai';
import { MdOutlineSaveAlt } from 'react-icons/md';

interface CardNavProps {
  id: number;
  src: string;
}

export const CardNav = ({ id }: CardNavProps) => {
  const [isLike, setIsLike] = useState(
    (localStorage.getItem('likes') && JSON.parse(localStorage.getItem('likes') || '{}')[id]) ||
      false
  );

  const handleLike = () => {
    localStorage.setItem(
      'likes',
      JSON.stringify({ ...JSON.parse(localStorage.getItem('likes') || '{}'), [id]: !isLike })
    );
    setIsLike(!isLike);
  };

  return (
    <div className={classes.nav}>
      {/* <a href={src} download> */}
      <MdOutlineSaveAlt className={classes.icon} />
      {/* </a> */}
      <AiOutlinePlusCircle className={classes.icon} />
      {isLike ? (
        <AiFillHeart className={classes.icon} onClick={handleLike} />
      ) : (
        <AiOutlineHeart className={classes.icon} onClick={handleLike} />
      )}
    </div>
  );
};
