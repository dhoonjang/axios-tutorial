import React from 'react';
import { Header } from './components';
import PostContainer from './containers/PostContainer/PostContainer';
import Promise from 'promise-polyfill'; 
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

if (!window.Promise) {
  window.Promise = Promise;
}

function App() {
  return (
    <>
      <Header/>
      <PostContainer/>
      <ToastContainer draggable={true} position={"bottom-center"}/>
    </>
  );
}

export default App;
