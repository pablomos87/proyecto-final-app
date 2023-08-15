import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => (
        <FontAwesomeIcon
          icon={faStar}
          key={index}
          color={index < rating ? 'gold' : 'gray'}
        />
      ))}
    </div>
  );
};

export default StarRating;

reportWebVitals();
