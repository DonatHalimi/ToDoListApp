import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ProgressBar from './components/ProgressBar';
import ToDoWrapper from './components/ToDoWrapper';

function App() {
  return (
    <>
      <ProgressBar />

      <ToDoWrapper />

      <ToastContainer
        position="bottom-right"
        autoClose={3500}
        closeOnClick
        hideProgressBar={true}
        newestOnTop
        stacked
      />
    </>
  );
}

export default App;