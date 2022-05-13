import axios from 'axios';
import { refs } from './refs';
import {clearGallery} from '../index';
import {success} from './reactions';
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '23788919-1e868a4f1ae72234cc449d190';
const photo = 'photo';
const orientation = 'horizontal';
const safesearch = true;
const per_page = 40;

let page = 1;
let inputUser = '';

async function fetchData(){
  if(inputUser !== refs.input.value){
    clearGallery();
    refs.svg.classList.remove('hide-animation')
    page = 1;
  };
  inputUser = refs.input.value;
  const url = `${BASE_URL}?key=${KEY}&q=${inputUser}&image_type=${photo}&orientation=${orientation}&safesearch=${safesearch}&per_page=${per_page}&page=${page}`;
  const response = await axios.get(url);
  if(page === 1 && response.data.totalHits !== 0){
    success(response.data.totalHits);
  };
  page += 1;

  return response;
};

export {fetchData};

