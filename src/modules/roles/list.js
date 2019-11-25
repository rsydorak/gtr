import React from 'react';
import { List, Datagrid, TextField, EditButton, ReferenceArrayField, SingleFieldList, ChipField } from 'react-admin';

const RolesList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceArrayField source="permissions" reference="permissions">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <EditButton />
    </Datagrid>
  </List>
);

export default RolesList;
