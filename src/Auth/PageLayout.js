import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import { Card, Avatar } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import styles from './styles';

const PageLayout = ({ autoHideDuration, classes, children }) => (
  <div className={classes.main}>
    <Card className={classes.card}>
      <div className={classes.avatar}>
        <Avatar className={classes.icon}>
          <LockIcon />
        </Avatar>
      </div>
      {children}
    </Card>

    <Notification autoHideDuration={autoHideDuration} />
  </div>
);

PageLayout.defaultProps = {
  autoHideDuration: 60000,
};

PageLayout.propTypes = {
  autoHideDuration: PropTypes.number,
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(PageLayout);
