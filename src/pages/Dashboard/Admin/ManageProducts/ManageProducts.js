import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://bike-buzz.herokuapp.com/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [products])

  return (
    <Box>
      <Typography sx={{ fontWeight: 'bold', color: '#FF1493', display: 'flex', justifyContent: 'center', py: 5 }} variant="h4">Manage Products</Typography>
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell width="50px">Price</TableCell>
              <TableCell width="50px">Product id</TableCell>
              <TableCell width="50px">Action</TableCell>
            </TableRow>
          </TableHead>
          {
            products.map(product => <ManageProduct key={product._id} product={product}></ManageProduct>)
          }
        </Table>
      </TableContainer >
    </Box >
  );
};

export default ManageProducts;