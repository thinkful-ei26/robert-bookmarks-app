'use strict';

const api = (function () { 
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/robert';
  
  function getBookmarks (callback) {
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
    callback('api module works!');
  }

  getBookmarks();

  return {
    getBookmarks,
  };


})();