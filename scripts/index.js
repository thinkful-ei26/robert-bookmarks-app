'use strict';

$(document).ready(function(){
  bookmarksPage.bindingEventListeners();
 
  api.getBookmarks(function(bookmark) {
    store.addBookmark(bookmarks); 
  });

  bookmarksPage.render();

}());