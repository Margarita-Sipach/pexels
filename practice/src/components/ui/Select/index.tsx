import React from 'react';
import classes from './style.module.scss';

interface TagProps {
  values: { [key: string]: string };
  title: string;
  onChange: (val: string) => void;
}

export const Select = ({ values, title, onChange }: TagProps) => {
  return (
    <select
      className={classes.select}
      onChange={(e) =>
        onChange(
          (e.target as HTMLSelectElement).value !== title
            ? (e.target as HTMLSelectElement).value
            : ''
        )
      }
    >
      <option key={title} value={title}>
        {title}
      </option>
      {Object.entries(values).map((item) => (
        <option key={item[0]} value={item[0]}>
          {item[1]}
        </option>
      ))}
    </select>
  );
};
