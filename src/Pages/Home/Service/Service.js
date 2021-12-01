import React from 'react';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const Service = (props) => {
    const {name,description,img} =props.service
    return (
            <Grid item xs={2} sm={4} md={4}>
               <Card sx={{ minWidth: 275 ,boxShadow: 0 ,mt:10}}>
               <CardMedia
        component="img"
        style={{width: 'auto', height: '80px', margin: '0 auto'}}
        image={img}
        alt="green iguana"
      />
      <CardContent  sx={{ margin: 2,p:2,textAlign: 'center' }} >
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">
         {description}
        </Typography>
      </CardContent>
    </Card>
            </Grid> 
    );
};

export default Service;