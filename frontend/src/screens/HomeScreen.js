import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/'
import RestaurantCard from './components/RestaurantCard';

const HomeScreen = () => {
  return (
    <Grid container spacing={24}>
      <Grid item md={3}>
        RestaurantCard()
        RestaurantCard()
        RestaurantCard()
      </Grid>
      <Grid item md={3}>
      </Grid>
      <Grid item md={3}>
      </Grid>
    </Grid>
  )
}; 
export default HomeScreen;
