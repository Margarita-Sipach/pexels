import React, { useState } from 'react';
import classes from './style.module.scss';
import { AiFillHeart, AiOutlineHeart, AiOutlinePlusCircle } from 'react-icons/ai';
import { MdOutlineSaveAlt } from 'react-icons/md';
import { getImageFile } from '../../../api';

interface CardNavProps {
  id: number;
  src: string;
}

export const CardNav = ({ id, src }: CardNavProps) => {
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

  const handleDownloadImage = (url: string) => {
    getImageFile(url).then((blob) => {
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.download = url.slice(url.lastIndexOf('/'), url.length);
      a.href = blobUrl;
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  };

  return (
    <div className={classes.nav}>
      <MdOutlineSaveAlt className={classes.icon} onClick={() => handleDownloadImage(src)} />
      <AiOutlinePlusCircle className={classes.icon} />
      {isLike ? (
        <AiFillHeart className={classes.icon} onClick={handleLike} />
      ) : (
        <AiOutlineHeart className={classes.icon} onClick={handleLike} />
      )}
    </div>
  );
};
