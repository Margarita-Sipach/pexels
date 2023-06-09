import React from 'react';
import { Card } from '../Card';
import classes from './style.module.scss';
import { langSettingsType, photoType } from '../../../type';
import { useNewPhotos } from '../../../hooks';
import { Loader } from '../../../components/ui/Loading';
import { useSelector } from 'react-redux';

interface GallerySectionProps {
  id?: string;
  params?: { size: string; orientation: string };
}

export const GallerySection = ({ id, params }: GallerySectionProps) => {
  const settings = useSelector((state: { settings: langSettingsType }) => state.settings);
  const [allPhotos, isLoading] = useNewPhotos(id, params, settings.activeLang);

  return (
    <section className={`wrapper ${classes.section}`}>
      <h2 className={classes.title}>{settings.gallerySection.title}</h2>
      <div className={classes.gallery}>
        {allPhotos.length > 0 ? (
          (allPhotos as photoType[]).map((item: photoType) => <Card key={item.id} {...item} />)
        ) : (
          <div className={classes.title}>{settings.gallerySection.noImages}</div>
        )}
      </div>
      {isLoading && <Loader />}
    </section>
  );
};
