import React, { useState } from 'react';
import classes from './style.module.scss';
import { useParams } from 'react-router-dom';
import { GallerySection } from '../../../components/modules/GallerySection';
import { Filter } from '../../../components/modules/Filter';
import { settingsData } from '../../../data';
import { useSelector } from 'react-redux';
import { langSettingsType } from '../../../type';

export const CategoryPage = () => {
  const { id } = useParams();
  const [filterParams, setFilterParams] = useState({ size: '', orientation: '' });

  return (
    <div className={`page wrapper ${classes.page}`}>
      <div className={classes.filter}>
        <span className={classes.title}>{id}</span>
        <Filter onParamsChange={setFilterParams} />
      </div>
      <GallerySection id={id} params={filterParams} />
    </div>
  );
};
