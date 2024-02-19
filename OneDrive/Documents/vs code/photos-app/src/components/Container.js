import React,{useContext,useEffect} from 'react';
import { PhotoContext } from '../contextProvider/PhotoContext';
import Loader from './Loader';
import Gallery from './Gallery'; 

export default function Container(props){
    let {photos,loading,runQuery} = useContext(PhotoContext);
    useEffect(()=>{
        runQuery(props.searchTerm);
    },[props.searchTerm]);
    return(
        <div>
            {loading ?<Loader />:<Gallery data={photos}/>}
        </div>
    );
}

