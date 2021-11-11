import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/useAuth';
import MuiButton from '../../../StyledComponent/MuiButton';

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/order/${user.email}`)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, [user.email]);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/order/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          alert("delete successfully")
          window.location.reload()
        }
      })
  }
  return (
    <div>
      <h2>My All Orders : {orders.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Appointments table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, fontSize: 20 }}>Product Name</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 20 }}>Price</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 20 }}>User Name</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 20 }}>User Email</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 20 }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{order.productName}</TableCell>
                <TableCell>{order.price}</TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell>{order.email}</TableCell>
                <TableCell> <MuiButton onClick={() => handleDelete(order._id)}>Remove Order</MuiButton> </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyOrders;