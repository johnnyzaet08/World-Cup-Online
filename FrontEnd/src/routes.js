/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import CreateMatch from "views/CreateMatch/CreateMatch.js";
import CreateTournament from "views/CreateTournament/CreateTournament.js";
//import TableList from "views/TableList/TableList.js";
//import Typography from "views/Typography/Typography.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/creatematch",
    name: "Create Match",
    icon: Person,
    component: CreateMatch,
    layout: "/admin",
  },
  {
    path: "/createtournament",
    name: "Create Tournament",
    icon: Person,
    component: CreateTournament,
    layout: "/admin",
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
