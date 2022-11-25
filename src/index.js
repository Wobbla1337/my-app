import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Services/stateService'
import { BrowserRouter } from 'react-router-dom';
// document.getElementById : berjot html element s id 'root' iz DOM (document object model)
// DOM eto vsja struktura HTML v JavaScript objekte
// DOM hranitca v globalnoj peremennoj, kotoraja nazyvaetca 'document'

// ReactDOM eto vspomogatelnqj paket Reacta dlja vzaimodejstvija s obychnym DOMom
// createRoot sozdajot glavnuju direktoriju, gde budet zapuskatca vsjo nashe prilozenie
const root = ReactDOM.createRoot(document.getElementById('root'));
// render eto funkcija otrisovki React componentov
// Otrisovka - eto obrabotka komponenta i ona perevodit iz JSX ili React element v 4istyj DOM (to 4to pokazyvaetca na stranice HTML)
root.render(
    <Provider store={store}>
        <BrowserRouter>
{/* glavnqj komponent - App */}
            <App />
        </BrowserRouter>
    </Provider>
);


