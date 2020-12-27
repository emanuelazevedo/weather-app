import React from 'react'
import {Header} from './Header'
import {WeatherTable} from './WeatherTable'

import {GlobalProvider} from '../context/GlobalState'

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container-fluid">
        <WeatherTable/>
      </div>
    </GlobalProvider>
  );
}