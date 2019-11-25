import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { translate as RaTranslate } from 'react-admin';

const styles = theme => ({
  root: {
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'flex-start',
  },
  active: { color: theme.palette.text.primary },
  icon: { paddingRight: '1.2em' },
  menuLinkText: {
    fontSize: '1rem',
  },
});

const MenuItemLink = ({ className, classes, primaryText, leftIcon, onClick, to, translate }) => {
  const handleClick = e => {
    if (onClick) onClick(e);
  };

  return (
    <MenuItem
      className={className || classes.root}
      activeClassName={classes.active}
      component={NavLink}
      onClick={handleClick}
      to={to}
    >
      {leftIcon && <span className={classes.icon}>{cloneElement(leftIcon)}</span>}
      <span className={classes.menuLinkText}>{translate(primaryText)}</span>
    </MenuItem>
  );
};

MenuItemLink.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  leftIcon: PropTypes.node,
  onClick: PropTypes.func,
  primaryText: PropTypes.string.isRequired,
  to: PropTypes.string,
  translate: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default compose(
  withStyles(styles),
  RaTranslate,
)(MenuItemLink);
