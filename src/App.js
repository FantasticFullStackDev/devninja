import React from 'react';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/landing';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
            <Route path='/' element={<Landing />} />
        </Routes> 
      </Router>
    </Provider>
  );
}

export default App;