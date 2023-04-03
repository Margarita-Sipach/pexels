import React, { useEffect } from 'react';
import { Header } from './components/modules/Header';
import { Outlet } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { settingsData } from './data';

const defaultState = {
  settings: settingsData[(localStorage.getItem('lang') || 'en') as keyof object],
};

const reducer = (state = defaultState, action: { type: string }) => {
  switch (action.type) {
    case 'ru':
      return {
        ...state,
        settings: settingsData['ru'],
      };
    case 'en':
      return {
        ...state,
        settings: settingsData['en'],
      };
    default:
      return defaultState;
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
