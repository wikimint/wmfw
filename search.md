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
<div class="container">
<!-- List where search results will be rendered -->
<div class="row w-100 mt-5" id="search-results"></div>
</div>
  <script>
    // Template to generate the JSON to search
    window.store = {
      {% for post in site.projects %}
        "{{ post.url | slugify }}": {
          "title": "{{ post.title | xml_escape }}",
          "author": "{{ post.author | xml_escape }}",
          "icon": "{{ post.icon | xml_escape }}",
          "category": "{{ post.category | xml_escape }}",
          "content": {{ post.content | strip_html | strip_newlines | jsonify }},
          "url": "{{ post.url | xml_escape }}"
        }
        {% unless forloop.last %},{% endunless %}
      {% endfor %}
    };
  </script>