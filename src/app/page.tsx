import React from "react";
import "./globals.css";
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline';

function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      
      <h1 className="text-5xl font-bold mb-20">ChatGPT </h1>
      
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8 " />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">'Explain Something to Me'</p>
            <p className="infoText">'What is the difference between a dog and a cat?'</p>
            <p className="infoText">'What is the color of the Sun?'</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8 " />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">'Change the ChatGPT to model use'</p>
            <p className="infoText">'Messages are stored in Firebase Firestore?'</p>
            <p className="infoText">'Hot Toast Notification when ChatGPT is thinking'</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8 " />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">'May occassionally generate incorrect information'</p>
            <p className="infoText">'May occassionally generate harmful instruction or biased content'</p>
            <p className="infoText">'Limited knowledge of the world'</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
