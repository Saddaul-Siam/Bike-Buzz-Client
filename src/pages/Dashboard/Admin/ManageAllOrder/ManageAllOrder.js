import React, { useState } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import MuiButton from '../../../../StyledComponent/MuiButton';
import { useForm } from "react-hook-form";
import { makeStyles } from '@mui/styles';


const ManageAllOrder = ({ order }) => {
  const { name, status, email, productName, address, city, price, _id, } = order;
  const Swal = require('sweetalert2');
  const { register, handleSubmit, formState: { errors } } = useForm();

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
  const [statusId, setStatusId] = useState(null);

  const onSubmit = data => {
    fetch(`https://bike-buzz.herokuapp.com/order/${statusId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.acknowledged) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Status update successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })

  };

  const useStyle = makeStyles({
    option: {
      fontSize: "16px",
      paddingRight: "10px",
      paddingLeft: "10px",
      paddingTop: "5px",
      paddingBottom: "5px",

    }
  })
  const { option } = useStyle()
  return (
    <TableBody>
      <TableRow>
        <TableCell width="50px">{name}</TableCell>
        <TableCell width="50px">{email}</TableCell>
        <TableCell width="50px">{price}</TableCell>
        <TableCell width="50px">{productName}</TableCell>
        <TableCell width="50px">{address}</TableCell>
        <TableCell width="50px">{city}</TableCell>
        <TableCell width="50px">
          <form onSubmit={handleSubmit(onSubmit)}>
            <select className={option} {...register("status")}>
              <option value={status}>{status}</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
              <option value="approved">Approved</option>
              <option value="shipped">Shipped</option>
              <option value="done">Done</option>
            </select>
            {errors.exampleRequired && <span>This field is required</span>}
            <MuiButton onClick={() => setStatusId(_id)} sx={{ ml: 1 }} type="submit" variant="contained" size="small" color="success">Update</MuiButton>
          </form>
        </TableCell>
        <TableCell width="50px"><MuiButton onClick={() => handleDelete(_id)}>Delete</MuiButton></TableCell>
      </TableRow>
    </TableBody>
  );
};

export default ManageAllOrder;

