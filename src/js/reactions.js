import {refs} from './refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const hideLoader = () => {
    refs.loader.classList.remove('show');
};

const showLoader = () => {
    refs.loader.classList.add('show');
};

function err(message){
  Notify.failure(message);
};

function success(totalHits){
  Notify.success(`Hooray! We found ${totalHits} images.`);
};

function hideAnimation(){
  refs.svg.classList.add('hide-animation');
  refs.form.classList.add('gradient-border');
};

function visibleAnimation(){
  refs.svg.classList.remove('hide-animation');
  refs.form.classList.remove('gradient-border');
};

export {hideLoader, showLoader, err, success, visibleAnimation, hideAnimation};