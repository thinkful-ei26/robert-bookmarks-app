'use strict';

$(document).ready(function(){
  
  bookmarksPage.bindingEventListeners();
 
  api.getBookmarks(function(bookmarks) {
    bookmarks.forEach(bookmark => {
      bookmark.expandedView = false;
      bookmark.hideFiltered = false;
      store.addBookmark(bookmark);
    });
    bookmarksPage.render();
  });

}());