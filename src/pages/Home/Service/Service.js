import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Grid } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import './Service.css';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Service = ({ data }) => {
  const { img, name, description, price, _id} = data;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Grid item sx={12} sm={6} md={4} lg={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader sx={{ height: '60px' }} title={name} />
        <Box className="images">
          <CardMedia
            component="img"
            height="200"
            image={img}
            alt="bike"
          />
        </Box>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description.split(' ').slice(0, 50).toString().replace(/,/g, ' ')}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Typography variant="h6"><AttachMoneyIcon />{price}</Typography>
          <Link to={`/orders/${_id}`}><Button sx={{ ml: 5 }} variant="contained">Purchase</Button></Link>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {description.split(' ').slice(50, 10000).toString().replace(/,/g, ' ')}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

export default Service