import viewMatches from "views/ViewTournament/ViewMatches/ViewMatches.js";
import viewRanking from "views/ViewTournament/ViewRanking/ViewRanking.js";

const tournamentRoutes = [
  {
    path: "/viewmatches",
    name: "View Matches",
    component: viewMatches,
    layout: "/admin/viewtournament",
  },
  {
    path: "/viewranking",
    name: "View Ranking",
    component: viewRanking,
    layout: "/admin/viewtournament",
  },
  /*{
    path: "/viewtournament",
    name: "View Tournament",
    component: ViewTournament,
    layout: "/admin/viewtournament",
  },*/
];

export default tournamentRoutes;