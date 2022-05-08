import './sass/main.scss';
console.log('hallo');

const params = new URLSearchParams({
    _limit: 2,
    // Change the group number here
    _page: 2
  });

fetch(`https://restcountries.com/v3.1/name?${params}`)