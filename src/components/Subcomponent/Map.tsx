"use Client";
import React from "react";

const Map: React.FC = () => {
  const iframeCode = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123953.6561391995!2d100.47935391039567!3d13.865923963423402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2816f1377fc17%3A0x63d330b7f8af6e16!2sRangsit%20University!5e0!3m2!1sen!2sth!4v1716058944409!5m2!1sen!2sth" 
    width="300" 
    height="200" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  `;

  return <div dangerouslySetInnerHTML={{ __html: iframeCode }} />;
};

export default Map;
