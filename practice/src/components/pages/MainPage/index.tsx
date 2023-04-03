import { MainSection } from '../../modules/MainSection';
import React from 'react';
import { GallerySection } from '../../modules/GallerySection';
import { useSelector } from 'react-redux';
import { langSettingsType } from 'type';

export const MainPage = () => {
  return (
    <div className="page">
      <MainSection />
      <GallerySection />
    </div>
  );
};
