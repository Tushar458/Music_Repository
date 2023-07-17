function YouTubeGetID(url){
   url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
   return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}
function resizeImg(img, height, width) {
    img.height = height;
    img.width = width;
}
export const rock = [
  {
    id: 1,
    name: 'Given Up',
    artist: 'Linkin Park',

    link: <a href="https://www.youtube.com/watch?v=D93vYwuMeUw" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=D93vYwuMeUw')
+'/sddefault.jpg'
  },
  {
    id: 2,
     name: 'Chop Suey',
    artist: 'System of a down',
    link: <a href="https://www.youtube.com/watch?v=CSvFpBOe8eY" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=CSvFpBOe8eY')
+'/sddefault.jpg'
  },
 {
    id: 3,
    name: 'Miss Mary Mack',
    artist: 'The Rare Occasions',
    link: <a href="https://www.youtube.com/watch?v=-nCuaKlFwu8&list=RDGMEMJQXQAmqrnmK1SEjY_rKBGA&index=3" target="_blank">Click to Listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=-nCuaKlFwu8&list=RDGMEMJQXQAmqrnmK1SEjY_rKBGA&index=3')
+'/sddefault.jpg'
  },
];
