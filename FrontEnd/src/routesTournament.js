import viewMatches from "views/ViewTournament/ViewMatches/ViewMatches.js";
import viewRanking from "views/ViewTournament/ViewRanking/ViewRanking.js";
import matchResult from "views/ViewTournament/MatchResult/MatchResult.js";

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
    path: "/matchresult",
    name: "Match Result",
    component: matchResult,
    layout: "/admin/viewtournament",
    user: false,
    admin: true,
  },
];

export default tournamentRoutes;