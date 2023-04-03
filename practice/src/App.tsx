import React, { useEffect } from 'react';
import { Header } from './components/modules/Header';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { settingsData } from './data';
import { langSettingsType, settingsDataType } from './type';
import { createStore } from 'redux';
interface State {
  settings: string;
}
const defaultState: State = {
  settings: settingsData[(localStorage.getItem('lang') || 'en') as keyof object],
};

const reducer = (state = defaultState, action: { type: string }) => {
  switch (action.type) {
    case 'ru':
      return {
        ...state,
        settings: settingsData['ru' as keyof object],
      };
    case 'en':
      return {
        ...state,
        settings: settingsData['en' as keyof object],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export const App = () => {
  return (
    <Provider store={store}>
      <div className="page">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};
