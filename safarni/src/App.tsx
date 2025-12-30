
import Home from './pages/HOME-PAGE/Home';
import CityDetails from './pages/SEARCH-PAGE/CityDetails';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FilterPanel from "./pages/SEARCH-PAGE/FilterPanel";
import SearchPage from './pages/SEARCH-PAGE/SearchPage';

function App() {



   const  myRouter = createBrowserRouter([
      {path : "/" , element : <Home/>},
      {path : "/Search" , element : <SearchPage/>},
      {path : "/cite/:id" , element : <CityDetails/>},
      {path : "/FilterPanel" , element : <FilterPanel/>},
      
    ])

  
  return <>
  
  <RouterProvider router={myRouter}/>
  
  </>
  
}

export default App;
