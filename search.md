---
layout: search
title: Search
permalink: /search
noindex: true
---

<div class="header-search">
  <form class="header-search-form" action="/search/" method="get">
    <input type="text" id="search-box" name="query">
    <input type="submit" value="search">
  </form>
</div>

<!-- List where search results will be rendered -->
<ul id="search-results"></ul>

<script>
  // Template to generate the JSON to search
  window.store = {
    {% for post in site.projects %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "author": "{{ post.author | xml_escape }}",
        "category": "{{ post.category | xml_escape }}",
        "content": {{ post.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ post.url | xml_escape }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>

<!-- Import lunr.js from unpkg.com -->
<script src="https://unpkg.com/lunr/lunr.js"></script>
<!-- Custom search script which we will create below -->
<script src="/assets/js/search.js"></script>