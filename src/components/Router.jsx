import { Routes, Route, BrowserRouter } from "react-router-dom";
import StandingsPage from "../pages/StandingsPage";
import Error404 from "../pages/Error404";
import TeamForm from "./TeamForm";
import NavBar from "./NavBar";
import PlayerForm from "./PlayerForm";
import TeamPage from "../pages/TeamPage";
import MatchesPage from "../pages/MatchesPage";
import CreateMatch from "./CreateMatch";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<StandingsPage />}></Route>
        <Route path="/team-form" element={<TeamForm />}></Route>
        <Route path="/teams/:id" element={<TeamPage />}></Route>
        <Route path="/player-form" element={<PlayerForm />}></Route>
        <Route path="/calendar" element={<MatchesPage />}></Route>
        <Route path="/create-match" element={<CreateMatch />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
