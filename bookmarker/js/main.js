//form-submit
//new js

document.getElementById('myForm').addEventListener('submit',saveBookmark);




function deleteBookmark(url)
{
    var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));
    for(var i=0;i<bookmarks.length;i++)
    {
        if(bookmarks[i].url==url)
        {
            bookmarks.splice(i,1); 
        }
    }
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    fetchBookmarks();
  
     
}

(function fetchBookmarks()
{
     var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
     //console.log(bookmarks);
     var bookmarksResults= document.getElementById('bookmarksResults');
     bookmarksResults.innerHTML =  '';
     for(var i=0;i<bookmarks.length;i++)
     {
         var name = bookmarks[i].name;
         var url = bookmarks[i].url;
         bookmarksResults.innerHTML += '<div class="well">'+
                                        '<h3>'+name+
                                        '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> '+
                                        '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger"  href="#">Delete</a> '+

                                        '</h3>'+
                                        '</div>' ;
          
     }
})();

//save bookmark 
function saveBookmark(e)
{
    var siteName = document.getElementById("sitename").value ;
    var siteUrl = document.getElementById("siteURL").value;
    
    if(!siteName || !siteUrl){
        alert("please do fill the form");
        //return False; 
        return True; 
    }

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
    else
    {
        var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
    fetchBookmarks();
    //get form values 
     e.preventDefault();
       
}

