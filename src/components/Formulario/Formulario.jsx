import React from 'react';
import { TextField} from '@mui/material';

export default function WeatherForm(props) {
  return (
  
    <div className="card card-body">
        <br/>
    <form onSubmit={props.getWeather}>
        <div className="form-group">
        <TextField type="text" name="city"  id="outlined-basic" label="City"  placeholder="Your City Name" className="form-control" autoFocus/>
        
        <TextField type="text" name="country" placeholder="Your Country Name"  label="Country" className="form-control" />
        <button className="btn btn-success btn-block">
            Get Weather
        </button>
        </div>       
    </form>
</div>
   
  );
}