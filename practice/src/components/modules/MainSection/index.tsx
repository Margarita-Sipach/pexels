import React, { useEffect, useState } from 'react';
import classes from './style.module.scss';

import { Tags } from '../Tags';
import { SearchInput } from '../../ui/inputs/SearchInput';
import { getPhotos } from '../../../api';
import { getRandomNumber } from '../../../functions';
import { defaultPhotoInfo } from '../../../data';

export const MainSection = () => {
  const [photoInfo, setPhotoInfo] = useState(defaultPhotoInfo);
  useEffect(() => {
    getPhotos().then((item) => setPhotoInfo(item[getRandomNumber(0, 15)]));
  }, []);
  return (
    <section className={classes.section}>
      <img
        src={photoInfo.src && photoInfo.src.original}
        alt={photoInfo.alt}
        className={classes.img}
      />
      <div className={classes.content}>
        <h1 className={classes.title}>
          The best free stock photos, royalty free images & videos shared by creators.
        </h1>
        <SearchInput />
        <Tags />
      </div>
      <a
        className={classes.author}
        href={photoInfo.photographer_url}
        target="_blank"
        rel="noreferrer"
      >
        Photo by: <span>{photoInfo.photographer}</span>
      </a>
    </section>
  );
};
