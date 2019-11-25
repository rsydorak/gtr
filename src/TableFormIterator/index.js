import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Close as CloseIcon, AddCircleOutline as AddIcon } from '@material-ui/icons';
import { withStyles, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import classNames from 'classnames';
import { translate as RaTranslate } from 'react-admin';

const styles = theme => ({
  root: {
    overflow: 'auto',
    '& > li:last-child': {
      borderBottom: 'none',
    },
  },
  tableRow: {
    '& .currency-sign': {
      width: 'auto',
      marginRight: 4,
      '& > p': {
        position: 'relative',
        top: -1,
      },
    },
  },
  disableRow: {
    backgroundColor: red[200],
    '& input, div, span': {
      color: 'white',
    },
    '& .currency-sign': {
      '& > p': {
        color: 'white',
      },
    },
    '& a > span': {
      color: theme.palette.primary.main,
      whiteSpace: 'nowrap',
    },
  },
  headerItem: {
    textTransform: 'Capitalize',
    fontSize: '0.9rem',
  },
  action: {
    paddingTop: '0.5em',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  inputWrapper: {
    minWidth: 90,
    '& input': {
      width: '100%',
      fontSize: '0.9rem',
    },
    '& > div': {
      width: '100%',
      minWidth: 'auto',
    },
    '& > div > div': {
      width: '100%',
      minWidth: 'auto',
    },
    '& > div > div > div': {
      width: '100%',
      minWidth: 'auto',
    },
    tableCell: {
      verticalAlign: 'baseline',
      '& a > span': {
        whiteSpace: 'nowrap',
      },
      '&:first-child > div': {
        minWidth: 120,
      },
    },
    '@media (max-width: 1920px)': {
      headerItem: {
        paddingLeft: 6,
        paddingRight: 6,
      },
      tableCell: {
        paddingLeft: 6,
        paddingRight: 6,
      },
    },
  },
});

class TableFormIterator extends Component {
  constructor(props) {
    super(props);

    this.nextId = props.fields.length ? props.fields.length : 0;

    this.ids = this.nextId > 0 ? Array.from(Array(this.nextId).keys()) : [];
  }

  removeField = index => () => {
    const { fields } = this.props;

    this.ids.splice(index, 1);

    fields.remove(index);
  };

  addField = () => {
    const { fields, shouldAllowAdd } = this.props;

    let isValid = true;
    if (shouldAllowAdd) {
      isValid = shouldAllowAdd();
    }
    if (!isValid) return;

    this.ids.push((this.nextId += 1));

    fields.push({});
  };

  render() {
    const {
      classes = {},
      children,
      fields,
      meta: { error, submitFailed },
      disableAdd,
      disableRemove,
      tableRowDisable,
      translate,
    } = this.props;

    if (!fields) return null;

    return (
      <div className={classes.root}>
        {submitFailed && error && <span>{translate(error)}</span>}

        <Table>
          <TableHead>
            <TableRow>
              {Children.map(children, input => (
                <TableCell key={input.source} className={classes.headerItem} padding="checkbox">
                  {input.props.label ? translate(input.props.label) : null}
                </TableCell>
              ))}
              {!disableRemove && <TableCell />}
            </TableRow>
          </TableHead>
          <TableBody>
            {fields.map((member, fieldIndex) => (
              <TableRow
                key={member}
                className={classNames(classes.tableRow, {
                  [classes.disableRow]: tableRowDisable,
                })}
              >
                {Children.map(children, input => (
                  <TableCell key={input.props.source} className={classes.tableCell} padding="checkbox">
                    <div className={classes.inputWrapper}>
                      {cloneElement(input, {
                        source: `${member}${input.props.source ? `.${input.props.source}` : ''}`,
                        label: '',
                        index: fieldIndex,
                      })}
                    </div>
                  </TableCell>
                ))}

                {!disableRemove && (
                  <TableCell className={classes.action} align="right" padding="none">
                    <Button size="small" onClick={this.removeField(fieldIndex)}>
                      <CloseIcon className={classes.leftIcon} />
                    </Button>
                  </TableCell>
                )}
              </TableRow>
            ))}

            {!disableAdd && (
              <TableRow>
                <TableCell colSpan={React.Children.count(children) + (disableRemove ? 0 : 1)}>
                  <Button size="small" onClick={this.addField}>
                    <AddIcon className={classes.leftIcon} />
                  </Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

TableFormIterator.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.objectOf(PropTypes.string),
  fields: PropTypes.object,
  meta: PropTypes.object,
  disableAdd: PropTypes.bool,
  disableRemove: PropTypes.bool,
  tableRowDisable: PropTypes.bool,
  shouldAllowAdd: PropTypes.func,
  translate: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles),
  RaTranslate,
)(TableFormIterator);
