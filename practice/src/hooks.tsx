import { getPhotos, getPhotosById } from './api';
import { categories, defaultPhotoInfo } from './data';
import { getRandomNumber } from './functions';
import { useEffect, useState } from 'react';
import { photoType } from './type';
import { useSelector } from 'react-redux';

export const useScroll = (fn: () => void) => {
  useEffect(() => {
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, [fn]);
};

export const useMainPhoto = (lang = 'en') => {
  const [photoInfo, setPhotoInfo] = useState(defaultPhotoInfo);
  useEffect(() => {
    getPhotos(1, lang).then((item) => setPhotoInfo(item[getRandomNumber(0, 15)]));
  }, []);
  return photoInfo;
};

export const useCategoriesList = (categories: { [key: string]: string }) => {
  const [currentCategoriesIds, setCurrentCategoriesIds] = useState<string[]>([]);
  useEffect(() => {
    const arr = Object.entries(categories);
    const list = new Set<string>();
    while (list.size !== 7) {
      list.add(arr[getRandomNumber(0, arr.length)][0]);
    }
    setCurrentCategoriesIds(Array.from(list));
  }, []);
  return currentCategoriesIds;
};

export const useNewPhotos = (
  id = '',
  params = { size: '', orientation: '' },
  lang = 'en'
): [photoType[], boolean] => {
  const [allPhotos, setAllPhotos] = useState<photoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    console.log(params);
    document.documentElement.scrollTop = 0;
    setAllPhotos([]);
    setCurrentPage(1);
    setIsChange(!isChange);
  }, [params.size, params.orientation, id, lang]);

  useEffect(() => {
    console.log(2);
    setIsLoading(true);
    (id ? getPhotosById(id, params, currentPage, lang) : getPhotos(currentPage, lang)).then(
      (item) => {
        setAllPhotos([...allPhotos, ...item]);
        setIsLoading(false);
      }
    );
  }, [currentPage, isChange]);

  const handleScroll = () => {
    const element = document.documentElement;
    if (element.scrollHeight - element.scrollTop - window.innerHeight === 0) {
      setCurrentPage(currentPage + 1);
    }
  };

  useScroll(handleScroll);

  return [allPhotos, isLoading];
};
