import { UserRoles } from './reducers/users/types';
import { orderStatuses } from './reducers/orders/types';

export const actions = {
  cancelMyOrder: {
    userRoles: [UserRoles.client],
    orderStatuses: [orderStatuses.created, orderStatuses.dispatched],
  },
  adminCancelOrder: {
    userRoles: [UserRoles.admin],
    orderStatuses: [orderStatuses.created, orderStatuses.dispatched],
  },
  adminDispatchOrder: {
    userRoles: [UserRoles.admin],
    orderStatuses: [orderStatuses.created],
  },
  adminCompleteOrder: {
    userRoles: [UserRoles.admin],
    orderStatuses: [orderStatuses.dispatched],
  },
};

export type AllowedActionKey = keyof typeof actions;
export type AllowedAction = typeof actions[AllowedActionKey];

export const isAllowedOrderAction = (userRole: UserRoles, orderStatus: orderStatuses, action: AllowedAction) =>
  action.orderStatuses.includes(orderStatus) && action.userRoles.includes(userRole);
