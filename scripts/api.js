'use strict';
const api = (function () { 

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/robert';
  function getBookmarks (callback, onError) {
    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'GET',
      contentType: 'application/json',
      success: callback,
      error: onError,
    });
  }

  function createBookmark (newBookmark, callback, onError) {
    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'POST',
      contentType: 'application/json',
      data: newBookmark,
      success: callback,
      error: onError,
    });
  }

  function deleteBookmark (id, callback, onError) {
    $.ajax({
      url: `${BASE_URL}/bookmarks/${id}`,
      method: 'DELETE',
      success: callback,
      error: onError,
    });
  }


  return {
    BASE_URL,
    getBookmarks,
    createBookmark,
    deleteBookmark,
  };


})();