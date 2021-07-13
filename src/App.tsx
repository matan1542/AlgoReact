import './style/style.scss';
import File from './pages/File'
import { Header } from './components/Header';
import { Provider } from 'react-redux';
import { store } from './store/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Header/>
      <main>
        <File />
      </main>
      </Provider>
    </div>
  );
}

export default App;
