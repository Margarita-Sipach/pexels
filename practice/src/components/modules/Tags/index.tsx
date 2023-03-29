import { categories } from '../../../data';
import React, { useEffect, useState } from 'react';
import classes from './style.module.scss';
import { getRandomNumber } from '../../../functions';
import { Link } from 'react-router-dom';

export const Tags = () => {
  const [currentCategories, setCurrentCategories] = useState([] as string[]);
  useEffect(() => {
    const list = new Set<string>();
    while (list.size !== 7) {
      list.add(categories[getRandomNumber(0, categories.length)].en);
    }
    setCurrentCategories(Array.from(list));
  }, []);

  return (
    <div className={classes.tags}>
      <div className={classes.title}>Trendling:</div>
      <div className={classes.container}>
        {currentCategories.map((item) => (
          <Link key={item} to={`/category/${item}`} className={classes.item}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};
