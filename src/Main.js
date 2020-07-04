import React from 'react'
import MainNight from './Components/Main/MainNight';
import MainDay from './Components/Main/MainDay';
import Triangle from './Components/Main/Triangle'
import './App.css'

export default function Main() {
  return (
    <main>
      <MainNight />
      <MainDay />
      <Triangle />
    </main>
  );
}