/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";

import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();
  let location = useLocation();
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return location.pathname === routeName;
  }
  const { color, logo, image, routes } = props;
  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        if (prop.dashboard){
          if ((sessionStorage.getItem("Type") === "user" && prop.user) || (sessionStorage.getItem("Type") === "admin" && prop.admin)){
            var activePro = " ";
            const listItemClasses = classNames({
              [" " + classes[color]]: activeRoute(prop.layout + prop.path),
            });
            const whiteFontClasses = classNames({
              [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path),
            });
            return (
              <NavLink
                to={prop.layout + prop.path}
                className={activePro + classes.item}
                activeClassName="active"
                key={key}
              >
                <ListItem button className={classes.itemLink + listItemClasses}>
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(classes.itemIcon, whiteFontClasses, 
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(classes.itemIcon, whiteFontClasses, 
                      )}
                    />
                  )}
                  <ListItemText
                    primary={prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, 
                    )}
                    disableTypography={true}
                  />
                </ListItem>
              </NavLink>
            );
          };
        };
      })}
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <a
        className={classNames(classes.logoLink)}
        target="_blank"
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.imgSideBar} />
        </div>
      </a>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            { <AdminNavbarLinks />}
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, ),
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};
