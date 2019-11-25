import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { translate as RaTranslate } from 'react-admin';

import styles from '../styles';

const FormLinkButton = ({ button, classes, translate }) => (
  <Link to={{ pathname: button.pathname }} className={classes.link}>
    <Button className={classes.button} fullWidth>
      {translate(button.text)}
    </Button>
  </Link>
);

FormLinkButton.propTypes = {
  button: PropTypes.objectOf(PropTypes.string).isRequired,
  translate: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string),
};

export default compose(
  RaTranslate,
  withStyles(styles),
)(FormLinkButton);
