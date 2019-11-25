import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { UPDATE, showNotification, REFRESH_VIEW, translate as RaTranslate } from 'react-admin';

const handleDelete = ({ record, dataProvider, dispatch }) => async () => {
  const { id } = record;
  try {
    await dataProvider(UPDATE, 'users', { id, data: { ...record, roleId: null } });
    dispatch(showNotification('empeek.utils.ra.roles.userRemoved'));
    dispatch({ type: REFRESH_VIEW });
  } catch (e) {
    dispatch(showNotification(e.messsage, 'warning'));
  }
};

const DeleteButton = ({ dataProvider, dispatch, record, translate }) => (
  <Button color="secondary" onClick={handleDelete({ dataProvider, record, dispatch })}>
    <DeleteIcon />
    {translate('ra.action.delete')}
  </Button>
);

DeleteButton.propTypes = {
  dataProvider: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  record: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])),
  translate: PropTypes.func.isRequired,
};

export default RaTranslate(DeleteButton);
