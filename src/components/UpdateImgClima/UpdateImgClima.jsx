import { useState, useEffect } from "react";
import { supabase } from "../../config/supabaseClient";
import ImgClima from "../Imgclima";

  export default function Clima({ session }) {
  const [loading, setLoading] = useState(true);
  const [imgclima_url, setImgClima_url] = useState(null);

  useEffect(() => { 
      getClima();
  }, [session]);

  async function getClima() {
      try {
          setLoading(true);
          const user = supabase.auth.user();

          let { data, error, status } = await supabase
              .from("clima")
              .select(`imgclima_url`)
              .eq("id", user.id)
              .single();

          if (error && status !== 406) {
              throw error;
          }

          if (data) {
              setImgClima_url(data.imgclima_url);
              console.log(data);
          }
      } catch (error) {
          console.log(error);
          alert(error.message);
      } finally {
          setLoading(false);
      }
  }

  async function updateImgClima({ imgclima_url  }) {
      try {
          setLoading(true);
          const user = supabase.auth.user();

          const updates = {
              id: user.id, 
              imgclima_url,
              updated_at: new Date(),
          };

          let { error } = await supabase.from("clima").upsert(updates, {
              returning: "minimal", // Don't return the value after inserting
          });

          if (error) {
              throw error;
          }
      } catch (error) {
          console.log(error);
          alert(error.message);
      } finally {
          setLoading(false);
      }
  }
  return ( 
    <div className="form-widget">            
    <ImgClima sx={{ maxWidth: 345 }}
                // height="194"
               url={imgclima_url ?? "https://www.emsevilla.es/wp-content/uploads/2020/10/no-image-1.png"}
                size={150}
                onUpload={(url) => {
                    setImgClima_url(url);
                    updateImgClima({ imgclima_url : url });
                }}
                disabled={loading}
                />        

      </div>
  )
}