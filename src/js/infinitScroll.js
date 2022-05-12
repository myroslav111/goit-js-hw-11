import {getPicture} from '../index';

//фун. для инфинити скрола
function observeOnLastElOfGallery(set){
  const optios = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  function handleImg(myImg, observer){
    if(myImg[0].isIntersecting){
      loadImage();
    };
  };

   function loadImage(){
    getPicture() ;
  };

  const observer = new IntersectionObserver(handleImg, optios);
  observer.observe(set[set.length - 1]);
};

export {observeOnLastElOfGallery};