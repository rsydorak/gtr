export default {
  empeek: {
    utils: {
      ra: {
        auth: {
          signIn: 'Sign In',
          signUp: 'Sign Up',
          currentPassword: 'Current Password',
          newPassword: 'New Password',
          confirmNewPassword: 'Confirm New Password',
          forgotPassword: 'Forgot Password',
          email: 'Email',
          passwordChanged: 'Your Password has been changed!',
          linkForgetPassword: 'Link for the password changing will be sent to your email',
          backToLogin: 'Back to the login pages',
        },
        purchases: {
          products: 'List Of Products',
          priceError: "Error. Current product doesn't have a price",
          productAddError: 'Error. Product already added',
          paymentFailed: 'Payment failed. Try again',
          paymentSuccess: 'Payment success',
          listOfProducts: 'List Of Products',
          productName: 'Product Name',
          quantity: 'Quantity',
          pricePerUnit: 'Price Per Unit',
          totalPrice: 'Total Price',
          numberOfProducts: 'Number Of Products',
          payOrder: 'Pay Order',
          stripePaymentForm: 'Stripe Payment Form',
          totalPurchasePrice: 'Total Purchase Price',
        },
        roles: {
          userAddSuccess: 'User added successfully',
          userAddError: 'Current user already added to roles',
          userRemoved: 'User successfully removed from current role',
          role: 'role',
          users: 'users',
        },
      },
    },
  },
  resources: {
    purchases: {
      fields: {
        id: 'Id',
        code: 'Code',
        quantity: 'Quantity',
      },
    },
    roles: {
      fields: {
        permissions: 'Permissions',
        name: 'Name',
        user: 'User',
        id: 'ID',
        firstName: 'First Name',
        lastName: 'Last Name',
      },
    },
    users: {
      fields: {
        firstName: 'First Name',
        lastName: 'Last Name',
      },
    },
  },
};
