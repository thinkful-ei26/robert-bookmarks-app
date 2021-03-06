'use strict';

const store = (function() {

  const bookmarks = [
    {id: cuid(), title: 'Google', url: 'https://www.google.com/', desc: 'World\'s greatest search engine', rating: 4, expandedView: false, hideFiltered: false,},
    {id: cuid(), title: 'ESPN', url: 'http://www.espn.com/', desc: 'The number one provided of sports information', rating: 5, expandedView: false, hideFiltered: false,},
    {id: cuid(), title: 'Yahoo Sports', url: 'https://sports.yahoo.com/', desc: 'The number 2 providor of online sports coverage', rating: 4, expandedView: false, hideFiltered: false,}
  ];

  const error = null;

  let addingBookmark = false;
  
  //This function will be called when we need to add a new bookmark to the bookmarks array and so 
  //it can be rendered to the page
  function addBookmark (bookmark) {
    this.bookmarks.push(bookmark);
  }

  //This function will be called when the 'remove button' is selected in the expanded view of a bookmark
  function findAndDelete (id) {
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id);
  }
  
  //This function is going to be used in order to identify the id that matches the bookmarks specific id
  function findById (id) {
    return this.bookmarks.find(bookmark => bookmark.id === id);
  }

  //This function toggles to an expanded view of the targeted bookmark when the title is 'clicked'
  function toggleExpandedView (id) {
    const foundBookmark = this.findById(id);
    foundBookmark.expandedView = !foundBookmark.expandedView;
  }

  function toggleHideFiltered (rating) {
    let foundBookmark = this.bookmarks = this.bookmarks.filter(bookmarks => bookmarks.rating >= rating);
    // console.log(foundBookmark);
    // console.log(store.bookmarks);
    foundBookmark.hideFiltered = !foundBookmark.hideFiltered;
  }

  //This dictates the view on the screen and if it will include an extra form that will allow for an 
  //Add bookmark feature.
  function toggleAddingBookmark () {
    this.addingBookmark = !this.addingBookmark;
    //when I call this function I can create an if state for what happens if the person clicks 'Save' or 
    //'Cancel' button.
  }
  
  //Extra credit if I add in an edit feature.  It will use the function below
  // const findAndEdit = function() {
  // }


  return {
    bookmarks,
    error,
    addingBookmark,
    addBookmark,
    findAndDelete,
    findById,
    toggleExpandedView,
    toggleHideFiltered,
    toggleAddingBookmark,


    //findAndEdit,
  };

}());