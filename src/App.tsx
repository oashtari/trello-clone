import React from 'react';
import {
  AppContainer,
  ColumnContainer,
  ColumnTitle,
  CardContainer
} from "./styles"
import { Column } from "./Column";

// import logo from './logo.svg';
// import { ReactComponent as Logo } from './logo.svg';
// import './App.css';

export const App = () => {
  return (
    <AppContainer>
      <ColumnContainer>
        <Column text="Todo: "/>
      </ColumnContainer>
    </AppContainer>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         < Logo />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
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

export default App;
