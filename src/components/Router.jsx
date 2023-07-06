import { Routes, Route, BrowserRouter } from "react-router-dom";
import StandingsPage from "../pages/StandingsPage";
import Error404 from "../pages/Error404";
import NavBar from "./NavBar";
import PlayerForm from "./PlayerForm";
import TeamPage from "../pages/TeamPage";
import CreateMatch from "./CreateMatch";
import TeamsPageAdmin from "../pages/TeamsPageAdmin";
import EditTeam from "./EditTeam";
import CreateTeam from "./CreateTeam";
import MatchesPageAdmin from "../pages/MatchesPageAdmin";
import EditMatch from "../pages/EditMatch";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<StandingsPage />}></Route>
        <Route path="/create-team" element={<CreateTeam />}></Route>
        <Route path="/teams/edit/:id" element={<EditTeam />}></Route>
        <Route path="/teams-page-admin" element={<TeamsPageAdmin />}></Route>
        <Route path="/teams/:id" element={<TeamPage />}></Route>
        <Route path="/matches/:id" element={<EditMatch />}></Route>
        <Route path="/player-form" element={<PlayerForm />}></Route>
        <Route
          path="/matches-page-admin"
          element={<MatchesPageAdmin />}
        ></Route>
        <Route path="/create-match" element={<CreateMatch />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
