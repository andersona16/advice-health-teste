import { BrowserRouter } from 'react-router-dom';
import { Aside } from './components/modules/layout/Aside';
import { Header } from './components/modules/layout/Header';
import { AppRoutes } from './routes/app.routes';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main-principal">
        <Aside />
        <AppRoutes />
      </main>
    </BrowserRouter >
  );
}

export default App;
