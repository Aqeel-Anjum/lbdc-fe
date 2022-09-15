import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/index/Home';
import Customize from './pages/customizeMenu/Customize';
import Network from './pages/irrigationNetwork/Network';
import CropsInfo from './pages/cropsInfo/CropsInfo';
import GroundWater from './pages/groundWater/GroundWater';
import SoilInfo from './pages/soilinformation/SoilInfo';
import EgroZoning from './pages/echologicalZoning/EgroZoning';
import Weather from './pages/weather/Weather';
import ETModeling from './pages/etModeling/ETModeling';
import SoilSensors from './pages/soilSensors/SoilSensors';
import CanalScheduling from './pages/canalScheduling/CanalScheduling';
import IrrigationPerformance from './pages/irrigationPerformance/IrrigationPerformance';

const App = () => {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/customize-menu' element={<Customize />}></Route>
          <Route path='/irrigation-network' element={<Network />}></Route>
          <Route path='/crops-information' element={<CropsInfo />}></Route>
          <Route path='/ground-water' element={<GroundWater />}></Route>
          <Route path='/soil-information' element={<SoilInfo />}></Route>
          <Route path='/egro-echological-zoning' element={<EgroZoning />}></Route>
          <Route path='/weather' element={<Weather />}></Route>
          <Route path='/et-modeling-output' element={<ETModeling />}></Route>
          <Route path='/soil-moisture-sensors' element={<SoilSensors />}></Route>
          <Route path='/canal-scheduling' element={<CanalScheduling />}></Route>
          <Route path='/irrigation-performance' element={<IrrigationPerformance />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
