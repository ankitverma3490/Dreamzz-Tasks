import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
 
const CustomCard = ({
  title,
  data,
  image ,
  customStyle = {}, 
}) => {
  return (
    <>
      <div style={{ fontSize: '28px', color: "#422633", ...customStyle }}>
        {title}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginX: '20px',
          flexWrap: 'wrap',
        }}
      >
        {data.map((item) => (
          <div key={item.id} style={{ width: '32%', margin: '5px' }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image={image} alt="card" />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    onClick={() => {
                      console.log('clicked');
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomCard;