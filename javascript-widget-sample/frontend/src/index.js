import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import './index.css';
import Widget from './Widget';

export function show(text) {
  let elements = [];
  let body;

  let temporary = document.createElement('div');
  temporary.innerHTML = ReactDOMServer.renderToStaticMarkup(
    <Widget />
  )

  // append elements to body
  body = document.getElementsByTagName('body')[0];
  while (temporary.children.length > 0) {
      elements.push(temporary.children[0]);
      body.appendChild(temporary.children[0]);
  }
}