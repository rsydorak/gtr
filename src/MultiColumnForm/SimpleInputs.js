import React, { Children } from 'react';
import * as PropTypes from 'prop-types';
import { FormInput, BooleanInput, ReferenceField, TextField, FormDataConsumer } from 'react-admin';
import { Grid, withStyles } from '@material-ui/core';
import classNames from 'classnames';

const componentsNotCapableOfFullWidth = [BooleanInput, ReferenceField, TextField];

const styles = theme => ({
  checkbox: {
    marginTop: theme.spacing.unit * 3.5,
  },
  input: {
    minWidth: 0,
    width: '100%',
  },
});

const SimpleInputs = ({ classes, basePath, children, record, resource }) => (
  <Grid container spacing={24}>
    {Children.map(children, input => (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <FormInput
          basePath={basePath}
          input={React.cloneElement(input, {
            className: classNames({ [classes.checkbox]: input.type === BooleanInput }, classes.input),
            ...(componentsNotCapableOfFullWidth.includes(input.type) ? {} : { fullWidth: true }),
            ...(input.type === FormDataConsumer ? { addLabel: true } : {}),
          })}
          record={record}
          resource={resource}
        />
      </Grid>
    ))}
  </Grid>
);

SimpleInputs.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  basePath: PropTypes.string,
  children: PropTypes.node,
  record: PropTypes.objectOf(PropTypes.any),
  resource: PropTypes.string,
};

export default withStyles(styles)(SimpleInputs);
