import { Logo } from '../../ui/Logo';
import React, { useState } from 'react';
import classes from './style.module.scss';
import { SearchInput } from '../../ui/inputs/SearchInput';
import { Lang } from '../Lang';
import { useScroll } from '../../../hooks';
import { useParams } from 'react-router-dom';

export const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);
  useScroll(() => setScrollTop(window.scrollY));
  const { id } = useParams();

  return (
    <header className={`${classes.header} ${scrollTop && classes.header_active}`}>
      <div className={`wrapper ${classes.container}`}>
        <Logo />
        <div className={classes.nav}>
          <div className={`${classes.input} ${scrollTop && classes.input_active}`}>
            <SearchInput initVal={id} />
          </div>
          <Lang />
        </div>
      </div>
    </header>
  );
};
