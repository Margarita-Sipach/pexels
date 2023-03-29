import React from 'react';
import classes from './style.module.scss';

interface TagProps {
  values: string[];
  title: string;
  onChange: (val: string) => void;
}

export const Select = ({ values, title, onChange }: TagProps) => {
  return (
    <select
      className={classes.select}
      onChange={(e) => onChange((e.target as HTMLSelectElement).value)}
    >
      <option key={title} value={title}>
        {title}
      </option>
      {values.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
