import React from 'react';
import { useGetOrdersByUserId, useOrderActions } from '../reducers/orders/hooks';
import {
  CircularProgress,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
  Button,
  Backdrop,
} from '@material-ui/core';
import { useHistory, useParams } from 'react-router';
import { useAllowAdmin, useAllowedActions } from '../reducers/users/hooks';
import { actions } from '../allowedActionsConfig';

const UserOrders = () => {
  useAllowAdmin();
  const { userId } = useParams();
  const { orders, loading, hasLoaded } = useGetOrdersByUserId(userId || '');
  const { cancelOrder, dispatchOrder, completeOrder } = useOrderActions();
  const { push } = useHistory();
  const isAllowedAction = useAllowedActions();

  const handleGoBackClick = () => push('/users');
  return (
    <div>
      {loading && !hasLoaded && <CircularProgress />}
      {loading && hasLoaded && (
        <Backdrop open={!!loading}>
          <CircularProgress />
        </Backdrop>
      )}
      {!loading && (
        <div>
          <Button onClick={handleGoBackClick}>← Go Back</Button>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>status</TableCell>
                <TableCell>status changes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map(order => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>
                    {isAllowedAction(order.status, actions.adminCancelOrder) && (
                      <Button onClick={() => cancelOrder(order)}>Cancel</Button>
                    )}
                    {isAllowedAction(order.status, actions.adminDispatchOrder) && (
                      <Button onClick={() => dispatchOrder(order)}>Dispatch</Button>
                    )}
                    {isAllowedAction(order.status, actions.adminCompleteOrder) && (
                      <Button onClick={() => completeOrder(order)}>Complete</Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default UserOrders;
