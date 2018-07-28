import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "cesium/../Widgets/widgets.css";
import { Viewer, Billboard, Cartesian3, Color } from 'cesium';

console.log(Billboard);

// ReactDOM.render(<App />, document.getElementById('root'));

// console.log(Cesium.BaseLayerPicker);
var viewer = new Viewer('cesiumViewer');
var wyoming = viewer.entities.add({
  
  name: 'Wyoming',
  polygon: {
    hierarchy: Cartesian3.fromDegreesArray([
      -109.080842, 45.002073,
      -105.91517, 45.002073,
      -104.058488, 44.996596,
      -104.053011, 43.002989,
      -104.053011, 41.003906,
      -105.728954, 40.998429,
      -107.919731, 41.003906,
      -109.04798, 40.998429,
      -111.047063, 40.998429,
      -111.047063, 42.000709,
      -111.047063, 44.476286,
      -111.05254, 45.002073]),
    height: 0,
    material: Color.RED.withAlpha(0.5),
    outline: true,
    outlineColor: Color.BLACK,
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
