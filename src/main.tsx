import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { App } from 'components/App';

import 'styles/index.scss';

import { setupStore } from './store';

const rootElement = document.querySelector('#root');
const store = setupStore();

const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
    <StrictMode>
        <Provider store={store}>
            <HashRouter basename={process.env.MODE === 'production' ? '/kolosok/' : '/'}>
                <App />
            </HashRouter>
        </Provider>
    </StrictMode>,
);
