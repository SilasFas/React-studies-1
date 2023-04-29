import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Navbar } from './pages/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      }
    }
  })

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
