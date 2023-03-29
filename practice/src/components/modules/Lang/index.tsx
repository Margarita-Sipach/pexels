import React, { useState } from 'react';
import classes from './style.module.scss';

const langs = ['ru', 'en'];

export const Lang = () => {
  const [activeLang, setActiveLang] = useState('en');

  const handleClick = (e: React.MouseEvent) => {
    setActiveLang((e.target as HTMLElement).textContent || 'en');
  };

  return (
    <div className={classes.block}>
      {langs.map((item, index) => (
        <>
          <span
            key={item}
            className={`${classes.block__item} ${classes.lang} ${
              activeLang === item && classes.lang__active
            }`}
            onClick={(e: React.MouseEvent) => handleClick(e)}
          >
            {item}
          </span>
          {!index && '/'}
        </>
      ))}
    </div>
  );
};
