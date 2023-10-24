'use client'

import React from 'react';
import { useState } from 'react';

export default function layout({ children }) {
  
  const [test , setTest] = useState('ciao')

  return (
    <div className="">
      <h1>TEST LAYOUT</h1>
      <div className=" min-vh-100 container py-5">
        <p>test: {test}</p>
        {React.cloneElement(children, { test : test })}
      </div>
    </div>
  );
}
