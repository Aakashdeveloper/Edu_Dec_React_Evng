import React from 'react';
import FoodItem from '../containers/FoodItem'

let App = () => (
  <div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Food Blog</a>
        </div>
      </div>
    </nav>
     <FoodItem />
  </div>
);
export default App;