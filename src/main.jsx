import 'bootstrap/dist/css/bootstrap.min.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/nav'
import Card1 from './components/cards/card1';
import Card2 from './components/cards/card2';
import Card3 from './components/cards/card3';
import Footer from './components/footer';
import Card4 from './components/cards/card4';

const App = () => {
  return(
    <div>
      <Nav/>
      <Card1/>
      <Card2/>
      <Card3/>
      <Card4/>
      <Footer/>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
