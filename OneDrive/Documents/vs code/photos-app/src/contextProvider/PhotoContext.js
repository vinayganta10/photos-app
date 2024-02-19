import {react, createContext, useState} from 'react';
import axios from 'axios';
import {apiKey} from '../api/config';
export const PhotoContext = createContext ();

export default function PhotoConextProvider (props) {
  const [photos, setPhotos] = useState ([]);
  const [loading, setLoading] = useState (true);
  const runQuery = (query) => {
    axios.get (
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    ).then((response)=>{
        setPhotos(response.data.photos.photo);
        setLoading(false);
    }).catch((error) => {console.error(error)});
  };

  return (
    <PhotoContext.Provider value={{photos, loading, runQuery}}>
      {props.children}
    </PhotoContext.Provider>
  );
}
