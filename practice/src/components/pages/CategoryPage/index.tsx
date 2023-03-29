import React, { useState } from 'react';
import classes from './style.module.scss';
import { useParams } from 'react-router-dom';
import { GallerySection } from '../../../components/modules/GallerySection';
import { Filter } from '../../../components/modules/Filter';

export const CategoryPage = () => {
  const { id } = useParams();

  const [filterPrarams, setFilterParams] = useState({ sizes: '', orientations: '' });

  return (
    <div className={`page wrapper ${classes.page}`}>
      <div className={classes.filter}>
        <span className={classes.title}>{id}</span>
        <Filter onParamsChange={setFilterParams} />
      </div>
      <GallerySection id={id} params={filterPrarams} />
    </div>
  );
};
