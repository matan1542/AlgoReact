import './style/style.scss';
import File from './pages/File'
import { Header } from './components/Header';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ToastProvider } from 'react-toast-notifications';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ToastProvider>
          <Header />
          <main>
            <File />
          </main>
        </ToastProvider >
      </Provider>
    </div>
  );
}

export default App;
