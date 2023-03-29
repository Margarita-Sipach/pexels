import React from 'react';
import classes from './style.module.scss';

interface AvatarProps {
  name: string;
  img: string;
  link: string;
}
export const Avatar = ({ name, link }: AvatarProps) => {
  return (
    <a className={classes.avatar} href={link}>
      {/* <img className={classes.img} src={img} alt="avatar" /> */}
      <div className={classes.img}></div>
      <span className={classes.name}>{name}</span>
    </a>
  );
};
