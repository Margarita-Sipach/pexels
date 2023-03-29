import { Logo } from '../../ui/Logo';
import React, { useEffect, useState } from 'react';
import classes from './style.module.scss';
import { SearchInput } from '../../ui/inputs/SearchInput';
import { Lang } from '../Lang';

export const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScrollEffects = () => {
    setScrollTop(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEffects);
    return () => window.removeEventListener('scroll', handleScrollEffects);
  }, []);

  return (
    <header
      className={`${classes.header} ${scrollTop && classes.header_active}`}
      onScroll={handleScrollEffects}
    >
      <div className={`wrapper ${classes.container}`}>
        <Logo />
        <div className={classes.nav}>
          <div className={`${classes.input} ${scrollTop && classes.input_active}`}>
            <SearchInput />
          </div>
          <Lang />
        </div>
      </div>
    </header>
  );
};
