import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { AuthProvider } from './contexts/authContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter >
  )
}
export default App;
