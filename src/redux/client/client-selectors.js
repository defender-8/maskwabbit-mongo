import { createSelector } from 'reselect';

const selectUserData = state => state.client;

export const selectLoading = createSelector(
  [selectUserData],
  client => client.isLoading,
);

export const selectUser = createSelector(
  [selectUserData],
  client => client.user,
);

export const selectSuccessMessage = createSelector(
  [selectUserData],
  client => client.successMessage,
);

export const selectErrorMessage = createSelector(
  [selectUserData],
  client => client.errorMessage,
);
