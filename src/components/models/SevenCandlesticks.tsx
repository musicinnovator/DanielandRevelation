import React from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-gui';
import BabylonScene from '../BabylonScene';

const SevenCandlesticks: React.FC = () => {
  const onSceneReady = (scene: BABYLON.Scene) => {
    // Create camera
    const camera = new BABYLON.ArcRotateCamera(
      'camera',
      -Math.PI / 2,
      Math.PI / 2.5,
      15,
      BABYLON.Vector3.Zero(),
      scene
    );
    camera.attachControl(scene.getEngine().getRenderingCanvas(), true);

    // Create lights
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.5;

    // Seven Churches data with their characteristics
    const churches = [
      { name: 'Ephesus', period: '31-100 AD', color: new BABYLON.Color3(1, 0.8, 0), message: 'Lost First Love' },
      { name: 'Smyrna', period: '100-313 AD', color: new BABYLON.Color3(0.8, 0.2, 0.2), message: 'Persecution Period' },
      { name: 'Pergamos', period: '313-538 AD', color: new BABYLON.Color3(0.6, 0.4, 0.8), message: 'Compromise Period' },
      { name: 'Thyatira', period: '538-1517 AD', color: new BABYLON.Color3(0.4, 0.2, 0.6), message: 'Papal Supremacy' },
      { name: 'Sardis', period: '1517-1798 AD', color: new BABYLON.Color3(0.8, 0.6, 0.2), message: 'Protestant Reformation' },
      { name: 'Philadelphia', period: '1798-1844 AD', color: new BABYLON.Color3(0.2, 0.8, 0.4), message: 'Missionary Period' },
      { name: 'Laodicea', period: '1844-Present', color: new BABYLON.Color3(0.6, 0.6, 0.6), message: 'Lukewarm Church' }
    ];

    // Create the seven golden candlesticks
    churches.forEach((church, index) => {
      const x = (index - 3) * 3; // Spread them out
      
      // Base of candlestick
      const base = BABYLON.MeshBuilder.CreateCylinder(`base${index}`, { 
        height: 0.5, 
        diameter: 1.5 
      }, scene);
      base.position = new BABYLON.Vector3(x, -1.5, 0);
      
      // Stem
      const stem = BABYLON.MeshBuilder.CreateCylinder(`stem${index}`, { 
        height: 3, 
        diameter: 0.3 
      }, scene);
      stem.position = new BABYLON.Vector3(x, 0, 0);
      
      // Cup for oil
      const cup = BABYLON.MeshBuilder.CreateCylinder(`cup${index}`, { 
        height: 0.3, 
        diameter: 0.8 
      }, scene);
      cup.position = new BABYLON.Vector3(x, 1.8, 0);
      
      // Flame
      const flame = BABYLON.MeshBuilder.CreateSphere(`flame${index}`, { 
        diameter: 0.4 
      }, scene);
      flame.position = new BABYLON.Vector3(x, 2.2, 0);
      
      // Golden material for candlestick
      const goldMaterial = new BABYLON.StandardMaterial(`gold${index}`, scene);
      goldMaterial.diffuseColor = new BABYLON.Color3(1, 0.84, 0);
      goldMaterial.specularColor = new BABYLON.Color3(1, 1, 0.5);
      goldMaterial.emissiveColor = new BABYLON.Color3(0.2, 0.17, 0);
      
      base.material = goldMaterial;
      stem.material = goldMaterial;
      cup.material = goldMaterial;
      
      // Flame material with church-specific color
      const flameMaterial = new BABYLON.StandardMaterial(`flame${index}`, scene);
      flameMaterial.diffuseColor = church.color;
      flameMaterial.emissiveColor = church.color;
      flameMaterial.alpha = 0.8;
      flame.material = flameMaterial;
      
      // Animate flame
      scene.registerBeforeRender(() => {
        const time = Date.now() * 0.005;
        flame.position.y = 2.2 + Math.sin(time + index) * 0.1;
        flame.scaling.x = 1 + Math.sin(time * 2 + index) * 0.1;
        flame.scaling.z = 1 + Math.cos(time * 2 + index) * 0.1;
      });
      
      // Add light for each flame
      const pointLight = new BABYLON.PointLight(`light${index}`, new BABYLON.Vector3(x, 2.2, 0), scene);
      pointLight.diffuse = church.color;
      pointLight.intensity = 0.5;
      pointLight.range = 5;
    });

    // Create Christ figure in the midst
    const christBody = BABYLON.MeshBuilder.CreateCylinder('christBody', { 
      height: 4, 
      diameter: 1 
    }, scene);
    christBody.position = new BABYLON.Vector3(0, 1, -8);
    
    const christHead = BABYLON.MeshBuilder.CreateSphere('christHead', { 
      diameter: 1.2 
    }, scene);
    christHead.position = new BABYLON.Vector3(0, 3.5, -8);
    
    // Christ's robe material
    const robeMaterial = new BABYLON.StandardMaterial('robeMaterial', scene);
    robeMaterial.diffuseColor = new BABYLON.Color3(0.9, 0.9, 1);
    robeMaterial.emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.4);
    christBody.material = robeMaterial;
    christHead.material = robeMaterial;
    
    // Golden girdle
    const girdle = BABYLON.MeshBuilder.CreateTorus('girdle', { 
      diameter: 1.2, 
      thickness: 0.1 
    }, scene);
    girdle.position = new BABYLON.Vector3(0, 2.5, -8);
    girdle.rotation.x = Math.PI / 2;
    const girdleMaterial = new BABYLON.StandardMaterial('girdleMaterial', scene);
    girdleMaterial.diffuseColor = new BABYLON.Color3(1, 0.84, 0);
    girdleMaterial.emissiveColor = new BABYLON.Color3(0.3, 0.25, 0);
    girdle.material = girdleMaterial;
    
    // Hair white as wool
    const hair = BABYLON.MeshBuilder.CreateSphere('hair', { diameter: 1.3 }, scene);
    hair.position = new BABYLON.Vector3(0, 3.8, -8);
    const hairMaterial = new BABYLON.StandardMaterial('hairMaterial', scene);
    hairMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
    hairMaterial.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    hair.material = hairMaterial;
    
    // Eyes like flames of fire
    const leftEye = BABYLON.MeshBuilder.CreateSphere('leftEye', { diameter: 0.15 }, scene);
    leftEye.position = new BABYLON.Vector3(-0.2, 3.6, -7.4);
    const rightEye = BABYLON.MeshBuilder.CreateSphere('rightEye', { diameter: 0.15 }, scene);
    rightEye.position = new BABYLON.Vector3(0.2, 3.6, -7.4);
    
    const eyeMaterial = new BABYLON.StandardMaterial('eyeMaterial', scene);
    eyeMaterial.diffuseColor = new BABYLON.Color3(1, 0.3, 0);
    eyeMaterial.emissiveColor = new BABYLON.Color3(1, 0.5, 0);
    leftEye.material = eyeMaterial;
    rightEye.material = eyeMaterial;
    
    // Feet like fine brass
    const leftFoot = BABYLON.MeshBuilder.CreateBox('leftFoot', { 
      width: 0.4, 
      height: 0.3, 
      depth: 0.8 
    }, scene);
    leftFoot.position = new BABYLON.Vector3(-0.3, -1.2, -8);
    
    const rightFoot = BABYLON.MeshBuilder.CreateBox('rightFoot', { 
      width: 0.4, 
      height: 0.3, 
      depth: 0.8 
    }, scene);
    rightFoot.position = new BABYLON.Vector3(0.3, -1.2, -8);
    
    const brassMaterial = new BABYLON.StandardMaterial('brassMaterial', scene);
    brassMaterial.diffuseColor = new BABYLON.Color3(0.8, 0.5, 0.2);
    brassMaterial.specularColor = new BABYLON.Color3(1, 0.8, 0.4);
    brassMaterial.emissiveColor = new BABYLON.Color3(0.2, 0.1, 0.05);
    leftFoot.material = brassMaterial;
    rightFoot.material = brassMaterial;

    // Add labels for each church
    const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI');
    
    churches.forEach((church, index) => {
      const x = (index - 3) * 3;
      
      const label = new BABYLON.GUI.Rectangle();
      label.background = 'rgba(0, 0, 0, 0.8)';
      label.height = '60px';
      label.widthInPixels = 160;
      label.cornerRadius = 5;
      label.thickness = 1;
      label.linkOffsetY = -80;
      advancedTexture.addControl(label);
      
      // Link to the flame position
      const dummyMesh = new BABYLON.TransformNode(`dummy${index}`, scene);
      dummyMesh.position = new BABYLON.Vector3(x, 2.5, 0);
      label.linkWithMesh(dummyMesh);

      const churchName = new BABYLON.GUI.TextBlock();
      churchName.text = church.name;
      churchName.color = 'white';
      churchName.fontSize = 14;
      churchName.fontWeight = 'bold';
      churchName.top = '-15px';
      label.addControl(churchName);
      
      const period = new BABYLON.GUI.TextBlock();
      period.text = church.period;
      period.color = '#FFD700';
      period.fontSize = 10;
      period.top = '0px';
      label.addControl(period);
      
      const message = new BABYLON.GUI.TextBlock();
      message.text = church.message;
      message.color = '#CCCCCC';
      message.fontSize = 9;
      message.top = '15px';
      label.addControl(message);
    });

    // Christ label
    const christLabel = new BABYLON.GUI.Rectangle();
    christLabel.background = 'rgba(255, 255, 255, 0.9)';
    christLabel.height = '80px';
    christLabel.widthInPixels = 200;
    christLabel.cornerRadius = 5;
    christLabel.thickness = 2;
    christLabel.color = '#FFD700';
    christLabel.linkOffsetY = -100;
    advancedTexture.addControl(christLabel);
    christLabel.linkWithMesh(christHead);

    const christText = new BABYLON.GUI.TextBlock();
    christText.text = 'Son of Man\nClothed with garment\nGirded with golden girdle\nHair white as wool\nEyes as flame of fire\nFeet like fine brass';
    christText.color = '#000080';
    christText.fontSize = 11;
    christLabel.addControl(christText);

    // Add ground
    const ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 30, height: 20 }, scene);
    const groundMaterial = new BABYLON.StandardMaterial('groundMaterial', scene);
    groundMaterial.diffuseColor = new BABYLON.Color3(0.1, 0.1, 0.3);
    groundMaterial.specularColor = new BABYLON.Color3(0.2, 0.2, 0.6);
    ground.material = groundMaterial;
    ground.position.y = -2;
  };

  return (
    <BabylonScene 
      onSceneReady={onSceneReady} 
      id="seven-candlesticks-canvas"
      className="w-full h-96 rounded-lg"
    />
  );
};

export default SevenCandlesticks;