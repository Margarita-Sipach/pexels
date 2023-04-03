import React, { useState } from 'react';
import { Input } from '../Input';
import classes from './style.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { settingsData } from '../../../../data';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { langSettingsType } from '../../../../type';

export const SearchInput = () => {
  const [seacrhValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const settings = useSelector((state: { settings: langSettingsType }) => state.settings);

  const handleNavigate = () => {
    if (seacrhValue === '') return;
    const field = [
      ...Object.entries(settingsData.ru.mainSection.tags.categories),
      ...Object.entries(settingsData.en.mainSection.tags.categories),
    ].find((item) => item[1] === seacrhValue);

    field && field[0] ? navigate(`/pexels/${field[0]}`) : navigate('/pexels/not-found');
  };

  return (
    <Input
      attributes={{ placeholder: settings.mainSection.placeholder }}
      value={seacrhValue}
      onChange={setSearchValue}
      onKeyDown={(code) => code === 'Enter' && handleNavigate()}
    >
      <AiOutlineSearch className={classes.button} onClick={handleNavigate} />
    </Input>
  );
};
