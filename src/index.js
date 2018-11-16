import _ from 'lodash';
import printMe from './print';
import './style.css';

if (process.env.NODE_ENV !== 'production') {
  console.log("Looks like we're in Devlopment Mode!");
}

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Yo', 'How are doing you Webpack?'], ', ');

  btn.innerHTML = 'Click me and look at the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}