import './App.css';

import React, { useState} from 'react';
export interface Props {
  title?: string;
  disabled?: boolean;
}
function MyApp({ title, disabled=true }: Props) {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <button disabled={disabled}>{title}</button>
    </div>
  );
}

export default MyApp;