import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import MuiButton from '../../../../StyledComponent/MuiButton';

const ManageAllOrder = ({ order }) => {
  const { name, status, email, productName, address, city, price, _id, } = order;
  const Swal = require('sweetalert2');

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
        fetch(`http://localhost:5000/order/${id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        })
          .then(res => res.json())
          .then(result => {
            if (result.acknowledged) {
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
    <TableBody>
      <TableRow>
        <TableCell width="50px" align="">{name}</TableCell>
        <TableCell width="50px" align="">{email}</TableCell>
        <TableCell width="50px" align="">{price}</TableCell>
        <TableCell width="50px" align="">{productName}</TableCell>
        <TableCell width="50px" align="">{address}</TableCell>
        <TableCell width="50px" align="">{city}</TableCell>
        <TableCell width="50px" align="">{status}</TableCell>
        <TableCell width="50px" align=""><MuiButton onClick={() => handleDelete(_id)}>Delete</MuiButton></TableCell>
      </TableRow>
    </TableBody>
  );
};

export default ManageAllOrder;