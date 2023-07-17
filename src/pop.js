function YouTubeGetID(url){
   url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
   return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}
function resizeImg(img, height, width) {
    img.height = height;
    img.width = width;
}
export const pop = [
  {
    id: 1,
    name: 'Experience',
    artist: 'Ludovico Einaudi',

    link: <a href="https://www.youtube.com/watch?v=1e9B31FLT-s" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=1e9B31FLT-s')
+'/sddefault.jpg'
  },
 {
    id: 2,
    name: 'Interstellar',
    artist: 'Hanz Zimmer',

    link: <a href="https://www.youtube.com/watch?v=1ki7oATXdXc&ab_channel=GeekMusic-Topic" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=1ki7oATXdXc')
+'/sddefault.jpg'
  },
 {
    id: 3,
    name: 'Solitude',
    artist: 'Felsmann+Telly',

    link: <a href="https://www.youtube.com/watch?v=_p2NvO6KrBs" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=_p2NvO6KrBs')
+'/sddefault.jpg'
  },
  {
    id: 4,
    name: 'Shootout',
    artist: 'Izzamusic',

    link: <a href="https://www.youtube.com/watch?v=htXY770KDdk&ab_channel=EUPHXRIA" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=rCHzZflWHZs')
+'/sddefault.jpg'
  },
  {
    id: 5,
    name: 'My Love',
    artist: 'Still',

    link: <a href="https://www.youtube.com/watch?v=ToZkxyvrLf4&ab_channel=leaxes" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=ToZkxyvrLf4&ab_channel=leaxes')
+'/sddefault.jpg'
  },
];
