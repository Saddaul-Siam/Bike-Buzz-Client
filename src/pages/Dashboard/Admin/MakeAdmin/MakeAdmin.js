import React, { useState } from 'react';
import {  Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const Swal = require('sweetalert2');

  const handleOnBlur = e => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = e => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        const user = { email };
        fetch('https://bike-buzz.herokuapp.com/users/admin', {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('idToken')}`,
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => {
            if (data.modifiedCount) {
              Swal.fire(
                'Success!!!',
                'Make Admin Successfully',
                'success'
              )
            }
          })
      }
    })
    e.preventDefault()
  }

  return (
    <Container>
      <Box >
        <Typography variant="h5" sx={{ fontWeight: 600, pb: 3 }}>Make A Admin</Typography>
        <form onSubmit={handleAdminSubmit}>
          <TextField
            required
            sx={{ width: '50%' }}
            label="Email"
            type="email"
            onBlur={handleOnBlur}
            variant="standard" />
          <Button type="submit" variant="contained">Make Admin</Button>
        </form>
      </Box>
    </Container>
  );
};

export default MakeAdmin;