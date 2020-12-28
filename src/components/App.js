import React from 'react'
import '../styles/App.css'
import {Header} from './Header'
import {WeatherList} from './WeatherList'

import {GlobalProvider} from '../context/GlobalState'

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container-fluid">
        <WeatherList/>
      </div>
    </GlobalProvider>
  );
}