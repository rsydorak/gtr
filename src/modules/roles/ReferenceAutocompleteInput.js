import React from 'react';
import PropTypes from 'prop-types';
import { ReferenceInput, AutocompleteInput, GET_ONE, UPDATE, showNotification, REFRESH_VIEW } from 'react-admin';

const onChange = ({ dataProvider, dispatch, roleId }) => async (_, id) => {
  try {
    const { data } = await dataProvider(GET_ONE, 'users', { id }, '/', false);
    if (data.roleId) {
      dispatch(showNotification('empeek.utils.ra.roles.userAddError', 'warning'));
      return;
    }
    await dataProvider(UPDATE, 'users', { id, data: { ...data, roleId } });
    dispatch(showNotification('empeek.utils.ra.roles.userAddSuccess'));
    /** We need this setTimeout with this duration. Because we update our form component with a *key*
     So when showNotification trigers and after immediately action below. Our component unmounted and hideNotication
     (comes out of box) wants trigers on component which currently not exist because of changing a key.
     This lead to memory leak.
    */
    setTimeout(() => dispatch({ type: REFRESH_VIEW }), 1000);
  } catch (e) {
    dispatch(showNotification(e.message, 'warning'));
  }
};

const ReferenceAutocompleteInput = ({ dataProvider, dispatch, roleId, autocompleteOptionText }) => {
  const optionText = autocompleteOptionText || (item => item.firstName && item.firstName.trim());

  return (
    <ReferenceInput
      resource="roles"
      reference="users"
      source="user"
      allowEmpty
      onChange={onChange({ dataProvider, dispatch, roleId })}
    >
      <AutocompleteInput optionText={item => optionText(item) || ''} focusInputOnSuggestionClick={false} />
    </ReferenceInput>
  );
};

ReferenceAutocompleteInput.propTypes = {
  dataProvider: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  roleId: PropTypes.string.isRequired,
  autocompleteOptionText: PropTypes.func,
};

export default ReferenceAutocompleteInput;
