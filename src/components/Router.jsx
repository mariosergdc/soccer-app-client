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
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Calendario from "../pages/Calendario";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/calendar" element={<Calendario />}></Route>
        <Route path="/" element={<StandingsPage />}></Route>
        {/*lista de teams se la pasa a standins table */}
        <Route
          path="/create-team"
          element={
            <PrivateRoute>
              <CreateTeam />
            </PrivateRoute>
          }
        ></Route>
        {/* team */}
        <Route
          path="/teams/edit/:id"
          element={
            <PrivateRoute>
              <EditTeam />
            </PrivateRoute>
          }
        ></Route>
        {/* team */}
        <Route
          path="/players/edit/:id"
          element={
            <PrivateRoute>
              <EditPlayer />
            </PrivateRoute>
          }
        ></Route>
        {/*player */}
        <Route
          path="/teams-page-admin"
          element={
            <PrivateRoute>
              <TeamsPageAdmin />
            </PrivateRoute>
          }
        ></Route>
        {/* team */}
        <Route path="/teams/:id" element={<TeamPage />}></Route>
        {/*team public Show one team from stadistics page */}
        <Route
          path="/matches/:id"
          element={
            <PrivateRoute>
              <EditMatch />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/create-player"
          element={
            <PrivateRoute>
              <CreatePlayer />
            </PrivateRoute>
          }
        ></Route>
        {/*player */}
        <Route
          path="/matches-page-admin"
          element={
            <PrivateRoute>
              <MatchesPageAdmin />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/players-page-admin"
          element={
            <PrivateRoute>
              <PlayersPageAdmin />
            </PrivateRoute>
          }
        ></Route>
        {/*player */}
        <Route
          path="/create-match"
          element={
            <PrivateRoute>
              <CreateMatch />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
