import { MainSection } from '../../modules/MainSection';
import React from 'react';
import { GallerySection } from '../../modules/GallerySection';

export const MainPage = () => {
  return (
    <div className="page">
      <MainSection />
      <GallerySection />
    </div>
  );
};
