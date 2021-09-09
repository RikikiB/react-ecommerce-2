import './App.scss';
import CartItem from './components/CartItem';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='header'></div>
        <div className='main'>
          <CartItem />
        </div>
        <div className='footer'></div>
      </div>
    </div>
  );
}

export default App;
