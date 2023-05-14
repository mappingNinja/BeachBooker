import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/reducers";
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import "./styles.css";
import 'react-toastify/dist/ReactToastify.css';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

export const store = createStore(
    reducers,
    {},
);

root.render(
    <Provider store={store}>
        <DndProvider backend={HTML5Backend}>

            <App />
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                theme="colored"
            />
        </DndProvider>
    </Provider>
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
