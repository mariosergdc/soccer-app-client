import { Routes, Route, BrowserRouter } from "react-router-dom";
import StandingsPage from "../pages/StandingsPage";
import Error404 from "../pages/Error404";
import NavBar from "./NavBar";
import TeamPage from "../pages/TeamPage";
import CreateMatch from "./CreateMatch";
import TeamsPageAdmin from "../pages/TeamsPageAdmin";
import EditTeam from "./EditTeam";
import CreateTeam from "./CreateTeam";
import MatchesPageAdmin from "../pages/MatchesPageAdmin";
import EditMatch from "../pages/EditMatch";
import PlayersPageAdmin from "../pages/PlayersPageAdmin";
import EditPlayer from "./EditPlayer";
import CreatePlayer from "./CreatePlayer";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<StandingsPage />}></Route>
        {/*lista de teams se la pasa a standins table */}
        <Route path="/create-team" element={<CreateTeam />}></Route>
        {/* team */}
        <Route path="/teams/edit/:id" element={<EditTeam />}></Route>
        {/* team */}
        <Route path="/players/edit/:id" element={<EditPlayer />}></Route>
        {/*player */}
        <Route path="/teams-page-admin" element={<TeamsPageAdmin />}></Route>
        {/* team */}
        <Route path="/teams/:id" element={<TeamPage />}></Route>
        {/*team public Show one team from stadistics page */}
        <Route path="/matches/:id" element={<EditMatch />}></Route>
        <Route path="/create-player" element={<CreatePlayer />}></Route>
        {/*player */}
        <Route
          path="/matches-page-admin"
          element={<MatchesPageAdmin />}
        ></Route>
        <Route
          path="/players-page-admin"
          element={<PlayersPageAdmin />}
        ></Route>
        {/*player */}
        <Route path="/create-match" element={<CreateMatch />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
