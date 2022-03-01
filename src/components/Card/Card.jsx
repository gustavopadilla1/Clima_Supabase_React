import { CardContent,Card, CardHeader,CardActions, Avatar, Button } from '@mui/material';
import { red } from '@mui/material/colors';
import IconButton  from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Clima from '../UpdateImgClima';
import React from 'react'; 
import { useTranslation } from "react-i18next";
import{useEffect} from 'react';


const WeatherInfo = props => {

  useEffect(() => {
    changeLaguage();
},);    
  const { i18n, t } = useTranslation();
  
  const changeLaguage = (language) => {
    i18n.changeLanguage(language);
  };

    // console.log(props)
    return (      
        <Card sx={{ maxWidth: 345 }} >
            <CardHeader sx={{ maxWidth: 345 }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                   <Clima/>

          </Avatar>
        }
        action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          
          title={t("welcome")}
          subheader="September 14, 2016"
        />
       <Clima/>
        
        {/* <CardMedia sx={{ maxWidth: 345 }}
        component="img"
        height="194"
        image="https://www.liderempresarial.com/wp-content/uploads/2019/11/200533-Aguascalientes.jpg"
        alt="Paella dish"
      /> */}

    <CardContent variant="outlined" sx={{ maxWidth: 345 }}>
      {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {props.temperature ?
                <div className="card card-body mt-2 animated fadeInUp" >
                    {
                        props.city && props.country &&
                        <p><i className="fas fa-location-arrow"></i> {t("Location")}: {props.city}, {props.country}</p>
                    }
                    {
                        props.temperature &&
                        <p><i className="fas fa-temperature-low"></i> {t("Temperature")} : {props.temperature} ℃, {props.description}</p>
                    }
                    {
                        props.humidity &&
                        <p><i className="fas fa-water"></i> {t("Humidity")} : {props.humidity}</p>
                    }
                    {
                        props.wind_speed &&
                        <p><i className="fas fa-wind"></i> {t("Wind Speed")} : {props.wind_speed}</p>
                    }
                </div>
                :
                <div className="card card-body mt-2 text-center">
                    <i className="fas fa-sun fa-10x"></i>
                </div>
            }
            
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>             
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <Button>               
          Info          
        </Button>
       

        
      </CardActions>
  
        
    </Card>
        // <div>
        //     
        // </div>

    )
}

export default WeatherInfo;