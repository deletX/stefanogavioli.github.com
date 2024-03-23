var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "https://capodannovalsugana.ns0.it/minecraft-map/signpost.png",
            "signMarker": "https://capodannovalsugana.ns0.it/minecraft-map/signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "https://capodannovalsugana.ns0.it/minecraft-map/markers/marker_home.png",
            "spawnMarker2x": "https://capodannovalsugana.ns0.it/minecraft-map/markers/marker_home_2x.png",
            "queryMarker": "https://capodannovalsugana.ns0.it/minecraft-map/markers/marker_location.png",
            "queryMarker2x": "https://capodannovalsugana.ns0.it/minecraft-map/markers/marker_location_2x.png",
            "compass": {
                "0": "https://capodannovalsugana.ns0.it/minecraft-map/compass_upper-left.png",
                "1": "https://capodannovalsugana.ns0.it/minecraft-map/compass_upper-right.png",
                "3": "https://capodannovalsugana.ns0.it/minecraft-map/compass_lower-left.png",
                "2": "https://capodannovalsugana.ns0.it/minecraft-map/compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world - overworld",
        "world - nether"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1604656512",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Daytime",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "https://capodannovalsugana.ns0.it/minecraft-map/day",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world - overworld",
            "last_rendertime": 1604649443,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -208,
                96,
                -176
            ],
            "minZoom": 0,
            "spawn": [
                -208,
                96,
                -176
            ],
            "north_direction": 0
        },
        {
            "name": "Nighttime",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "https://capodannovalsugana.ns0.it/minecraft-map/night",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world - overworld",
            "last_rendertime": 1604649443,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -208,
                96,
                -176
            ],
            "minZoom": 0,
            "spawn": [
                -208,
                96,
                -176
            ],
            "north_direction": 0
        },
        {
            "name": "Nether",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "https://capodannovalsugana.ns0.it/minecraft-map/Nether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world - nether",
            "last_rendertime": 1604584355,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -208,
                96,
                -176
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
