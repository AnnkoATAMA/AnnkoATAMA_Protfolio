import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import NotFound from "./pages/NotFoundPage.tsx";
import RaceList from "./components/RaceList.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import SkillsPage from "./pages/SkillsPage.tsx";
import RepositoryPage from "./pages/RepositoryPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

function App() {

  return (
      <Routes location={location} key={location.pathname}>
          <Route index element={<HomePage/>} />
          <Route path={"/racelist"} element={<RaceList />} />
          <Route path={"/profile"} element={<ProfilePage />} />
          <Route path={"/skills"} element={<SkillsPage />} />
          <Route path={"/repository"} element={<RepositoryPage />} />
          <Route path={"/contact"} element={<ContactPage />} />
          <Route path={"/*"} element={<NotFound/>} />
      </Routes>
  )
}

export default App
