import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./routes/layout"
import Trips from './routes/trips';
import TripInfo from './routes/tripinfo';
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element = {<Trips/>} />
          <Route path = ":tripnum" element = {<TripInfo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
