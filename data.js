var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala",
      "name": "Sala",
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
        "yaw": -2.9768627668451764,
        "pitch": 0.11760735813545864,
        "fov": 1.558275891198931
      },
      "linkHotspots": [
        {
          "yaw": 3.0902473429707173,
          "pitch": -0.006155227839803601,
          "rotation": 0,
          "target": "1-cocina"
        },
        {
          "yaw": 1.9481316346241249,
          "pitch": 0.053157732387919765,
          "rotation": 0,
          "target": "2-habitacion-master"
        },
        {
          "yaw": 0.17544810443049386,
          "pitch": 0.09616768492749372,
          "rotation": 0,
          "target": "3-habitacion-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cocina",
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
        "yaw": 2.90697763624806,
        "pitch": 0.08596182694917687,
        "fov": 1.5601080270670864
      },
      "linkHotspots": [
        {
          "yaw": 0.7725559231645391,
          "pitch": 0.03325005314166063,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-habitacion-master",
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
          "yaw": -2.7776409447237107,
          "pitch": 0.08407354662853272,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-habitacion-2",
      "name": "Habitacion 2",
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
          "yaw": 2.5488283901652427,
          "pitch": 0.06399877668946807,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Vistas Del Pedregal",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
