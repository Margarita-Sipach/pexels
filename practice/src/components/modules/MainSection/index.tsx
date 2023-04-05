import React from 'react';
import classes from './style.module.scss';
import { Tags } from '../Tags';
import { SearchInput } from '../../ui/inputs/SearchInput';
import { useSelector } from 'react-redux';
import { useMainPhoto } from '../../../hooks';
import { langSettingsType } from '../../../type';

export const MainSection = () => {
  const settings = useSelector((state: { settings: langSettingsType }) => state.settings);
  const photoInfo = useMainPhoto(settings.activeLang);

  return (
    <section className={classes.section}>
      <img
        src={photoInfo.src && photoInfo.src.original}
        alt={photoInfo.alt}
        className={classes.img}
      />
      <div className={classes.content}>
        <h1 className={classes.title}>{settings.mainSection.title}</h1>
        <SearchInput />
        <Tags />
      </div>
      <a
        className={classes.author}
        href={photoInfo.photographer_url}
        target="_blank"
        rel="noreferrer"
      >
        {settings.mainSection.author}: <span>{photoInfo.photographer}</span>
      </a>
    </section>
  );
};
