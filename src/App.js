import React from 'react'
import Navbar from './Navbar'
import "./App.css"
import ImageSlider from "./components/ImageSlider"
import { SliderData } from './components/SliderData'

function App() {
  return (
    <div>
    <Navbar></Navbar>

    <ImageSlider slides = {SliderData}/>
    </div>

  );
}

export default App
//next