import React from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-gui';
import BabylonScene from '../BabylonScene';

const HeavenlySanctuary: React.FC = () => {
  const onSceneReady = (scene: BABYLON.Scene) => {
    // Create camera
    const camera = new BABYLON.ArcRotateCamera(
      'camera',
      -Math.PI / 2,
      Math.PI / 2.5,
      25,
      BABYLON.Vector3.Zero(),
      scene
    );
    camera.attachControl(scene.getEngine().getRenderingCanvas(), true);

    // Create lights
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.3;

    // Create the throne (Revelation 4:2-3)
    const throne = BABYLON.MeshBuilder.CreateBox('throne', { width: 3, height: 4, depth: 2 }, scene);
    throne.position = new BABYLON.Vector3(0, 2, 0);
    const throneMaterial = new BABYLON.StandardMaterial('throneMaterial', scene);
    throneMaterial.diffuseColor = new BABYLON.Color3(0.8, 0.9, 1);
    throneMaterial.emissiveColor = new BABYLON.Color3(0.3, 0.4, 0.5);
    throneMaterial.specularColor = new BABYLON.Color3(1, 1, 1);
    throne.material = throneMaterial;

    // Rainbow around the throne (Revelation 4:3)
    const rainbow = BABYLON.MeshBuilder.CreateTorus('rainbow', { 
      diameter: 12, 
      thickness: 0.5 
    }, scene);
    rainbow.position = new BABYLON.Vector3(0, 6, 0);
    rainbow.rotation.x = Math.PI / 2;
    const rainbowMaterial = new BABYLON.StandardMaterial('rainbowMaterial', scene);
    rainbowMaterial.diffuseTexture = new BABYLON.DynamicTexture('rainbowTexture', { width: 512, height: 64 }, scene);
    const context = (rainbowMaterial.diffuseTexture as BABYLON.DynamicTexture).getContext();
    const gradient = context.createLinearGradient(0, 0, 512, 0);
    gradient.addColorStop(0, '#FF0000');
    gradient.addColorStop(0.17, '#FF8800');
    gradient.addColorStop(0.33, '#FFFF00');
    gradient.addColorStop(0.5, '#00FF00');
    gradient.addColorStop(0.67, '#0088FF');
    gradient.addColorStop(0.83, '#4400FF');
    gradient.addColorStop(1, '#8800FF');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 512, 64);
    (rainbowMaterial.diffuseTexture as BABYLON.DynamicTexture).update();
    rainbowMaterial.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    rainbow.material = rainbowMaterial;

    // Sea of glass like crystal (Revelation 4:6)
    const seaOfGlass = BABYLON.MeshBuilder.CreateGround('seaOfGlass', { width: 20, height: 15 }, scene);
    seaOfGlass.position.y = -2;
    const glassMaterial = new BABYLON.StandardMaterial('glassMaterial', scene);
    glassMaterial.diffuseColor = new BABYLON.Color3(0.8, 0.9, 1);
    glassMaterial.specularColor = new BABYLON.Color3(1, 1, 1);
    glassMaterial.alpha = 0.7;
    glassMaterial.emissiveColor = new BABYLON.Color3(0.2, 0.3, 0.4);
    seaOfGlass.material = glassMaterial;

    // 24 Thrones for the 24 Elders (Revelation 4:4)
    const elderPositions = [];
    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * Math.PI * 2;
      const radius = 8;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      elderPositions.push(new BABYLON.Vector3(x, 0, z));
    }

    elderPositions.forEach((pos, index) => {
      // Elder's throne
      const elderThrone = BABYLON.MeshBuilder.CreateBox(`elderThrone${index}`, { 
        width: 1, 
        height: 2, 
        depth: 1 
      }, scene);
      elderThrone.position = pos;
      const elderThroneMaterial = new BABYLON.StandardMaterial(`elderThroneMaterial${index}`, scene);
      elderThroneMaterial.diffuseColor = new BABYLON.Color3(1, 0.84, 0);
      elderThroneMaterial.emissiveColor = new BABYLON.Color3(0.2, 0.17, 0);
      elderThrone.material = elderThroneMaterial;

      // Elder figure
      const elder = BABYLON.MeshBuilder.CreateCylinder(`elder${index}`, { 
        height: 1.5, 
        diameter: 0.6 
      }, scene);
      elder.position = new BABYLON.Vector3(pos.x, 1.5, pos.z);
      const elderMaterial = new BABYLON.StandardMaterial(`elderMaterial${index}`, scene);
      elderMaterial.diffuseColor = new BABYLON.Color3(0.9, 0.9, 1);
      elderMaterial.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.3);
      elder.material = elderMaterial;

      // Crown
      const crown = BABYLON.MeshBuilder.CreateTorus(`crown${index}`, { 
        diameter: 0.8, 
        thickness: 0.1 
      }, scene);
      crown.position = new BABYLON.Vector3(pos.x, 2.4, pos.z);
      crown.rotation.x = Math.PI / 2;
      const crownMaterial = new BABYLON.StandardMaterial(`crownMaterial${index}`, scene);
      crownMaterial.diffuseColor = new BABYLON.Color3(1, 0.84, 0);
      crownMaterial.emissiveColor = new BABYLON.Color3(0.3, 0.25, 0);
      crown.material = crownMaterial;
    });

    // Four Living Creatures (Revelation 4:6-8)
    const creaturePositions = [
      { pos: new BABYLON.Vector3(4, 1, 4), type: 'Lion' },
      { pos: new BABYLON.Vector3(-4, 1, 4), type: 'Calf' },
      { pos: new BABYLON.Vector3(-4, 1, -4), type: 'Man' },
      { pos: new BABYLON.Vector3(4, 1, -4), type: 'Eagle' }
    ];

    creaturePositions.forEach((creature, index) => {
      const body = BABYLON.MeshBuilder.CreateBox(`creature${index}`, { 
        width: 1.5, 
        height: 2, 
        depth: 1.5 
      }, scene);
      body.position = creature.pos;
      
      const creatureMaterial = new BABYLON.StandardMaterial(`creatureMaterial${index}`, scene);
      creatureMaterial.diffuseColor = new BABYLON.Color3(0.8, 0.7, 0.9);
      creatureMaterial.emissiveColor = new BABYLON.Color3(0.3, 0.2, 0.4);
      body.material = creatureMaterial;

      // Six wings for each creature
      for (let w = 0; w < 6; w++) {
        const wing = BABYLON.MeshBuilder.CreateBox(`wing${index}_${w}`, { 
          width: 0.1, 
          height: 1.5, 
          depth: 2 
        }, scene);
        const wingAngle = (w / 6) * Math.PI * 2;
        wing.position = new BABYLON.Vector3(
          creature.pos.x + Math.cos(wingAngle) * 1.2,
          creature.pos.y + 1,
          creature.pos.z + Math.sin(wingAngle) * 1.2
        );
        wing.rotation.y = wingAngle;
        
        const wingMaterial = new BABYLON.StandardMaterial(`wingMaterial${index}_${w}`, scene);
        wingMaterial.diffuseColor = new BABYLON.Color3(0.9, 0.9, 0.95);
        wingMaterial.alpha = 0.8;
        wingMaterial.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.25);
        wing.material = wingMaterial;

        // Animate wings
        scene.registerBeforeRender(() => {
          const time = Date.now() * 0.003;
          wing.rotation.z = Math.sin(time + w + index) * 0.3;
        });
      }
    });

    // Seven Lamps of Fire (Seven Spirits of God) - Revelation 4:5
    for (let i = 0; i < 7; i++) {
      const lampStand = BABYLON.MeshBuilder.CreateCylinder(`lampStand${i}`, { 
        height: 2, 
        diameter: 0.3 
      }, scene);
      lampStand.position = new BABYLON.Vector3((i - 3) * 1.5, 1, 6);
      
      const lamp = BABYLON.MeshBuilder.CreateSphere(`lamp${i}`, { diameter: 0.5 }, scene);
      lamp.position = new BABYLON.Vector3((i - 3) * 1.5, 2.5, 6);
      
      const lampMaterial = new BABYLON.StandardMaterial(`lampMaterial${i}`, scene);
      lampMaterial.diffuseColor = new BABYLON.Color3(1, 0.84, 0);
      lampMaterial.emissiveColor = new BABYLON.Color3(0.3, 0.25, 0);
      lampStand.material = lampMaterial;
      
      const flameMaterial = new BABYLON.StandardMaterial(`flameMaterial${i}`, scene);
      flameMaterial.diffuseColor = new BABYLON.Color3(1, 0.5, 0);
      flameMaterial.emissiveColor = new BABYLON.Color3(1, 0.7, 0.2);
      lamp.material = flameMaterial;
      
      // Add point light for each lamp
      const lampLight = new BABYLON.PointLight(`lampLight${i}`, lamp.position, scene);
      lampLight.diffuse = new BABYLON.Color3(1, 0.8, 0.4);
      lampLight.intensity = 0.8;
      lampLight.range = 10;
      
      // Animate flames
      scene.registerBeforeRender(() => {
        const time = Date.now() * 0.005;
        lamp.position.y = 2.5 + Math.sin(time + i) * 0.1;
        lamp.scaling.x = 1 + Math.sin(time * 2 + i) * 0.1;
        lamp.scaling.z = 1 + Math.cos(time * 2 + i) * 0.1;
      });
    }

    // Lightning and Thunder effects (Revelation 4:5)
    const createLightning = () => {
      const lightning = new BABYLON.ParticleSystem('lightning', 1000, scene);
      lightning.particleTexture = new BABYLON.Texture('https://playground.babylonjs.com/textures/flare.png', scene);
      lightning.emitter = new BABYLON.Vector3(0, 8, 0);
      lightning.minEmitBox = new BABYLON.Vector3(-5, 0, -5);
      lightning.maxEmitBox = new BABYLON.Vector3(5, 0, 5);
      lightning.color1 = new BABYLON.Color4(1, 1, 0.8, 1.0);
      lightning.color2 = new BABYLON.Color4(0.8, 0.8, 1.0, 1.0);
      lightning.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
      lightning.minSize = 0.1;
      lightning.maxSize = 0.5;
      lightning.minLifeTime = 0.1;
      lightning.maxLifeTime = 0.3;
      lightning.emitRate = 100;
      
      lightning.start();
      setTimeout(() => lightning.stop(), 500);
    };

    // Trigger lightning periodically
    setInterval(createLightning, 5000);

    // Add labels
    const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI');
    
    const addLabel = (text: string, position: BABYLON.Vector3, color: string) => {
      const label = new BABYLON.GUI.Rectangle();
      label.background = color;
      label.height = '40px';
      label.alpha = 0.9;
      label.widthInPixels = 180;
      label.cornerRadius = 5;
      label.thickness = 1;
      advancedTexture.addControl(label);
      
      const dummyMesh = new BABYLON.TransformNode('dummy', scene);
      dummyMesh.position = position;
      label.linkWithMesh(dummyMesh);
      label.linkOffsetY = -50;

      const text1 = new BABYLON.GUI.TextBlock();
      text1.text = text;
      text1.color = 'white';
      text1.fontSize = 11;
      label.addControl(text1);
    };

    addLabel('Throne of God\n(Rev 4:2)', new BABYLON.Vector3(0, 6, 0), 'rgba(100, 150, 255, 0.8)');
    addLabel('Rainbow Round Throne\n(Rev 4:3)', new BABYLON.Vector3(0, 8, 0), 'rgba(255, 100, 150, 0.8)');
    addLabel('24 Elders\n(Rev 4:4)', new BABYLON.Vector3(6, 2, 0), 'rgba(255, 215, 0, 0.8)');
    addLabel('Seven Spirits of God\n(Rev 4:5)', new BABYLON.Vector3(0, 3, 6), 'rgba(255, 140, 0, 0.8)');
    addLabel('Four Living Creatures\n(Rev 4:6-8)', new BABYLON.Vector3(4, 3, 4), 'rgba(150, 100, 255, 0.8)');
    addLabel('Sea of Glass\n(Rev 4:6)', new BABYLON.Vector3(0, -1, 0), 'rgba(100, 200, 255, 0.8)');
  };

  return (
    <BabylonScene 
      onSceneReady={onSceneReady} 
      id="heavenly-sanctuary-canvas"
      className="w-full h-96 rounded-lg"
    />
  );
};

export default HeavenlySanctuary;