import { BrowserRouter } from 'react-router-dom';
import { ConsultationProvider } from '../features/consultation';
import AppRoutes from './routes';
import './App.css';

function App() {
  return (
    <ConsultationProvider>
      <BrowserRouter>
        <div className="App">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </ConsultationProvider>
  );
}

export default App;
