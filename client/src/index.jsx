import React from 'react';
import { render } from 'react-dom';
import App from './components/app/app.component';
import 'minireset.css';
import './global.style.css';

render(<App />, document.querySelector('#app'));
