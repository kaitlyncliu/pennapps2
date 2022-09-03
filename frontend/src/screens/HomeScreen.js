import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RestaurantCard from '../components/RestaurantCard';
// import Grid from '@material-ui/core/';

export default function HomeScreen() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get('/get-restaurant/{id}').then((response) => {
      setPost(response.data);
    });
  }, []);
  
  return (
    <RestaurantCard name={post.name}
                    address={post.address}
                    relativePortionSize={post.relativePortionSize}
                    image={post.image}>
    </RestaurantCard>
   
  );
}; 
