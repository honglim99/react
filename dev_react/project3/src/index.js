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
import NotificationList from './chap06/NotificationList';

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

root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
