import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import ContactForm from './component/ContactForm';
import GamePage from './component/GamePage';
import WebappPage from './component/WebappPage';
import SitePage from './component/SitePage';

function App() {

  return (
    <>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/GamePage`} element={<GamePage />} />
          <Route path={`/ContactForm/`} element={<ContactForm />} />
          <Route path={`/WebappPage/`} element={<WebappPage />} />
          <Route path={`/SitePage/`} element={<SitePage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
