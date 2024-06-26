(function() {
  function showResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // If there are results...
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over them and generate html
        var item = store[results[i].ref];
        appendString += '<div class="col-md-6 p-3 border shadow-sm"><div class="row"><div class="col-3"><img width="150px" height="auto" class="mt-2" alt="'+ item.title +'" src="/icons/'+ item.icon +'"/> </div><div class="col-9"><a href="' + item.url + '"><h3 class="fs-5 fw-normal mt-1">' + item.title + '</h3></a>';
        appendString += '<p>' + item.content.substring(0, 250) + '...</p></div></div></div>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  function getQuery(variable) {
    var query = window.location.hash.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
      return decodeURIComponent(query.replace(/\+/g, '%20').replaceAll("-", '%20'));
    }
  }

  var searchTerm = getQuery('query');
  if (searchTerm) {
    // document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr.js with the fields to search.
    // The title field is given more weight with the "boost" parameter
    var idx = lunr(function () {
      this.field('tags', { boost: 10 });
      this.field('id');
      // this.field('title');
      // this.field('author');
      // this.field('category');
      // this.field('content');

      for (var key in window.store) { // Add the JSON we generated from the site content to Lunr.js.
        this.add({
          'id': key,
          'title': window.store[key].title,
          'author': window.store[key].author,
          'category': window.store[key].category,
          'content': window.store[key].content,
          'tags': window.store[key].tags

        });
      }
    });

    var results = idx.search(searchTerm); // Perform search with Lunr.js
    showResults(results, window.store);
  }
})();