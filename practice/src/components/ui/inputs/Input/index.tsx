import React from 'react';
import classes from './style.module.scss';

interface InputProps {
  attributes: {
    placeholder?: string;
  };
  children?: React.ReactElement;
  value: string;
  onChange: (arg: string) => void;
  onKeyDown: (arg: string) => void;
}

export const Input: React.FC<InputProps> = ({
  attributes,
  children,
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        {...attributes}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => onKeyDown(e.code)}
      />
      <div className={classes.icon}>{children}</div>
    </div>
  );
};
