import React from 'react';
import classes from './style.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCategoriesList } from '../../../hooks';
import { langSettingsType } from '../../../type';

export const Tags = () => {
  const settings = useSelector((state: { settings: langSettingsType }) => state.settings);
  const currentCategoriesIds = useCategoriesList(settings.mainSection.tags.categories);

  return (
    <div className={classes.tags}>
      <div className={classes.title}>{settings.mainSection.tags.title}:</div>
      <div className={classes.container}>
        {currentCategoriesIds.map((item) => (
          <Link key={item} to={`/pixels/${item}`} className={classes.item}>
            {settings.mainSection.tags.categories[item as keyof object]}
          </Link>
        ))}
      </div>
    </div>
  );
};
