import React from 'react';
import Image from './Image';
import NoImage from './NoImage';

export default function Gallery (props) {
  let results = props.data;
  let images;
  let noImages;
  console.log(results);
  if (results.length > 0) {
    images = results.map (image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`
      return(<Image url={url} key={id} title={title}/>);
    });
  }else{
    return(noImages=<NoImage/>);
  }
  return(
    <div>
        <ul>{images}</ul>
        {noImages}
    </div>
  );
}
