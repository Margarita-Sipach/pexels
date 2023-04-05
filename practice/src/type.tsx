export interface photoType {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
}

export interface settingsDataType {
  en: langSettingsType;
  ru: langSettingsType;
}

export interface langSettingsType {
  activeLang: string;
  header: {
    lang: {
      ru: string;
      en: string;
    };
  };
  mainSection: {
    title: string;
    author: string;
    tags: { title: string; categories: { [key: string]: string } };
    placeholder: string;
  };
  gallerySection: {
    title: string;
    noImages: string;
    filter: filterType[];
  };
}

interface filterType {
  title: string;
  values: { [key: string]: string };
}
