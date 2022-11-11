import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/material-dashboard-react/components/customInputStyle.js";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";

const useStyles = makeStyles(styles);

export default function BasicSelect(props) {
  const classes = useStyles();
  const { formControlProps, value, onChange, labelText, options, id, error, success } = props;

  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + classes.formControl}
    >
      <FormControl>
        <InputLabel id="demo-simple-select-label">{labelText}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id={id}
          value={value}
          label={labelText}
          onChange={onChange}
        >
          {options.map((option, index) => {
            return <MenuItem value={option.value} key={index}> {option.text} </MenuItem>
          })}
        </Select>
      </FormControl>
      {error ? (
        <Clear className={classes.feedback + " " + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + " " + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
}

BasicSelect.propTypes = {
  labelText: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf( PropTypes.object ),
  formControlProps: PropTypes.object,
  labelProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
};
