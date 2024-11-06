import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import ConfirmDialog from './components/ConfirmDialog';
// import Library from "./chap03/Library"
// import Clock from './components/Clock';
// import App from './components/App';
// import App2 from './components/App2';
// import CommentList from './chap05/CommentList';
// import NotificationList from './chap06/NotificationList';
// import Greeting from './chap09/Greeting';
// import LoginControl from './chap09/LoginControl';
// import MainPage from './chap09/MainPage';
import LandingPage from './chap09/LandingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ConfirmDialog />
//   </React.StrictMode>
// );

// setInterval(() => {
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>
// }, 1000);
// root.render(
//   <React.StrictMode>
//     <App2 />
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <LoginControl />
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <MainPage />
//   </React.StrictMode>
// )

root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
