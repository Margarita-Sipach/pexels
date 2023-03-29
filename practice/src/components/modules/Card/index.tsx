import { Avatar } from '../../ui/Avatar';
import React from 'react';
import classes from './style.module.scss';
import { CardNav } from '../CardNav';
import { photoType } from '../../../type';

export const Card = ({ id, src, alt, photographer, photographer_url }: photoType) => {
  return (
    <div className={classes.card}>
      <img className={classes.img} src={src.original} alt={alt} />
      <div className={classes.baffle}>
        <Avatar img="" name={photographer} link={photographer_url}></Avatar>
        <CardNav id={id} src={src.original} />
      </div>
    </div>
  );
};
