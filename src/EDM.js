function YouTubeGetID(url){
   url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
   return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}
function resizeImg(img, height, width) {
    img.height = height;
    img.width = width;
}
export const EDM = [
  {
    id: 1,
    name: 'Bangarang',
    artist: 'Skrillex',

    link: <a href="https://www.youtube.com/watch?v=cR2XilcGYOo" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=cR2XilcGYOo')
+'/sddefault.jpg'
  },
  {
    id: 2,
     name: 'Puzzle Box',
    artist: 'Subtronics',
    link: <a href="https://www.youtube.com/watch?v=QNFlk2B1ig8" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=QNFlk2B1ig8')
+'/sddefault.jpg'
  },
 {
    id: 3,
    name: 'Tokyo Heat',
    artist: 'C.H.A.Y',
    link: <a href="https://www.youtube.com/watch?v=edeh2SQK9xU" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=edeh2SQK9xU')
+'/sddefault.jpg'
  },
];
