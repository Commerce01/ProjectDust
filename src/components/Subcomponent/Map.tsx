"use Client";
import React from "react";

const Map: React.FC = () => {
  const iframeCode = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61950.41193594919!2d100.50956010818481!3d13.964513147566011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2818628afa4d1%3A0x7bc34f0ee1879d95!2sCollege%20of%20Engineering!5e0!3m2!1sen!2sth!4v1715779778255!5m2!1sen!2sth" 
    width="300" 
    height="300" 
    style="border:0;" 
    allowfullscreen="" loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  `;

  return <div dangerouslySetInnerHTML={{ __html: iframeCode }} />;
};

export default Map;
