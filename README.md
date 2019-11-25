# Copy of  empeek.utils.react-admin module

Utilitary helpers for react-admin applications. It's private package, supported by Empeek team.

## Installation

```sh
npm install empeek.utils.react-admin

#or

yarn add empeek.utils.react-admin
```

## Documentation

## MultiColumnForm

Includes a set of components for constructing a form, built using [Material UI Tabs component](https://v1-5-0.material-ui.com/demos/tabs/). Unlike [TabbedForm](https://marmelab.com/react-admin/CreateEdit.html#the-tabbedform-component) component provided by react-admin, MultiColumnForm does not include Toolbar with SaveButton by default, but has a more flexible layout and better customization options.

Basic Usage:

```jsx
import React from 'react';
import { MultiColumnForm, Content } from 'empeek.utils.react-admin';
import { TextInput, NumberInput } from 'react-admin';
export default props => (
  <MultiColumnForm {...props}>
    <Content position="main">
      <NumberInput source="id" label="ID" />
      <TextInput source="name" label="Name" />
    </Content>
  </MultiColumnForm>
);
```

Usage with Tabs:

```jsx
import React from 'react';
import { MultiColumnForm, Content, FormTab } from 'empeek.utils.react-admin';
import { TextInput, NumberInput } from 'react-admin';
export default props => (
  <MultiColumnForm {...props}>
    <Content position="main">
      <NumberInput source="id" label="ID" />
      <TextInput source="name" label="Name" />
    </Content>
    <Content position="bottom">
      <FormTab label="Notes">
        <TextInput source="notes" label="Notes" />
      </FormTab>
      <FormTab label="Contact details">
        <TextInput source="phone" label="phone" />
        <TextInput source="email" label="email" />
      </FormTab>
    </Content>
  </MultiColumnForm>
);
```

**Tip:** FormTab expects a child, which can be in most cases Input type or Field type Component, but you can pass inside your own component with unique layout, it's totally up to you.

### Content component available props:

- `position` : Type: String. Available values: "main", "side", "bottom".

### FormTab component available props:

- `label` : Type: String. Used as Tab Name.
- `icon` : Type: Element. You can easily set icon from collection of [Material UI icons](https://material.io/tools/icons/)

## TableFormIterator

Component allows editing of arrays, inside in record. For example tags array inside in post record:

```jsx
{
  id: 123;
  tags: [
    {
      id: 0,
      name: 'Sport',
    },
    {
      id: 1,
      name: 'Music',
    },
  ];
}
```

Component displays an array of fields in an table (`<table>`), one sub-form by table row (`<tr>`). It also provides controls for adding and removing a sub-record. Built using [Material UI table conponents](https://v1-5-0.material-ui.com/demos/tables/).

Usage:

```jsx
import React from 'react';
import { DisabledInput, TextField, NumberField } from 'react-admin';
import { TableFormIterator } from 'empeek.utils.react-admin';

export default props => (
  <ArrayInput source="tags">
    <TableFormIterator>
      <NumberField source="id" label="ID" />
      <TextField source="name" label="Name" />
    </TableFormIterator>
  </ArrayInput>
);
```

### Available props:

- `disableAdd` : Type: Boolean. Disable ADD button. Default value false.
- `disableRemove` Type: Boolean. Disable REMOVE button, bellow the table. Default value false.
- `tableRowDisable` Type: Boolean. Style table row by adding red color.

## Data Provider

Data Provider already includes credentials for API (Authorization header) and supports features needed for authentication refreshTokens.
Data Provider it's function which receives three arguments:

- fakeData - for testing purpose.
- apiBaseUrl - string, which will be concat to your main entry point url.
- apiAuthUrl - string, which will be concat to your main entry point url and used for auth requests.
- saveTokens - func, receives data object, which contains all necessary credential info, like username and tokens. Must be same for `authProvider`.
- clearTokens - func, removes credentials from local storage etc. Must be same for `authProvider`.

In you need to use `dataProvider` inside custom pages, use [withDataProvider](https://marmelab.com/react-admin/Actions.html#using-the-withdataprovider-decorator)

Usage:

```jsx
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { dataProvider } from 'empeek.utils.react-admin';

const fakeData = {
  users: [
    id: 1,
    firstName: 'Jhon',
    lastName: 'Doe',
  ]
};

const apiBaseUrl = '/api';
const apiAuthUrl = `${apiBaseUrl}/token`;

const App = () => (
  <Admin
    title="My awesome application"
    dataProvider={dataProvider({ fakeData, apiBaseUrl, apiAuthUrl })}
  >
    <Resource name="users" />
  </Admin>
)
```

`!Note` Make sure you do not forget to specify the parameter 'proxy' in your package.json file. For example:

```
"proxy": "http://myawesomeapp.com",
```

After that dataProvider will send a request to the address `http://myawesomeapp.com/api`.

## [Auth Provider](docs/pages/AuthProvider.md)

AuthProvider supports authentication refresh tokens strategy and store user's credentials in local storage.

## Issues

Sometimes you may encounter a problem when your UI on the production server is broken. The reason
for this may be a collision of classnames. It may be happening because React-Admin and Material-UI
using two independent counters for naming in production. You can find more info here:

  https://stackoverflow.com/questions/50970625/react-admin-displays-very-messed-up
  
  https://github.com/marmelab/react-admin/issues/1782


# Modules

## [Roles](docs/modules/Roles.md)

# Pages

## [Login](docs/pages/Login.md)

## [Forgot Password](docs/pages/ForgotPassword.md)

## [Reset Password](docs/pages/ResetPassword.md)

## [Change Password](docs/pages/ChangePassword.md)

## [Sign Up](docs/pages/SignUp.md)

# HOC

## [requireAccessRights](docs/hoc/requireAccessRights.md)

# Components

## [MenuItemLink](docs/components/MenuItemLink.md)
