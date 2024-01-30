import { ToastContainer } from 'react-toastify';
import './App.css';
import ToDoWrapper from './components/ToDoWrapper';

function App() {
  return (
    <div>
      <ToastContainer />
      <ToDoWrapper />
    </div>
  );
}

export default App;