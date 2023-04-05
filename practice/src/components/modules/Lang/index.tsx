import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import classes from './style.module.scss';
import { langSettingsType } from '../../../type';

export const Lang = () => {
  const settings = useSelector((state: { settings: langSettingsType }) => state.settings);
  const dispatch = useDispatch();

  return (
    <div className={classes.block}>
      {Object.entries(settings.header.lang).map((item, index) => (
        <div key={item[0]}>
          <span
            id={item[0]}
            className={`${classes.block__item} ${classes.lang} ${
              settings.activeLang === item[0] && classes.lang__active
            }`}
            onClick={(e: React.MouseEvent) => {
              const newLang = (e.target as HTMLElement).id;
              dispatch({ type: newLang });
              localStorage.setItem('lang', newLang);
            }}
          >
            {item[1]}
          </span>
          {!index && '/'}
        </div>
      ))}
    </div>
  );
};
