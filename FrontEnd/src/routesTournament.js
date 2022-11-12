import viewMatches from "views/ViewTournament/ViewMatches/ViewMatches.js";
import viewRanking from "views/ViewTournament/ViewRanking/ViewRanking.js";
import createMatch from "views/CreateMatch/CreateMatch.js";

const tournamentRoutes = [
  {
    path: "/viewmatches",
    name: "View Matches",
    component: viewMatches,
    layout: "/admin/viewtournament",
    user: true,
    admin: true,
  },
  {
    path: "/viewranking",
    name: "View Ranking",
    component: viewRanking,
    layout: "/admin/viewtournament",
    user: true,
    admin: true,
  },
  {
    path: "/createMatch",
    name: "Create Match",
    component: createMatch,
    layout: "/admin/viewtournament",
    user: false,
    admin: true,
  },
];

export default tournamentRoutes;