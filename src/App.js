// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// App.js

// App.js

// App.js

import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <Content />
      </div>
    );
  }
}

export default App;
