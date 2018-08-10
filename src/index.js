import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import createRoutes from './Routes';

const allRoutes = createRoutes();

ReactDOM.render(allRoutes, document.getElementById('root'));
registerServiceWorker();
