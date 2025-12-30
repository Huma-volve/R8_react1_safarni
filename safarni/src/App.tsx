import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import ComparePage from "./pages/ComparePage";
import InternalTourPage from "./pages/InternalTourPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <header className=" grid grid-cols-1 md:grid-cols-2 bg-slate-500">
                <div>
                  <h1>Visit The Most</h1>
                  <h2>Beautiful Places In The World</h2>
                  <p>
                    "Explore stunning destinations around the globe. Find travel
                    inspiration, top attractions, and plan your next adventure—all
                    from one platform."
                  </p>
                </div>

                <figure className=" allImg grid grid-cols-3">
                  {/* <div>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
            </div> */}
                </figure>
              </header>
            </div>
          }
        />
        <Route path={ROUTES.COMPARE} element={<ComparePage />} />
        <Route path={ROUTES.INTERNAL_TOUR} element={<InternalTourPage />} />
      </Routes>
    </Router>
  );
}

export default App;
