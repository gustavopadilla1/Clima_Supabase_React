import React from 'react';
import { TextField} from '@mui/material';
import { useTranslation } from "react-i18next";
import{useEffect} from 'react';

export default function WeatherForm(props) {
  useEffect(() => {
    changeLaguage();
},);    
  const { i18n, t } = useTranslation();
  
  const changeLaguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
  
    <div className="card card-body">
        <br/>
    <form onSubmit={props.getWeather} >
        <div className="form-group">
        <TextField 
          type="text" 
          // name={t("City")}  
          name="City" 
          id="outlined-basic" 
          // label={t("City")}  
          label="City"
          placeholder="Your City Name" 
          // placeholder= {t("Your City Name")} 
          className="form-control" 
          autoFocus/>
        
        <TextField 
          type="text" 
          // name={t("Country")} 
          name="country" 
          placeholder="Your Country Name"   
          // placeholder= {t("Your Country Name")}   
          // label={t("Country")}
          label="Country" 
          className="form-control" />
          
        <button className="btn btn-success btn-block">
        {t("search")}            
        </button>
        </div>       
    </form>
</div>
   
  );
}