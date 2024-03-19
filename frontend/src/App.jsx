import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./routes/layout"
import Trips from './routes/trips';
import TripInfo from './routes/tripinfo';
import './index.css'

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* all pages use layout */}
        <Route path = "/" element = {<Layout />}>

          {/* home route is trips page */}
          <Route index element = {<Trips/>} />

          {/* trip info page */}
          <Route path = ":tripNum" element = {<TripInfo/>} />
          
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
