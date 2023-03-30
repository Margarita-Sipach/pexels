import { getPhotos, getPhotosById } from '../../../api';
import React, { useEffect, useState } from 'react';
import { Card } from '../Card';
import classes from './style.module.scss';
import { photoType } from '../../../type';
import { useScroll } from '../../../hooks';
import { Loader } from '../../../components/ui/Loading';

interface GallerySectionProps {
  id?: string;
  params?: { sizes: string; orientations: string };
}

export const GallerySection = ({ id, params }: GallerySectionProps) => {
  const [allPhotos, setAllPhotos] = useState([] as photoType[]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (id ? getPhotosById(id, params, 1) : getPhotos(1)).then((item) => {
      setAllPhotos(item);
      setCurrentPage(1);
    });
  }, [params, id]);

  useEffect(() => {
    if (isLoading) {
      (id ? getPhotosById(id, params, currentPage) : getPhotos(currentPage)).then((item) => {
        setAllPhotos([...allPhotos, ...item]);
        setIsLoading(false);
      });
    }
  }, [currentPage, isLoading]);

  const handleScroll = () => {
    const element = document.documentElement;
    if (element.scrollHeight - element.scrollTop - window.innerHeight === 0) {
      setIsLoading(true);
      setCurrentPage(currentPage + 1);
    }
  };

  useScroll(handleScroll);

  return (
    <section className={`wrapper ${classes.section}`}>
      <h2 className={classes.title}>Free Stock Photos</h2>
      <div className={classes.gallery}>
        {allPhotos.map((item: photoType) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      {isLoading && <Loader />}
    </section>
  );
};
