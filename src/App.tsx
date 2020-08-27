import React from 'react';
import { StatusBar } from 'expo-status-bar';

import 'intl';
import 'intl/locale-data/jsonp/pt';

import Main from './pages/Main'

export default function App() { 
  return (
    <>
      <StatusBar style="auto"  />  
      <Main />
    </>
  );
}

