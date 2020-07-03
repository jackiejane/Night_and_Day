import React, { Component } from 'react';
import MainNight from '/Users/jacqueline-janedenney/General_Assembly/sei/constellations/Unit_2/project2/night_and_day/src/Components/Main/MainNight.js';
import MainDay from '/Users/jacqueline-janedenney/General_Assembly/sei/constellations/Unit_2/project2/night_and_day/src/Components/Main/MainDay.js';
import Triangle from '/Users/jacqueline-janedenney/General_Assembly/sei/constellations/Unit_2/project2/night_and_day/src/Components/Main/Triangle.js'
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