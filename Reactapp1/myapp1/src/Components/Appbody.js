import React from 'react';
import './Appbody.css'; // Ensure this file is correctly linked

export default function Appbody({ children }) {
  return (
    <div className="Appbody">
      <video
        src="/videos/The_Line_Network_02.mp4"  // Correct path
        autoPlay
        loop
        muted
        playsInline // Ensure the video plays inline on mobile devices
      >
        Your browser does not support the video tag.
      </video>
      {children} {/* Render children on top of the video */}
    </div>
  );
}
