import React, { Component } from 'react';
import MainNight from './Main/MainNight';
import MainDay from './Main/MainDay';
import Triangle from './Main/Triangle'
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