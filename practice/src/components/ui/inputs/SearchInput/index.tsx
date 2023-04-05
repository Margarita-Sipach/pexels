import React, { useEffect, useState } from 'react';
import { Input } from '../Input';
import classes from './style.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { langSettingsType } from '../../../../type';

export const SearchInput = ({ initVal }: { initVal?: string }) => {
  const [seacrhValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const settings = useSelector((state: { settings: langSettingsType }) => state.settings);

  const handleNavigate = () => {
    seacrhValue && navigate(`/pexels/${seacrhValue}`);
  };

  useEffect(() => {
    initVal && setSearchValue(initVal);
  }, [initVal]);

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
