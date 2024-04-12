import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return null
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>
      <>
        <main>{renderPage()}</main>
      </>
      <>
        <Footer></Footer>
      </>
    </>
  );
}

export default App;