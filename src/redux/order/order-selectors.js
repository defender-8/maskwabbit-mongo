import { createSelector } from 'reselect';

const selectOrderData = state => state.order;

export const selectLoading = createSelector(
  [selectOrderData],
  order => order.isLoading,
);

export const selectOrders = createSelector(
  [selectOrderData],
  order => order.orders,
);

export const selectSuccessMessage = createSelector(
  [selectOrderData],
  order => order.successMessage,
);

export const selectErrorMessage = createSelector(
  [selectOrderData],
  order => order.errorMessage,
);
