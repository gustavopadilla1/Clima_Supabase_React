import { CardContent,Card,CardMedia, CardHeader,CardActions, Avatar } from '@mui/material';
import { red } from '@mui/material/colors';
import IconButton  from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import React from 'react';

// import ImgClima from "../Imgclima";

  // export default function clima({ session }) {
//   const [loading, setLoading] = useState(true);
//   const [imgclima_url, setImgClima_url] = useState(null);

//   useEffect(() => { 
//       getClima();
//   }, [session]);

//   async function getClima() {
//       try {
//           setLoading(true);
//           const user = supabase.auth.user();

//           let { data, error, status } = await supabase
//               .from("clima")
//               .select(`imgclima_url`)
//               .eq("id", user.id)
//               .single();

//           if (error && status !== 406) {
//               throw error;
//           }

//           if (data) {
//               setImgClima_url(data.imgclima_url);
//               console.log(data);
//           }
//       } catch (error) {
//           console.log(error);
//           alert(error.message);
//       } finally {
//           setLoading(false);
//       }
//   }

//   async function updateImgClima({ imgclima_url  }) {
//       try {
//           setLoading(true);
//           const user = supabase.auth.user();

//           const updates = {
//               id: user.id, 
//               imgclima_url,
//               updated_at: new Date(),
//           };

//           let { error } = await supabase.from("clima").upsert(updates, {
//               returning: "minimal", // Don't return the value after inserting
//           });

//           if (error) {
//               throw error;
//           }
//       } catch (error) {
//           console.log(error);
//           alert(error.message);
//       } finally {
//           setLoading(false);
//       }
//   }


const WeatherInfo = props => {

    console.log(props)
    return (      
        <Card sx={{ maxWidth: 345 }} >
            <CardHeader sx={{ maxWidth: 345 }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            J
          </Avatar>
        }
        action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        {/* <ImgClima>
               url={imgclima_url}
                size={150}
                onUpload={(url) => {
                    setImgClima_url(url);
                    updateImgClima({ imgclima_url });
                }}
        </ImgClima> */}
        
        <CardMedia sx={{ maxWidth: 345 }}
        component="img"
        height="194"
        image="https://www.liderempresarial.com/wp-content/uploads/2019/11/200533-Aguascalientes.jpg"
        alt="Paella dish"
      />
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
                        <p><i className="fas fa-location-arrow"></i> Location: {props.city}, {props.country}</p>
                    }
                    {
                        props.temperature &&
                        <p><i className="fas fa-temperature-low"></i> Temperature: {props.temperature} ℃, {props.description}</p>
                    }
                    {
                        props.humidity &&
                        <p><i className="fas fa-water"></i> Humidity: {props.humidity}</p>
                    }
                    {
                        props.wind_speed &&
                        <p><i className="fas fa-wind"></i> Wind Speed: {props.wind_speed}</p>
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
        
      </CardActions>
      
        
    </Card>
        // <div>
        //     
        // </div>

    )
}

export default WeatherInfo;