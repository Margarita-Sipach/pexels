import { Select } from '../../../components/ui/Select';
import React, { useEffect, useState } from 'react';
import classes from './style.module.scss';

interface FilterProps {
  onParamsChange: (val: { sizes: string; orientations: string }) => void;
}

export const Filter = ({ onParamsChange }: FilterProps) => {
  const [orientations, setOrientations] = useState('');
  const [sizes, setSizes] = useState('');

  useEffect(
    () => onParamsChange({ sizes: sizes, orientations: orientations }),
    [sizes, orientations, onParamsChange]
  );

  return (
    <div className={classes.filter}>
      <Select
        onChange={setOrientations}
        values={['landscape', 'portrait', 'square']}
        title="All Orientations"
      />
      <Select onChange={setSizes} values={['large', 'medium', 'small']} title="All Sizes" />
    </div>
  );
};
