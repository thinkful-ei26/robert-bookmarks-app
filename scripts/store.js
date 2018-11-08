'use strict';

const store = (function() {

  //This function will be called when we need to add a new bookmark to the bookmarks array and so 
  //it can be rendered to the page
  const addBookmark = function(bookmark) {
    this.bookmarks.push(item);
  };

  //This function is going to be used in order to identify the id that matches the bookmarks specific id
  const findById = function() {
    return this.bookmarks.find(item => item.id === id);
  };
  
  //This function will be called when the 'remove button' is selected in the expanded view of a bookmark
  const findAndDelete = function() {
      this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id);
  }

  //This function toggles to an expanded view of the targeted bookmark when the title is 'clicked'
  const toggleExpandedView = function () {
    this.expandedView = !this.expandedView;
  }

  //This dictates the view on the screen and if it will include an extra form that will allow for an 
  //Add bookmark feature.
  const toggleAddingBookmark = function () {
    this.addingBookmark = !this.addingBookmark;
    //when I call this function I can create an if state for what happens if the person clicks 'Save' or 
    //'Cancel' button.
  }
  
  //This function will be used in order to toggle the bookmarks that should not be on the page anymore 
  //because the dont match the filter
  const toggleRatingFilter = function () {
    this.ratingFilter = !this.ratingFilter;
  }
  
  //This function will be used to prompt an error message if there are any required fields missing when attempting
  //to add a new bookmark
  const toggleErrorMessage = function () {
    this.errorMessage = !this.errorMessage;
  }
  
  //Extra credit if I add in an edit feature.  It will use the function below
  // const findAndEdit = function() {
  // }

  return {
    bookmarks: [],
    expandedView: false,
    addingBookmark: false,
    ratingFilter: false,
    errorMessage: false,
    addBookmark,
    findById,
    toggleExpandedView,
    toggleAddingBookmark,
    toggleRatingFilter,
    findAndDelete,
    toggleErrorMessage,

    //findAndEdit,
  };

}());