import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import RaceList from "./components/RaceList.tsx";

function App() {

  return (
      <Routes location={location} key={location.pathname}>
          <Route index element={<Home/>} />
          <Route path={"/racelist"} element={<RaceList />} />
          <Route path={"/*"} element={<NotFound/>} />
      </Routes>
  )
}

export default App
