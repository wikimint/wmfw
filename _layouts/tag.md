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
<div class="row" id="search-results"></div>

  <script>
    // Template to generate the JSON to search
    window.store = {
      {% for post in site.projects %}
        "{{ post.url | slugify }}": {
          "title": "{{ post.title | xml_escape }}",
          "icon": "{{ post.icon | xml_escape }}",
          "author": "{{ post.author | xml_escape }}",
          "tags": "{{ post.tags | xml_escape }}",
"category": "{{ post.category | xml_escape }}",
          "content": {{ post.content | strip_html | strip_newlines | jsonify }},
          "url": "{{ post.url | xml_escape }}"
        }
        {% unless forloop.last %},{% endunless %}
      {% endfor %}
    };
  </script>
  
<h2 class="mt-5 mb-3">All tags under freeware projects</h2>
  {% assign displayed_tags = "" | split: "" %}

  {%- for post in site.projects -%}
    {% for tag in post.tags %}
      {% unless displayed_tags contains tag %}
      <a href="/tag#{{ tag | replace: " ", "-" | replace: "&", "-" }}">
        <span class="tag small d-inline-flex bg-white border border-secondary rounded-1 py-1 px-3 text-primary me-1 mb-2" data-{{ tag }}="tag">
          {{ tag }}
        </span>
      </a>
        {% assign displayed_tags = displayed_tags | push: tag %}
      {% endunless %}
    {% endfor %}
  {%- endfor -%}
  

<article class="post">

  <div class="post-content">
    {{ content }}
  </div>
  
  <!-- Import lunr.js from unpkg.com -->
  <!-- <script src="https://unpkg.com/lunr/lunr.js"></script> -->
  <script src="/assets/js/lunr.js"></script>

  <!-- Custom search script which we will create below -->
  <script src="/assets/js/tag.js"></script>
</article>
