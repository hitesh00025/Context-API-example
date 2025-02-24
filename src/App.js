import logo from './logo.svg';
import './App.css';
import { CounterArea } from './CounterArea';
import  IncrementComponent from './IncrementComponent';
import  DecrementComponent  from './DecrementComponent';
import ClearStateComponent  from './ClearStateComponent';
function App() {
  return (
    <>
      <CounterArea>
       <IncrementComponent/>
       <DecrementComponent/>
       <ClearStateComponent />
      </CounterArea>
    </>
  );
}

export default App;
