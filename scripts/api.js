'use strict';

const api = (function () { 

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/robert';
  
  function getBookmarks (callback) {
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
  }

  //incomplete:  come back after we set up bookmarks.js
  function createBookmark (name, callback, onError) {
    const newBookmark = JSON.stringify( {
      name,
    //   title: title,
    //   newUrl: newUrl,
    });
    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'POST',
      contentType: 'application/json',
      data: newBookmark,
      success: callback,
      error: onError,
    });
  }

  function deleteBookmark (id, callback) {

    $.ajax({
      url: `${BASE_URL}/bookmarks/${id}`,
      method: 'DELETE',
      success: callback,
    });
  }


  return {
    BASE_URL,
    getBookmarks,
    createBookmark,
    deleteBookmark,
  };


})();