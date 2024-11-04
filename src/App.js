import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
       <Header />
       <main>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" index element={<Navigate to="/home" />} />
        </Routes>
       </main>
       <Footer />
    </>
  );
}

export default App;
