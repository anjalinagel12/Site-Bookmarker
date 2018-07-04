//form-submit
//new js

document.getElementById('myForm').addEventListener('submit',saveBookmark);

//save bookmark 
function saveBookmark(e)
{
    var siteName = document.getElementById('sitename').value ;
    var siteUrl = document.getElementById('siteURL').value;
    
    var bookmark = {
        name: siteName,
        url: siteUrl
    }
  /*  localStorage.setItem('test','Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test'); 
    console.log(localStorage.getItem('test'));*/

    //test if bookmark is null
    if(localStorage.getItem('bookmarks') == null)
    {
        //init array
        var bookmarks =  [ ];
        //add to array
        bookmarks.push(bookmark);
        //set to local storage 
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
   /* else
    {
        var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }*/
    //get form values 
     e.preventDefault();
       
}

function fetchBookmarks()
{
     var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
     //console.log(bookmarks);
     var bookmarksResukt= document.getElementById('bookmarksResults');
     bookmarksResults.innerHTML="HELLO";
}