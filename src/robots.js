function YouTubeGetID(url){
   url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
   return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}
function resizeImg(img, height, width) {
    img.height = height;
    img.width = width;
}
export const robots = [
  {
    id: 1,
    name: 'Black-Catcher Venta Black',
    artist: '(Black Clover)',

    link: <a href="https://www.youtube.com/watch?v=HIRiduzNLzQ&list=RD0YF8vecQWYs&index=5&ab_channel=%E7%BE%8E%E6%B3%A2" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=hP6VM6YAMIE&list=RD0YF8vecQWYs&index=15&ab_channel=VickeBlanka')
+'/sddefault.jpg'
  },
  {
    id: 2,
    name: 'Wind',
    artist: '(Naruto)',
    link: <a href="https://www.youtube.com/watch?v=WqGOaOHu5uY&ab_channel=Akeboshi-Topic" target="_blank">Click to listen </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=WqGOaOHu5uY&ab_channel=Akeboshi-Topic')
+'/sddefault.jpg'
  },
 {
    id: 3,
    name: 'Crying for Rain',
    artist: '(Miami)',
    link: <a href="https://www.youtube.com/watch?v=0YF8vecQWYs" target="_blank">Click to listen </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=0YF8vecQWYs')
+'/sddefault.jpg'
  },
 {
    id: 4,
    name: 'Unravel',
    artist: '(Tokyo Ghoul)',
    link: <a href="https://www.youtube.com/watch?v=7aMOurgDB-o&ab_channel=CrunchyrollDubs" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=7aMOurgDB-o&ab_channel=CrunchyrollDubs')
+'/sddefault.jpg'
  },
  {
    id: 5,
    name: 'Rumbling',
    artist: '(Attack on Tian)',
    link: <a href="https://www.youtube.com/watch?v=OBqw818mQ1E&ab_channel=SiMOfficialYouTubeChannel" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=OBqw818mQ1E&ab_channel=SiMOfficialYouTubeChannel')
+'/sddefault.jpg'
  },
  {
    id: 6,
    name: 'Blue Bird',
    artist: '(Naruto)',
    link: <a href="https://www.youtube.com/watch?v=oJwMiU3RJmA&ab_channel=SensenWorld" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=oJwMiU3RJmA&ab_channel=SensenWorld')
+'/sddefault.jpg'
  },
  
  {
    id: 6,
    name: 'Gurenge',
    artist: '(Demon Slayer)',
    link: <a href="https://www.youtube.com/watch?v=1H6lPlQ7jr8" target="_blank">Click to listen  </a>,
    image: 'https://img.youtube.com/vi/'+YouTubeGetID('https://www.youtube.com/watch?v=1H6lPlQ7jr8')
+'/sddefault.jpg'
  },
 
  // {
  //   id: 7,
  //   name: 'Kurtis Weissnat',
  //   username: 'Elwyn.Skiles',
  //   email: 'Telly.Hoeger@billy.biz'
  // },
  // {
  //   id: 8,
  //   name: 'Nicholas Runolfsdottir V',
  //   username: 'Maxime_Nienow',
  //   email: 'Sherwood@rosamond.me'
  // },
  // {
  //   id: 9,
  //   name: 'Glenna Reichert',
  //   username: 'Delphine',
  //   email: 'Chaim_McDermott@dana.io'
  // },
  // {
  //   id: 10,
  //   name: 'Clementina DuBuque',
  //   username: 'Moriah.Stanton',
  //   email: 'Rey.Padberg@karina.biz'
  // }
];
