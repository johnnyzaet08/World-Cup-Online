// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
//import LibraryBooks from "@material-ui/icons/LibraryBooks";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import CreateMatch from "views/CreateMatch/CreateMatch.js";
import CreateTournament from "views/CreateTournament/CreateTournament.js";
import ViewTournament from "views/ViewTournament/ViewTournament";
//import TableList from "views/TableList/TableList.js";
//import Typography from "views/Typography/Typography.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
    dashboard: true,
  },
  {
    path: "/creatematch",
    name: "Create Match",
    icon: SportsSoccerIcon,
    component: CreateMatch,
    layout: "/admin",
    dashboard: true,
  },
  {
    path: "/createtournament",
    name: "Create Tournament",
    icon: EmojiEventsIcon,
    component: CreateTournament,
    layout: "/admin",
    dashboard: true,
  },
  {
    path: "/viewtournament",
    name: "View Tournament",
    icon: EmojiEventsIcon,
    component: ViewTournament,
    layout: "/admin",
    dashboard: false,
  },
  /*{
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },*/
];

export default dashboardRoutes;
