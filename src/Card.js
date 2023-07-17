import React, {Component} from 'react';
import './Card.css';

 

function YouTubeGetID(url){
   url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
   return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}

YouTubeGetID('https://www.youtube.com/watch?v=K1PCl5D-IpU&ab_channel=Sovey')

const Card=({name,link,id,image,artist})=> {
	return (
			<div className='tc bg-white dib br3 pa4 ma2 grow bw5 shadow-5'>

				<img src={image} width="250" height="250"/>
				<div>
					<h2>{name}</h2>
					<h4>{artist}</h4>
					<a href={link} >
  <img src='https://e7.pngegg.com/pngimages/163/425/png-clipart-youtube-computer-icons-logo-subscribe-angle-desktop-wallpaper.png' height="50" width="50" />
 </a>
					<h4>{link}</h4>	
				</div>			
			</div>
		)
}
 
export default Card;