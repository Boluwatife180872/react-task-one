/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>

    </>
  )
}

export default App
 */
"use client";
import React from "react";

import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  return (
    <main className="container">
      <ProfileCard
        name="Onukwu Boluwatife Ifeanyichukwu"
        image="/src/assets/me.jpg"
        bio="Frontend developer passionate about creating beautiful user interfaces. I love working with React and exploring new technologies. In my free time, I enjoy reading and listening to music."
      />
    </main>
  );
}

export default App;
