---
layout: page
title: Submit your free software projects
permalink: /add-software-projects
menu_title: Add
---
<div class="row">
<div class="col-md-8">
<h1 class="post-title fs-4 lead fw-medium mt-0 mb-4">List your free software to list on freeware projects directory</h1>

<p>Add your free software projects to this freeware projects directory. Let everyone find and use your software for their works. This platforms allows only software projects that comes under open-source, freeware, free-tier, freemium. Please do not free-trial or premium-only software projects here. Our aim is to help developers to utilize all available free resources on the internet.</p>

<h2>How to add your free software projects?</h2>
<p>If you are a non-developer and know some usefull free projects, please just <a href="/recommend-software-projects">recommend them here</a>. If you are a developer and have understating of git, please following instructions to add free project resources:</p>

<ul>
<li>Fork the repository <code>selvaklnc/freeware</code> from GitHub.</li>
<li>Add your project details as per the instructions there.</li>
<li>Commit and create pull-request to our main repository <code>selvaklnc/freeware</code></li>
</ul>

<h3>Instructions for adding free software projects</h3>
<p>While adding your resources to this forked repository, please follow instructions as mentioned below:</p>

<ul>
<li>Go to <code>/_projects</code> directory and duplicate any existing resource like <code>sample-free-project.md</code></li>
<li>Rename the filename suitably related to the project.</li>
<li>Make sure that the project does not already exists in the directory.</li>
<li>Fill out all the details without modifying format like spacing, tab spacing, etc.</li>
<li>Read more about data fieldsand how to fill out</li>
</ul>

<h3>Details about data fields</h3>
<ol>
    <li><code>layout: project</code>
    <p>This should be always <code>project</code>. Do not change this field.</p></li>
    
    <li><code>title: </code>
    <p>Write a suitable title in around 60 characters. e.g. <code><em>VS Code IDE code editor</em></code></p></li>

    <li><code>link: </code>
    <p>Exact link to the project site e.g. <code><em>https://code.visualstudio.com</em></code></p></li>

    <li><code>canonical_url: </code> <em> (Optional)</em>
    <p>If you simply copy paste the content from the project site, you should again enter the URL that was already entered above in link field. e.g. <code><em>https://code.visualstudio.com</em></code>. If you write your own unique content, you can just remove this field. </p></li>

     <li><code>icon: </code> <em> (Optional)</em>
    <p>Enter project icon name e.g. <code><em>va-code.jpg</em></code>. Before that you need to place the required icon in the same name inside <code>/icons</code> directory adhering to the following conditions:.</p>
        <ul>
        <li>Check if the icon already exists.</li>
        <li>Incon size should be below 3 KB.</li>
        <li>Recommended format is JPG.</li>
        </ul>
    </li>

<li><code>cat: </code>
    <p>Enter category name e.g. <code><em>Development Tools</em></code></p></li>

<li><code>type: </code>
    <p>Enter type of the project. e.g. <code><em>Open source</em></code>. It may be freeware, open source, freemium and free-tier.</p></li>

<li><code>tags: </code>
    <p>Enter suitable tags.</p></li>

<li><code>authors: </code>
    <p>Enter your GitHub username. If already exists, add it in listed format like tags.</p></li>    

</ol>

</div>
<div class="col-md-4">
<img class="mx-auto d-block" width="200px" height="auto" src="https://img.icons8.com/ios/300/228BE6/open-source.png" alt="Freeware projects includes free-tier, open-source and more"/>
</div>
</div>