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
    fetch(`http://localhost:5000/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [products])

  return (
    <Box>
      <Typography sx={{ fontWeight: 'bold' }} variant="h4">Manage Products</Typography>
      <Typography sx={{ py: 3, fontWeight: 600 }} variant="body1">Products Here {products.length}</Typography>

      <TableContainer TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell width="50px" align="left">Price</TableCell>
              <TableCell width="50px" align="left">Product id</TableCell>
              <TableCell width="50px" align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          {
            products.map(product => <ManageProduct product={product}></ManageProduct>)
          }
        </Table>
      </TableContainer >
    </Box >
  );
};

export default ManageProducts;