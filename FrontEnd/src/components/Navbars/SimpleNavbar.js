import React from "react";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";
//import styles from "assets/jss/material-dashboard-react/components/simpleNavbarStyle.js";

export default function SimpleNavbar(props){
    const { routes } = props;
    return(
        <React.Fragment>
            <section>
                <div className="bg-blue-900 w-full text-black text-xl h-20 grid-cols-2 items-center">
                    {
                        routes.map((route, index) => {
                            return(
                                <div key={index}>
                                    <NavLink
                                    to={route.layout + route.path}
                                    >
                                        <span>
                                            {route.name}
                                        </span>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </React.Fragment>
    )
}

SimpleNavbar.propTypes = {
    routes: propTypes.arrayOf( propTypes.object ),
};

