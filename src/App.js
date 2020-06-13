import React from "react"
import Router from "./Router"
import "./components/@vuexy/rippleButton/RippleButton"

import "react-perfect-scrollbar/dist/css/styles.css"
import "prismjs/themes/prism-tomorrow.css"

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

const { host } = window.location;

// Fix issues with multiple redirect urls.
// Try to figure out which one to use...
/*if (awsconfig.oauth.redirectSignIn.includes(',')) {
  const filterHost = url => new URL(url).host === host;
  awsconfig.oauth.redirectSignIn = awsconfig.oauth.redirectSignIn
    .split(',')
    .filter(filterHost)
    .shift();
  awsconfig.oauth.redirectSignOut = awsconfig.oauth.redirectSignOut
    .split(',')
    .filter(filterHost)
    .shift();
}*/
Amplify.configure(awsconfig);

const App = props => {
  return <Router />
}

export default App
