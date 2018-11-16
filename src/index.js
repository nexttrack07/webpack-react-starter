import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';

const App = () => <p className={style.hot_paragraph}>Yo how is it going! HMR is working</p>;

ReactDOM.render(<App />, document.getElementById('root'));

module.hot.accept();
