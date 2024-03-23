---
layout: post

ogtype: article
ogimage: /assets/img/minecraft-map-tb.png


title:  "Minecraft map"
date:   2020-10-31 14:32:00 +0200

last_update: 2020-11-12 14:32:00 +0200
categories: js leaflet minecraft
description: Non-real-time interactive Minecraft map with leaflet
ogdescription: Interactive Minecraft map
excerpt_separator: <!--more-->
---
<script type="text/javascript" src="/assets/minecraft-map/overviewerConfig.js"></script>
<script type="text/javascript" src="https://capodannovalsugana.ns0.it/minecraft-map/overviewer.js"></script>

<link rel="stylesheet" href="/assets/minecraft-map/leaflet.css" />
<script src="/assets/minecraft-map/leaflet.js"></script>
<link rel="stylesheet" href="/assets/minecraft-map/overviewer.css" type="text/css" />

<small>Last update on {{ page.last_update | date: "%d %B %Y - %H:%M"}}</small>

[Click here](/blog/js/leaflet/minecraft/2020/10/31/minecraft-map.html#map) to jump to the map right away!


The map was created with [overviewer](https://overviewer.org/) which creates all the png tiles and creates a ready-to-use map with [leaflet](https://leafletjs.com/). The resulting **60k** files, totaling a size of more than **2 GB** have been hosted locally since GitHub Pages (on which this website is hosted) does not support either too many files and too heavy repos.

These files are hosted on a local machine with an [nginx](https://www.nginx.com/) server. Easy and simple. This server will **definitely <u>NOT</u>** be online all the time. This means the following map won't be available 24/7. I've put an image so you can see what it looks like.
<!--more-->
{% include parallaximage.html image='/assets/img/minecraft-map.webp'%} 

The leg work was to adapt the css in order to adapt the given one with the library I use here ([materializecss](https://materializecss.com/)). To reduce size I've also tried .webp images but they don't work as well as .png and do not save enough space to be worth. 

<a id="map"></a>

Here's the map:

<div class="mapbody" style="margin-bottom: 2rem">
    <noscript style="color:white; background-color:black">
        If you can see this message, there is likely a problem loading the Overviewer JavaScript components.
        Check the JavaScript console for error messages.
    </noscript>
    <div id="mcmap"></div>
    
    <script>
    $(document).ready(function() {
        overviewer.util.initialize()
        });
    </script>
</div>


This is map was made from a world taken from a private server. This is not a real-time map and therefore you cannot see nor people around nor changes as they occur.
To update the map it has to be _"recompiled"_ to generate all the update image files. This procedures requires about 20mins with my machine (with a Ryzen5 1600) for a relative small world such as this. The more it grows the more it will need.

If you have an online server you can schedule a periodic task to execute overviewer in order to update the map periodically.

<br>
### Data Table

Here is the table as soon as I starded logging the size

| Date  | world.zip | # of tiles | map weight |
| ------------- | ------------- | ------------- | ------------- |
| 27/10/2020  | 263 MB  | 60 000 +  | 2 GB +  |
| 12/11/2020  | 1.2 GB  | 297 085  | 14.28 GB  |