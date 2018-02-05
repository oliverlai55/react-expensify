// HOC = a higher order component that renders another regular component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

ReactDOM.render(<Info info="This is the detail" />, document.getElementById('app'));
