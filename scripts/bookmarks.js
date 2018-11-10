'use strict';

const bookmarksPage = (function() {

  function generateAddingBookmarkElement () {
    let bookmarkForm = '';
    if (store.addingBookmark === true) {
      bookmarkForm = `    
      <form class="new-item">
        <label for="title">Title</label> 
        <input type="text" name="title" class="title-entry" placeholder="Website Name"><br>
        <label for="url">URL</label> 
        <input type="text" name="url" class="url-entry" placeholder="www.website.com"><br>
        <label for="description">Description</label>
        <input type="text" name="desc" class="description-entry" placeholder="Describe Website"><br>
        <label for="rating">Rating</label><br>
        <select class="js-select-rating-entry" name="rating">
          <option selected disabled>Choose a Rating</option>
          <option value="1">One Stars</option>
          <option value="2">Two Stars</option>
          <option value="3">Three Stars</option>
          <option value="4">Four Stars</option>
          <option value="5">Five Stars</option>
        </select>
        <button type="submit" class="new-bookmark">Submit</button>
        <!-- <input type="button" class="cancel-bookmark" value="Cancel"> --!>
      </form>
      `;
    }

    return `${bookmarkForm}`;
    
  }

  
  
  function addBookmarkToBookmarksPage(bookmarkTitle, urlLink, description, ratingNumber) {
    store.bookmarks.push({id: cuid(), title: bookmarkTitle, url: urlLink, desc: description, rating: ratingNumber, expandedView: false,});
  }
  
  function handleNewBookmarkSubmit() {
    $('.main-container').on('click', '.new-bookmark', function (event) {
      event.preventDefault();
      console.log('the submit button is working');
      const bookmarkTitle = $('.title-entry').val();
      const urlLink = $('.url-entry').val();
      const description = $('.description-entry').val();
      const ratingNumber = $('.js-select-rating-entry').val();
      if(bookmarkTitle === '') {
        throw new Error(alert('ERROR: You must enter a Title'));
      };
      if (urlLink === '') {
        throw new Error(alert('ERROR: you must enter a url'));
      }
      $('.title-entry').val('');
      $('.url-entry').val('');
      $('.description-entry').val('');
      $('.js-select-rating-entry').val('');
      addBookmarkToBookmarksPage(bookmarkTitle, urlLink, description, ratingNumber);
      $('.adding-bookmark-form').html('');
      render();
    });
  }
  
  
  //some event handlers that I need to create are below.  
  //I need to review my wireframe and the requirements and make sure that I'm adding all functionality
  
  function handleToggleRatingFilter () {
    $('.filter-by-rating').on('click', '.js-filter-toggle', function(event) {
      event.preventDefault();
      console.log('filter button works');
      const filterRating = $('.js-filter-by-rating').val();
      console.log(filterRating);
      store.toggleHideFiltered(filterRating);
      render();
      
      //I need to hide the items that do not match the filtered star rating that was selected
      //I may need to add another property to the bookmarks objects, filteredOut: false, and change it if this happens
      
      
    });
  }
  
  function getBookmarkIdFromElement(bookmark) {
    console.log(bookmark);
    return $(bookmark).closest('.js-bookmark-element').data('bookmark-id');
  }
  
  //THIS IS A COMPLETED AND WORKING FUNCTION!!!
  function handleToggleExpandedView() {
    $('.bookmarks-list').on('click', '.detailed-view-bookmarks', function(){
      const id = getBookmarkIdFromElement(event.target);
      store.toggleExpandedView(id);
      render();
    }); 
  }
  
  //THIS ADD CLICK FUNCTION IS FINISHED AND WORKING
  function handleAddBookmarkClick () {
    $('#add-bookmark').click(function(event){
      store.toggleAddingBookmark(store.addingBookmark);
      render();
      // event.preventDefault();
      // const addingBookmarkString = generateAddingBookmarkElement(store.addingBookmark);
      // $('.adding-bookmark-form').html(addingBookmarkString);
      
      //I need to create a function that toggles addingBookmark to true
      //I also need to create an if statement in the generateBookmarkElemenet function that will... 
      //add a new form to HTML if addingBookmark is true that allows someone to enter their new information
    });
    
  }
  
  //THIS IS A COMPLETED AND WORKING FUNCTION!!!
  function handleRemoveBookmarkClicked () {
    $('.bookmarks-list').on('click', '.remove-bookmark-toggle', function() {
      console.log('this is the remove button');
      const id = getBookmarkIdFromElement(event.target);
      store.findAndDelete(id);
      render();
    });
  }
  
  const generateBookmarkElement = function(bookmark) {
    let bookmarkDetails = '';
    if (bookmark.expandedView === true) {
      bookmarkDetails =     `
      <div class="bookmark-details">
        <p class="bookmark-descrption-${bookmark.expandedView}">${bookmark.desc}</p>
        <div class="bookmark-controls">
          <button class="remove-bookmark-toggle js-bookmark-toggle">
          <span class="button-label">Remove</span>
          </button>
          <button class="link-bookmark-url" onclick="window.location.href='${bookmark.url}'">
          <span class="button-label">Visit</span>
          </button>
        </div>
      </div>`;
    }

    return `
  <li class="js-bookmark-element" data-bookmark-id="${bookmark.id}">
    <h2 class="bookmark-title">${bookmark.title}</h2>
    <button class="detailed-view-bookmarks" type="button">Details</button>
    <span class="bookmark-rating">${bookmark.rating} Stars</span>
    ${bookmarkDetails}
  </li>`;
  };

  function generateBookmarkElementString (bookmarksPage) {
    const bookmarks = bookmarksPage.map((bookmark) => generateBookmarkElement(bookmark));
    return bookmarks.join('');
  }

  function render () {
    let bookmarks = [ ...store.bookmarks ];
    // console.log('render worked');
    const bookmarksString = generateBookmarkElementString(bookmarks);
    $('.js-bookmarks-list').html(bookmarksString);
  }
  
  function bindingEventListeners() {
    handleAddBookmarkClick();
    handleRemoveBookmarkClicked();
    handleToggleRatingFilter();
    handleToggleExpandedView();
    handleNewBookmarkSubmit();
  }
  
  return {
    bindingEventListeners,
    render,
  };
  
}());