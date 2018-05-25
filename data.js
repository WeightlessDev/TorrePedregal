var APP_DATA = {
  "scenes": [
    {
      "id": "0-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.922693339653529,
        "pitch": 0.08069743470433721,
        "fov": 1.5601080270670864
      },
      "linkHotspots": [
        {
          "yaw": 0.788069396602399,
          "pitch": 0.011135935970461475,
          "rotation": 0,
          "target": "1-habitacion-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-habitacion-master",
      "name": "Habitacion Master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8082120152736607,
          "pitch": 0.04406833754653405,
          "rotation": 0,
          "target": "0-cocina"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Torre Pedregal",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
