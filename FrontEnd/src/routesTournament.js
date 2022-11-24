import viewMatches from "views/ViewTournament/ViewMatches/ViewMatches.js";
import viewRanking from "views/ViewTournament/ViewRanking/ViewRanking.js";
import matchResult from "views/ViewTournament/MatchResult/MatchResult.js";
import createPrivateLeague from "views/CreatePrivateLeague/CreatePrivateLeague.js";
import joinPrivateLeague from "views/JoinPrivateLeague/JoinPrivateLeague";

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
  },{
    path: "/createPrivateLeague",
    name: "Create Private League",
    component: createPrivateLeague,
    layout: "/admin/viewtournament",
    user: true,
    admin: true,
  },
  {
    path: "/viewPrivateLeague",
    name: "View Private League",
    component: viewRanking,
    layout: "/admin/viewtournament",
    user: true,
    admin: true,
  },
  {
    path: "/joinPrivateLeague",
    name: "Join Private League",
    component: joinPrivateLeague,
    layout: "/admin/viewtournament",
    user: true,
    admin: true,
  },
];

export default tournamentRoutes;