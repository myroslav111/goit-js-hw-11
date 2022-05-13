import './sass/main.scss';


import hbsCard from './templates/card.hbs'
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchData} from './js/fetch';
import  './js/fetch'
import {refs} from './js/refs'

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import {hideLoader, showLoader, err, success} from './js/reactions'
import {observeOnLastElOfGallery} from './js/infinitScroll'

// captionsData :'alt',
let gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, widthRatio: 0.95, heightRatio: 0.95});
refs.form.addEventListener('submit', onFormSubmit)

// фун. отрисовки DOM
async function getPicture(){
  showLoader()
  setTimeout(async () =>{

    try{
    const promisFromFetch = await fetchData()
    const markup = hbsCard(promisFromFetch.data.hits)
    refs.gallery.insertAdjacentHTML("beforeend", markup);

    gallery.refresh()  
    observeOnLastElOfGallery(refs.gallery.querySelectorAll('.photo-card'))
    
    
    } catch(error){
      switch(error.message === 'Request failed with status code 400'){
        case true:
          err("We're sorry, but you've reached the end of search results.")
          break
        
        case false:
          err('Sorry, there are no images matching your search query. Please try again.')
          break

         default:
           console.log(error);
      }
    } finally {
      hideLoader();
  }
  }, 1000)

}

// фун. при сабмите
function onFormSubmit(event){
    event.preventDefault()
    if(!refs.input.value){
      return
    } 
    
    getPicture()
}

function clearGallery(){
  refs.gallery.innerHTML = ''
}

export {clearGallery}
export {getPicture}

