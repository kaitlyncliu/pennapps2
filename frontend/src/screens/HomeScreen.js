import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RestaurantCard from '../components/RestaurantCard';
// import Grid from '@material-ui/core/';

const HomeScreen = () => {
  return (
    // <Grid container spacing={24}>
    //   <Grid item md={3}>
    RestaurantCard(),
    RestaurantCard(),
    RestaurantCard()
    //   </Grid>
    //   <Grid item md={3}>
    //   </Grid>
    //   <Grid item md={3}>
    //   </Grid>
    // </Grid>
  )
}; 
export default HomeScreen;
