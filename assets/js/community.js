var username;

(function() {
  function showResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // If there are results...
      var appendString = '';
      for (var i = 0; i < results.length; i++) {  // Iterate over them and generate html
        var item = store[results[i].ref];
        appendString += 'test <a href="' + item.url + '"><h3 class="fs-5 fw-normal mt-1">' + item.title + '</h3></a>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  function getQuery(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        username = decodeURIComponent(pair[1].replace(/\+/g, '%20'));
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQuery('author');
  console.log(searchTerm);

  if (searchTerm) {
    // document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr.js with the fields to search.
    // The title field is given more weight with the "boost" parameter
    var idx = lunr(function () {
      this.field('id');
      this.field('authors', { boost: 10 })
      // this.field('category');
      // this.field('content');

      for (var key in window.store) { // Add the JSON we generated from the site content to Lunr.js.
        this.add({
          'id': key,
          'authors': window.store[key].authors
          // 'category': window.store[key].category,
          // 'content': window.store[key].content
        });
      }
    });

    var results = idx.search(searchTerm); // Perform search with Lunr.js
    console.log(results);
    showResults(results, window.store);
  }
})();


$(document).ready(function() {
      if (username) {
        $.ajax({
          //url: `https://api.github.com/users/${username}`,
          type: 'GET',
          success: function(data) {
              $('#profileDetails').html(`
                          <img src="${data.avatar_url}" alt="${data.login}" class="img-fluid rounded-circle">
                          <h2 class="fs-5 mt-3">${data.name ? data.name : data.login}</h2>
                          <span class="lead my-3">${data.login}</span>
                          <p>${data.bio ? data.bio : '<span class="text-secondary">No bio available</span>'}</p>
                          <a href="https://www.github.com/${data.login}" target="_blank">
                          <button class="btn btn-secondary w-100 mb-3">View profile</button>
                          </a>
                          <p><span class="bi bi-buildings"></span> ${data.company ? data.company : 'No company available'}</p>
                          <p><span class="bi bi-geo-alt"></span> ${data.location ? data.location : 'No location available'}</p>
                          <p><span class="bi bi-link-45deg"></span> <a href="${data.blog}" target="_blank">${data.blog ? data.blog : 'No blog available'}</a></p>

              `);
          },
          error: function() {
              $('#profileDetails').html('<p class="text-danger">User not found. Please enter a valid GitHub username.</p>');
          }
          });
      } else {
          $('#profileDetails').html('<p class="text-warning">Please enter a GitHub username.</p>');
      }
});
