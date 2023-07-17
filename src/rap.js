function YouTubeGetID(url){
   url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
   return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}
function resizeImg(img, height, width) {
    img.height = height;
    img.width = width;
}
export const rap = [
  {
    id: 1,
    name: 'Broken',
    artist: '(L)',
    link: <a href="https://www.youtube.com/watch?v=UjxtjE7soAA" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=UjxtjE7soAA')
+'/sddefault.jpg'
  },
  {
    id: 2,
     name: 'You Werent Meant To See That',
    artist: '(The Rare Occasions)',
    link: <a href="https://www.youtube.com/watch?v=GqOnsEt-va4" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=GqOnsEt-va4')
+'/sddefault.jpg'
  },
 {
    id: 3,
    name: 'SAD!',
    artist: 'XXXTENTACION',
    link: <a href="https://www.youtube.com/watch?v=pgN-vvVVxMA" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=pgN-vvVVxMA')
+'/sddefault.jpg'
  },
  {
    id: 4,
    name: 'Cut My Hair',
    artist: 'Cavetown',
    link: <a href="https://www.youtube.com/watch?v=iuLPgRLR-w0&ab_channel=AuroraVibes" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=iuLPgRLR-w0&ab_channel=AuroraVibes')
+'/sddefault.jpg'
  },
  {
    id: 5,
    name: 'Stupid & Anxious',
    artist: 'Nightcore',
    link: <a href="https://www.youtube.com/watch?v=g97ECr8vNU8" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=g97ECr8vNU8')
+'/sddefault.jpg'
  },
  {
    id: 6,
    name: 'Save Me',
    artist: 'XXXTENTACION',
    link: <a href="https://www.youtube.com/watch?v=-8xdDaRFdwc" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=-8xdDaRFdwc')
+'/sddefault.jpg'
  },
];
