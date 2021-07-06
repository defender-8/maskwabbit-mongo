import { createSelector } from 'reselect';

const selectCheckout = state => state.checkout;

export const selectSession = createSelector(
  [selectCheckout],
  checkout => checkout.session,
);

export const selectSuccessMessage = createSelector(
  [selectCheckout],
  checkout => checkout.successMessage,
);

export const selectErrorMessage = createSelector(
  [selectCheckout],
  checkout => checkout.errorMessage,
);
