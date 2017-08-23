require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ConnectionComponent from './ConnectionComponent.jsx';
import {render} from 'react-dom';
import Timeline from 'react-visjs-timeline';
const options = {
    width: '100%',
    height: '60px',
    stack: false,
    showMajorLabels: true,
    showCurrentTime: true,
    zoomMin: 1000000,
    type: 'background',
    format: {
        minorLabels: {
            minute: 'h:mma',
            hour: 'ha'
        }
    }
}


class App extends React.Component {

  render () {
  return (
    <ConnectionComponent/>
  );
  }
}

render(<App/>, document.getElementById('app'));
