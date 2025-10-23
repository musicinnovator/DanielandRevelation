import React from 'react';
import * as BABYLON from 'babylonjs';
import BabylonScene from '../BabylonScene';

const NewJerusalem: React.FC = () => {
  const onSceneReady = (scene: BABYLON.Scene) => {
    // Create camera
    const camera = new BABYLON.ArcRotateCamera(
      'camera',
      -Math.PI / 2,
      Math.PI / 2.5,
      30,
      BABYLON.Vector3.Zero(),
      scene
    );
    camera.attachControl(scene.getEngine().getRenderingCanvas(), true);

    // Create lights
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.4;

    // The city is foursquare (Revelation 21:16)
    const citySize = 12; // Represents 12,000 furlongs
    
    // Create the main city structure
    const cityBase = BABYLON.MeshBuilder.CreateBox('cityBase', { 
      width: citySize, 
      height: citySize, 
      depth: citySize 
    }, scene);
    cityBase.position = new BABYLON.Vector3(0, 8, 0);
    
    // City material - pure gold like clear glass (Rev 21:18)
    const cityMaterial = new BABYLON.StandardMaterial('cityMaterial', scene);
    cityMaterial.diffuseColor = new BABYLON.Color3(1, 0.9, 0.3);
    cityMaterial.specularColor = new BABYLON.Color3(1, 1, 0.8);
    cityMaterial.emissiveColor = new BABYLON.Color3(0.3, 0.27, 0.09);
    cityMaterial.alpha = 0.8;
    cityBase.material = cityMaterial;

    // Twelve foundations with precious stones (Rev 21:19-20)
    const foundationStones = [
      { name: 'Jasper', color: new BABYLON.Color3(0.5, 0.8, 0.5) },
      { name: 'Sapphire', color: new BABYLON.Color3(0.2, 0.4, 0.8) },
      { name: 'Chalcedony', color: new BABYLON.Color3(0.7, 0.8, 0.9) },
      { name: 'Emerald', color: new BABYLON.Color3(0.2, 0.8, 0.2) },
      { name: 'Sardonyx', color: new BABYLON.Color3(0.8, 0.4, 0.2) },
      { name: 'Sardius', color: new BABYLON.Color3(0.8, 0.2, 0.2) },
      { name: 'Chrysolyte', color: new BABYLON.Color3(0.9, 0.9, 0.3) },
      { name: 'Beryl', color: new BABYLON.Color3(0.4, 0.8, 0.8) },
      { name: 'Topaz', color: new BABYLON.Color3(0.9, 0.7, 0.3) },
      { name: 'Chrysoprasus', color: new BABYLON.Color3(0.5, 0.9, 0.4) },
      { name: 'Jacinth', color: new BABYLON.Color3(0.8, 0.5, 0.3) },
      { name: 'Amethyst', color: new BABYLON.Color3(0.6, 0.3, 0.8) }
    ];

    foundationStones.forEach((stone, index) => {
      const foundation = BABYLON.MeshBuilder.CreateBox(`foundation${index}`, { 
        width: citySize + 0.5, 
        height: 0.8, 
        depth: citySize + 0.5 
      }, scene);
      foundation.position = new BABYLON.Vector3(0, 1.5 + index * 0.8, 0);
      
      const foundationMaterial = new BABYLON.StandardMaterial(`foundationMaterial${index}`, scene);
      foundationMaterial.diffuseColor = stone.color;
      foundationMaterial.specularColor = new BABYLON.Color3(1, 1, 1);
      foundationMaterial.emissiveColor = stone.color.scale(0.3);
      foundation.material = foundationMaterial;
    });

    // Twelve gates - three on each side (Rev 21:12-13)
    const gatePositions = [
      // East gates
      { pos: new BABYLON.Vector3(citySize/2, 8, -citySize/3), side: 'East' },
      { pos: new BABYLON.Vector3(citySize/2, 8, 0), side: 'East' },
      { pos: new BABYLON.Vector3(citySize/2, 8, citySize/3), side: 'East' },
      // North gates
      { pos: new BABYLON.Vector3(-citySize/3, 8, -citySize/2), side: 'North' },
      { pos: new BABYLON.Vector3(0, 8, -citySize/2), side: 'North' },
      { pos: new BABYLON.Vector3(citySize/3, 8, -citySize/2), side: 'North' },
      // West gates
      { pos: new BABYLON.Vector3(-citySize/2, 8, -citySize/3), side: 'West' },
      { pos: new BABYLON.Vector3(-citySize/2, 8, 0), side: 'West' },
      { pos: new BABYLON.Vector3(-citySize/2, 8, citySize/3), side: 'West' },
      // South gates
      { pos: new BABYLON.Vector3(-citySize/3, 8, citySize/2), side: 'South' },
      { pos: new BABYLON.Vector3(0, 8, citySize/2), side: 'South' },
      { pos: new BABYLON.Vector3(citySize/3, 8, citySize/2), side: 'South' }
    ];

    const tribeNames = [
      'Judah', 'Reuben', 'Gad', 'Asher', 'Naphtali', 'Manasseh',
      'Simeon', 'Levi', 'Issachar', 'Zebulun', 'Joseph', 'Benjamin'
    ];

    gatePositions.forEach((gateData, index) => {
      // Each gate is one pearl (Rev 21:21)
      const gate = BABYLON.MeshBuilder.CreateSphere(`gate${index}`, { diameter: 2 }, scene);
      gate.position = gateData.pos;
      
      const pearlMaterial = new BABYLON.StandardMaterial(`pearlMaterial${index}`, scene);
      pearlMaterial.diffuseColor = new BABYLON.Color3(0.95, 0.95, 1);
      pearlMaterial.specularColor = new BABYLON.Color3(1, 1, 1);
      pearlMaterial.emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.45);
      gate.material = pearlMaterial;

      // Angel at each gate
      const angel = BABYLON.MeshBuilder.CreateCylinder(`angel${index}`, { 
        height: 3, 
        diameter: 0.8 
      }, scene);
      angel.position = new BABYLON.Vector3(
        gateData.pos.x + (gateData.side === 'East' ? 1.5 : gateData.side === 'West' ? -1.5 : 0),
        gateData.pos.y + 2,
        gateData.pos.z + (gateData.side === 'North' ? -1.5 : gateData.side === 'South' ? 1.5 : 0)
      );
      
      const angelMaterial = new BABYLON.StandardMaterial(`angelMaterial${index}`, scene);
      angelMaterial.diffuseColor = new BABYLON.Color3(1, 1, 0.9);
      angelMaterial.emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.27);
      angel.material = angelMaterial;
    });

    // Street of pure gold (Rev 21:21)
    const street = BABYLON.MeshBuilder.CreateBox('street', { 
      width: citySize - 2, 
      height: 0.2, 
      depth: citySize - 2 
    }, scene);
    street.position = new BABYLON.Vector3(0, 14.2, 0);
    
    const streetMaterial = new BABYLON.StandardMaterial('streetMaterial', scene);
    streetMaterial.diffuseColor = new BABYLON.Color3(1, 0.84, 0);
    streetMaterial.specularColor = new BABYLON.Color3(1, 1, 0.5);
    streetMaterial.emissiveColor = new BABYLON.Color3(0.4, 0.34, 0);
    street.material = streetMaterial;

    // Temple - but there is no temple (Rev 21:22)
    // Instead, show the presence of God and the Lamb
    const godPresence = BABYLON.MeshBuilder.CreateSphere('godPresence', { diameter: 4 }, scene);
    godPresence.position = new BABYLON.Vector3(0, 16, 0);
    
    const presenceMaterial = new BABYLON.StandardMaterial('presenceMaterial', scene);
    presenceMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
    presenceMaterial.emissiveColor = new BABYLON.Color3(0.8, 0.8, 0.9);
    presenceMaterial.alpha = 0.7;
    godPresence.material = presenceMaterial;

    // River of life (Rev 22:1)
    const riverPath = [];
    for (let i = 0; i <= 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      riverPath.push(new BABYLON.Vector3(
        Math.cos(angle) * 3,
        14.3,
        Math.sin(angle) * 3
      ));
    }
    
    const river = BABYLON.MeshBuilder.CreateTube('river', { 
      path: riverPath, 
      radius: 0.5, 
      tessellation: 8 
    }, scene);
    
    const riverMaterial = new BABYLON.StandardMaterial('riverMaterial', scene);
    riverMaterial.diffuseColor = new BABYLON.Color3(0.7, 0.9, 1);
    riverMaterial.specularColor = new BABYLON.Color3(1, 1, 1);
    riverMaterial.emissiveColor = new BABYLON.Color3(0.2, 0.3, 0.4);
    riverMaterial.alpha = 0.8;
    river.material = riverMaterial;

    // Tree of Life on either side of river (Rev 22:2)
    for (let side = 0; side < 2; side++) {
      for (let i = 0; i < 12; i++) { // 12 manner of fruits
        const angle = (i / 12) * Math.PI * 2;
        const radius = side === 0 ? 2.2 : 3.8;
        
        const tree = BABYLON.MeshBuilder.CreateCylinder(`tree${side}_${i}`, { 
          height: 3, 
          diameter: 0.3 
        }, scene);
        tree.position = new BABYLON.Vector3(
          Math.cos(angle) * radius,
          15.8,
          Math.sin(angle) * radius
        );
        
        const treeMaterial = new BABYLON.StandardMaterial(`treeMaterial${side}_${i}`, scene);
        treeMaterial.diffuseColor = new BABYLON.Color3(0.4, 0.2, 0.1);
        tree.material = treeMaterial;
        
        // Tree crown
        const crown = BABYLON.MeshBuilder.CreateSphere(`crown${side}_${i}`, { diameter: 1.5 }, scene);
        crown.position = new BABYLON.Vector3(
          Math.cos(angle) * radius,
          17,
          Math.sin(angle) * radius
        );
        
        const crownMaterial = new BABYLON.StandardMaterial(`crownMaterial${side}_${i}`, scene);
        crownMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.8, 0.2);
        crownMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.3, 0.1);
        crown.material = crownMaterial;
        
        // Fruits
        const fruit = BABYLON.MeshBuilder.CreateSphere(`fruit${side}_${i}`, { diameter: 0.3 }, scene);
        fruit.position = new BABYLON.Vector3(
          Math.cos(angle) * radius + Math.random() * 0.5 - 0.25,
          17 + Math.random() * 0.5 - 0.25,
          Math.sin(angle) * radius + Math.random() * 0.5 - 0.25
        );
        
        const fruitMaterial = new BABYLON.StandardMaterial(`fruitMaterial${side}_${i}`, scene);
        const fruitColors = [
          new BABYLON.Color3(1, 0.2, 0.2), // Red
          new BABYLON.Color3(1, 0.8, 0.2), // Orange
          new BABYLON.Color3(0.8, 0.2, 0.8), // Purple
          new BABYLON.Color3(0.2, 0.8, 0.2)  // Green
        ];
        fruitMaterial.diffuseColor = fruitColors[i % 4];
        fruitMaterial.emissiveColor = fruitColors[i % 4].scale(0.3);
        fruit.material = fruitMaterial;
      }
    }

    // No sun or moon needed - God's glory lights it (Rev 21:23)
    const gloryLight = new BABYLON.PointLight('gloryLight', new BABYLON.Vector3(0, 16, 0), scene);
    gloryLight.diffuse = new BABYLON.Color3(1, 1, 0.9);
    gloryLight.intensity = 2;
    gloryLight.range = 50;

    // Animate the city descending from heaven
    let isDescending = false;
    const originalY = cityBase.position.y;
    
    const descendCity = () => {
      if (isDescending) return;
      isDescending = true;
      
      // Move city up first
      cityBase.position.y = 30;
      foundationStones.forEach((_, index) => {
        const foundation = scene.getMeshByName(`foundation${index}`);
        if (foundation) foundation.position.y = 21.5 + index * 0.8;
      });
      
      // Animate descent
      const cityDescend = BABYLON.Animation.CreateAndStartAnimation(
        'cityDescend',
        cityBase,
        'position.y',
        30,
        120,
        30,
        originalY,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      );
      
      foundationStones.forEach((_, index) => {
        const foundation = scene.getMeshByName(`foundation${index}`);
        if (foundation) {
          BABYLON.Animation.CreateAndStartAnimation(
            `foundationDescend${index}`,
            foundation,
            'position.y',
            30,
            120,
            21.5 + index * 0.8,
            1.5 + index * 0.8,
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
          );
        }
      });
      
      setTimeout(() => {
        isDescending = false;
      }, 4000);
    };

    // Click to make city descend
    scene.onPointerObservable.add((pointerInfo) => {
      if (pointerInfo.pickInfo?.hit) {
        descendCity();
      }
    });

    // Add labels
    const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI');
    
    const addLabel = (text: string, position: BABYLON.Vector3, color: string) => {
      const label = new BABYLON.GUI.Rectangle();
      label.background = color;
      label.height = '60px';
      label.alpha = 0.9;
      label.widthInPixels = 220;
      label.cornerRadius = 5;
      label.thickness = 1;
      advancedTexture.addControl(label);
      
      const dummyMesh = new BABYLON.TransformNode('dummy', scene);
      dummyMesh.position = position;
      label.linkWithMesh(dummyMesh);
      label.linkOffsetY = -80;

      const text1 = new BABYLON.GUI.TextBlock();
      text1.text = text;
      text1.color = 'white';
      text1.fontSize = 10;
      label.addControl(text1);
    };

    addLabel('New Jerusalem\nFoursquare City\n12,000 furlongs each way\n(Rev 21:16)', new BABYLON.Vector3(0, 20, 0), 'rgba(255, 215, 0, 0.8)');
    addLabel('12 Gates of Pearl\nNames of 12 Tribes\n(Rev 21:12, 21)', new BABYLON.Vector3(8, 10, 0), 'rgba(255, 255, 255, 0.8)');
    addLabel('12 Foundations\nPrecious Stones\n(Rev 21:19-20)', new BABYLON.Vector3(-8, 5, 0), 'rgba(150, 100, 255, 0.8)');
    addLabel('River of Life\nTree of Life\n12 Manner of Fruits\n(Rev 22:1-2)', new BABYLON.Vector3(0, 18, 8), 'rgba(100, 200, 255, 0.8)');
    addLabel('Click anywhere to see\nthe Holy City descend\nfrom heaven!', new BABYLON.Vector3(0, 25, 0), 'rgba(255, 100, 100, 0.8)');

    // Add earth below (but city doesn't touch it)
    const earth = BABYLON.MeshBuilder.CreateSphere('earth', { diameter: 40 }, scene);
    earth.position = new BABYLON.Vector3(0, -25, 0);
    const earthMaterial = new BABYLON.StandardMaterial('earthMaterial', scene);
    earthMaterial.diffuseColor = new BABYLON.Color3(0.3, 0.5, 0.8);
    earthMaterial.specularColor = new BABYLON.Color3(0.5, 0.7, 1);
    earth.material = earthMaterial;
  };

  return (
    <BabylonScene 
      onSceneReady={onSceneReady} 
      id="new-jerusalem-canvas"
      className="w-full h-96 rounded-lg"
    />
  );
};

export default NewJerusalem;