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

export {hideLoader, showLoader, err, success};