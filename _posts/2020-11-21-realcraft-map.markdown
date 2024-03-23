---
layout: post

ogtype: article
ogimage: /assets/img/minecraft-map-tb.png


title:  "RealCraft map"
date:   2020-11-21 15:43:00 +0200

last_update: 2020-11-20 00:54:00 +0200
categories: js leaflet minecraft
description: Non-real-time interactive RealCraft map with leaflet
ogdescription: Interactive RealCraft map
excerpt_separator: <!--more-->
---
<script type="text/javascript" src="/assets/realcraft-map/overviewerConfig.js"></script>
<script type="text/javascript" src="https://capodannovalsugana.ns0.it/rlcraft-map/overviewer.js"></script>

<link rel="stylesheet" href="/assets/minecraft-map/leaflet.css" />
<script src="/assets/minecraft-map/leaflet.js"></script>
<link rel="stylesheet" href="/assets/minecraft-map/overviewer.css" type="text/css" />

<small>Last update on {{ page.last_update | date: "%d %B %Y - %H:%M"}}</small>

[Click here](/blog/js/leaflet/minecraft/2020/11/21/realcraft-map.html#map) to jump to the map right away!

This is the same map as in the [previous article](/blog/js/leaflet/minecraft/2020/10/31/minecraft-map.html) with a different server, with RLCraft.
<!--more-->


{% include parallaximage.html image='/assets/img/minecraft-map.webp'%} 
The map was made with the same process, this time though as different mod assets are not included with the standard minecraft assets it is possible to 
see how the mod ones are missing. Yet you are able to see the outlines and the bigger picture.
 
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

<br>
### Data Table

Data table with size of world.zip # of tiles<sup>1</sup> and map weight

| Date  | world.zip | # of tiles<sup>1</sup> | map weight |
| ------------- | ------------- | ------------- | ------------- |
| 20/11/2020  | 129 MB  | 41 439  | 2.07 GB |

<sup>1</sup>: The number of tiles includes some extra files whose count is constant: 61. Thus the exact number of tiles is the one given minus 61. 
Also it contains all the day, night and Nether (if exists) files.