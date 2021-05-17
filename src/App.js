import './App.css';
import Session from './components/Login';
function App() {
  //For setting the height of app according to mobile
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  return (
    <Session.Login />
  );
}

export default App;