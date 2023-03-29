import { getPhotos, getPhotosById } from '../../../api';
import React, { useEffect, useState } from 'react';
import { Card } from '../Card';
import classes from './style.module.scss';
import { photoType } from '../../../type';

interface GallerySectionProps {
  id?: string;
  params?: { sizes: string; orientations: string };
}

export const GallerySection = ({ id, params }: GallerySectionProps) => {
  const [allPhotos, setAllPhotos] = useState([]);
  useEffect(() => {
    (id ? getPhotosById(id, params) : getPhotos()).then((item) => setAllPhotos(item));
  }, [id, params]);

  return (
    <section className={`wrapper ${classes.section}`}>
      <h2 className={classes.title}>Free Stock Photos</h2>
      <div className={classes.gallery}>
        {allPhotos.map((item: photoType) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
