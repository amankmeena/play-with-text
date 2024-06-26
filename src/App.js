import './App.css';
import React, { useState } from 'react';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Help from './components/Help';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState('light');
  const [text, setText] = useState('Enable Dark Mode');

  const toggleMode = () => {
    if (mode === 'dark') {
      setText('Enable Dark Mode')
      setMode('light');
      document.body.style.color = 'rgba(33,37,41,1)';
      document.body.style.backgroundColor = 'white';

      showAlert('Light mode has been Enabled!', 'success');
    } else {
      setText('Enable Light Mode')
      setMode('dark');
      document.body.style.color = 'white';
      document.body.style.backgroundColor = 'rgba(33,37,41,1)';

      showAlert('Dark mode has been Enabled!', 'success');
    }
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <Navbar title="TextUtils" home="Home" aboutText="About Us" help="Help" mode_var={mode} togglemode_var={toggleMode} text_var={text} />
        <Alert alert_var={alert} />
        <div className='container my-3'>
          <TextForm heading='Enter the text to analyze below!' mode_var={mode} showAlert_var={showAlert} />
        </div>
      </>
    },
    {
      path: '/About',
      element: <>
        <Navbar title="TextUtils" home="Home" aboutText="About Us" help="Help" mode_var={mode} togglemode_var={toggleMode} text_var={text} />
        <Alert alert_var={alert} />
        <About aboutUs="About Us" mode_var={mode} />
      </>
    },
    {
      path: '/Help',
      element: <>
        <Navbar title="TextUtils" home="Home" aboutText="About Us" help="Help" mode_var={mode} togglemode_var={toggleMode} text_var={text} />
        <Alert alert_var={alert} />
        <Help />
      </>
    }
  ]);

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us" mode_var={mode} togglemode_var={toggleMode} text_var={text} /> */}
      {/* <Navbar />   */}
      {/* <Navbar title={34} aboutText="About Us" />    // Throws error on console*/}

      {/* <Alert alert_var={alert} /> */}

      <RouterProvider router={router} />
      {/* <div className='container my-3'>
        <TextForm heading='Enter the text to analyze below!' mode_var={mode} showAlert_var={showAlert} />
      </div> */}

      {/* <About aboutUs="About Us"/> */}
    </>
  );
};

export default App;