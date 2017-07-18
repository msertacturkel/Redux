import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './containers/App';

import '@blueprintjs/core/dist/blueprint.css';
import '@blueprintjs/table/dist/table.css';
import 'chart.js/dist/Chart';

import 'flexboxgrid/dist/flexboxgrid.css';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
