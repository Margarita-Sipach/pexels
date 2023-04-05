import { Select } from '../../../components/ui/Select';
import React, { useEffect, useState } from 'react';
import classes from './style.module.scss';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { langSettingsType } from '../../../type';

interface FilterProps {
  onParamsChange: (val: { size: string; orientation: string }) => void;
}

export const Filter = ({ onParamsChange }: FilterProps) => {
  const [orientations, setOrientations] = useState('');
  const [sizes, setSizes] = useState('');
  const settings = useSelector((state: { settings: langSettingsType }) => state.settings);

  useEffect(() => {
    onParamsChange({ size: sizes, orientation: orientations });
  }, [sizes, orientations, onParamsChange]);

  return (
    <div className={classes.filter}>
      <Select onChange={setSizes} {...settings.gallerySection.filter[0]} />
      <Select onChange={setOrientations} {...settings.gallerySection.filter[1]} />
    </div>
  );
};
