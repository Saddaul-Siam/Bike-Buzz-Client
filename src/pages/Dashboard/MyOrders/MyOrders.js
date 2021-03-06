import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/useAuth';
import { DeleteButton } from '../../../StyledComponent/MuiButton';
import { Typography } from '@mui/material';


const MyOrders = () => {
  const Swal = require('sweetalert2')
  const { user } = useAuth();
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch(`https://bike-buzz.herokuapp.com/order/${user.email}`)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, [user.email, orders]);

  const handleDelete = (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://bike-buzz.herokuapp.com/order/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.acknowledged) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
      }
    })

  }
  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#FF1493', display: 'flex', justifyContent: 'center',py:5}}>My All Orders </Typography>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Appointments table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, fontSize: 20 }}>Product Name</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 20 }}>Price</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 20 }}>User Name</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 20 }}>User Email</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 20 }}>Status</TableCell>
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
                <TableCell>{order.status}</TableCell>
                <TableCell> <DeleteButton onClick={() => handleDelete(order._id)}>Remove Order</DeleteButton> </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyOrders;