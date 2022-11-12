import {
    defaultFont,
    blackColor,
    primaryColor,
    grayColor,
} from "assets/jss/material-dashboard-react.js";

const simpleNavbarStyle = () => ({

  list: {
    marginTop: "0px",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    marginBottom: "0",
    listStyle: "none",
    position: "unset",
    display: "flex",
    flexDirection: "row",
    
  },
  item: {
    position: "right",
    display: "block",
    paddingLeft: "100px",
    textDecoration: "none",
    "&:selected":{
      color: primaryColor[0],
    },
    "&:hover,&:focus,&:visited,&": {
      color: primaryColor[0],
    },
  },
  itemLink: {
    width: "auto",
    transition: "all 300ms linear",
    margin: "10px 15px 0",
    borderRadius: "8%",
    position: "relative",
    display: "block",
    padding: "10px 15px",
    backgroundColor: grayColor[3],
    ...defaultFont,
  },
  itemText: {
    ...defaultFont,
    margin: "0",
    lineHeight: "20px",
    fontSize: "15px",
    color: blackColor,
    "&:inset":{
      color: primaryColor[0],
    },
  },

});

export default simpleNavbarStyle;