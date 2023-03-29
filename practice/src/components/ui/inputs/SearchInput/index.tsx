import React, { useState } from 'react';
import { Input } from '../Input';
import classes from './style.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../../../data';

export const SearchInput = () => {
  const [seacrhValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleNavigate = () => {
    categories.some((item) => item.en === seacrhValue)
      ? navigate(`category/${seacrhValue}`)
      : navigate('not-found');
  };

  return (
    <Input
      attributes={{ placeholder: 'Search for free photos' }}
      value={seacrhValue}
      onChange={setSearchValue}
      onKeyDown={(code) => code === 'Enter' && handleNavigate()}
    >
      <AiOutlineSearch className={classes.button} onClick={handleNavigate} />
    </Input>
  );
};
