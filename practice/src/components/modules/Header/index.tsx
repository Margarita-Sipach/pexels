import { Logo } from '../../ui/Logo';
import React, { useState } from 'react';
import classes from './style.module.scss';
import { SearchInput } from '../../ui/inputs/SearchInput';
import { Lang } from '../Lang';
import { useScroll } from '../../../hooks';

export const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);
  useScroll(() => setScrollTop(window.scrollY));

  return (
    <header className={`${classes.header} ${scrollTop && classes.header_active}`}>
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
