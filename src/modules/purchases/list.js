import React from 'react';
import { List, Datagrid, TextField, ShowButton, FunctionField, translate as RaTranslate } from 'react-admin';

const PurchaseList = ({ translate, ...props }) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="code" />
      <FunctionField
        label={translate('empeek.utils.ra.purchases.numberOfProducts')}
        render={({ products }) => products.length}
      />
      <ShowButton />
    </Datagrid>
  </List>
);

export default RaTranslate(PurchaseList);
