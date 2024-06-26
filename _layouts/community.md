---
layout: base
---

<!-- <div class="header-search">
  <form class="header-search-form" action="/search/" method="get">
    <input type="text" id="search-box" name="query">
    <input type="submit" value="search">
  </form>
</div> -->

<!-- List where search results will be rendered -->
<div class="row">
  <div class="col-md-3">
    <div id="profileDetails"></div>
  </div>
<div class="col-md-9">
<div id="search-results"></div>

<h2 class="mt-5 mb-3">All contributors</h2>
  {% assign displayed_authors = "" | split: "" %}

  {%- for post in site.projects -%}
    {% for author in post.authors %}
      {% unless displayed_authors contains author %}
      <a href="/community?author={{ author | replace: " ", "-" | replace: "&", "-" }}">
        <span class="tag small d-inline-flex bg-white border border-secondary rounded-1 py-1 px-3 text-primary me-1 mb-2">
          {{ author }}
        </span>
      </a>
        {% assign displayed_authors = displayed_authors | push: author %}
      {% endunless %}
    {% endfor %}
  {%- endfor -%}

</div>
</div>



  <script>
    // Template to generate the JSON to search
    window.store = {
      {% for post in site.projects %}
        "{{ post.url | slugify }}": {
          "title": "{{ post.title | xml_escape }}",
          "icon": "{{ post.icon | xml_escape }}",
          "authors": "{{ post.authors | xml_escape }}",
          "category": "{{ post.category | xml_escape }}",
          "content": {{ post.content | strip_html | strip_newlines | jsonify }},
          "url": "{{ post.url | xml_escape }}"
        }
        {% unless forloop.last %},{% endunless %}
      {% endfor %}
    };
  </script>
  

  

<article class="post">

  <div class="post-content">
    {{ content }}
  </div>
  
  <!-- Import lunr.js from unpkg.com -->
  <!-- <script src="https://unpkg.com/lunr/lunr.js"></script> -->
  <script src="/assets/js/lunr.js"></script>

  <!-- Custom search script which we will create below -->
  <script src="/assets/js/community.js"></script>
</article>
