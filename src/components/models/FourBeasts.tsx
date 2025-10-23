import React from 'react';
import * as BABYLON from 'babylonjs';
import BabylonScene from '../BabylonScene';

const FourBeasts: React.FC = () => {
  const onSceneReady = (scene: BABYLON.Scene) => {
    // Create camera
    const camera = new BABYLON.ArcRotateCamera(
      'camera',
      -Math.PI / 2,
      Math.PI / 2.5,
      20,
      BABYLON.Vector3.Zero(),
      scene
    );
    camera.attachControls(scene.getEngine().getRenderingCanvas(), true);

    // Create lights
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    const directionalLight = new BABYLON.DirectionalLight('dirLight', new BABYLON.Vector3(-1, -1, -1), scene);
    directionalLight.position = new BABYLON.Vector3(20, 40, 20);

    // Create the sea (turbulent waters)
    const sea = BABYLON.MeshBuilder.CreateGround('sea', { width: 30, height: 30 }, scene);
    const seaMaterial = new BABYLON.StandardMaterial('seaMaterial', scene);
    seaMaterial.diffuseColor = new BABYLON.Color3(0, 0.3, 0.6);
    seaMaterial.specularColor = new BABYLON.Color3(0.5, 0.8, 1);
    sea.material = seaMaterial;
    sea.position.y = -2;

    // Animate the sea
    scene.registerBeforeRender(() => {
      sea.position.y = -2 + Math.sin(Date.now() * 0.002) * 0.2;
    });

    // First Beast: Lion with Eagle's Wings (Babylon)
    const lionBody = BABYLON.MeshBuilder.CreateBox('lionBody', { width: 3, height: 1.5, depth: 1.5 }, scene);
    lionBody.position = new BABYLON.Vector3(-8, 0, -5);
    const lionMaterial = new BABYLON.StandardMaterial('lionMaterial', scene);
    lionMaterial.diffuseColor = new BABYLON.Color3(0.8, 0.6, 0.2);
    lionBody.material = lionMaterial;

    const lionHead = BABYLON.MeshBuilder.CreateSphere('lionHead', { diameter: 1.8 }, scene);
    lionHead.position = new BABYLON.Vector3(-6.5, 0.5, -5);
    lionHead.material = lionMaterial;

    // Eagle wings
    const leftWing = BABYLON.MeshBuilder.CreateBox('leftWing', { width: 0.2, height: 2, depth: 3 }, scene);
    leftWing.position = new BABYLON.Vector3(-8.5, 1, -5);
    leftWing.rotation.z = Math.PI / 6;
    const wingMaterial = new BABYLON.StandardMaterial('wingMaterial', scene);
    wingMaterial.diffuseColor = new BABYLON.Color3(0.4, 0.3, 0.1);
    leftWing.material = wingMaterial;

    const rightWing = BABYLON.MeshBuilder.CreateBox('rightWing', { width: 0.2, height: 2, depth: 3 }, scene);
    rightWing.position = new BABYLON.Vector3(-7.5, 1, -5);
    rightWing.rotation.z = -Math.PI / 6;
    rightWing.material = wingMaterial;

    // Animate wings
    scene.registerBeforeRender(() => {
      const time = Date.now() * 0.003;
      leftWing.rotation.z = Math.PI / 6 + Math.sin(time) * 0.3;
      rightWing.rotation.z = -Math.PI / 6 - Math.sin(time) * 0.3;
    });

    // Second Beast: Bear (Medo-Persia)
    const bearBody = BABYLON.MeshBuilder.CreateBox('bearBody', { width: 3.5, height: 2, depth: 2 }, scene);
    bearBody.position = new BABYLON.Vector3(-2, 0, -5);
    const bearMaterial = new BABYLON.StandardMaterial('bearMaterial', scene);
    bearMaterial.diffuseColor = new BABYLON.Color3(0.4, 0.3, 0.2);
    bearBody.material = bearMaterial;

    const bearHead = BABYLON.MeshBuilder.CreateSphere('bearHead', { diameter: 2 }, scene);
    bearHead.position = new BABYLON.Vector3(-0.2, 0.8, -5);
    bearHead.material = bearMaterial;

    // Bear raised up on one side
    bearBody.rotation.z = Math.PI / 12;

    // Three ribs in mouth
    for (let i = 0; i < 3; i++) {
      const rib = BABYLON.MeshBuilder.CreateCylinder('rib' + i, { height: 0.8, diameter: 0.1 }, scene);
      rib.position = new BABYLON.Vector3(0.5 + i * 0.2, 0.8, -4.2);
      rib.rotation.x = Math.PI / 2;
      const ribMaterial = new BABYLON.StandardMaterial('ribMaterial', scene);
      ribMaterial.diffuseColor = new BABYLON.Color3(0.9, 0.9, 0.8);
      rib.material = ribMaterial;
    }

    // Third Beast: Leopard with Four Wings and Four Heads (Greece)
    const leopardBody = BABYLON.MeshBuilder.CreateBox('leopardBody', { width: 3, height: 1.2, depth: 1.8 }, scene);
    leopardBody.position = new BABYLON.Vector3(4, 0, -5);
    const leopardMaterial = new BABYLON.StandardMaterial('leopardMaterial', scene);
    leopardMaterial.diffuseColor = new BABYLON.Color3(0.9, 0.7, 0.3);
    leopardMaterial.diffuseTexture = new BABYLON.DynamicTexture('leopardTexture', { width: 512, height: 512 }, scene);
    const context = (leopardMaterial.diffuseTexture as BABYLON.DynamicTexture).getContext();
    context.fillStyle = '#E6B800';
    context.fillRect(0, 0, 512, 512);
    context.fillStyle = '#8B4513';
    for (let i = 0; i < 20; i++) {
      context.beginPath();
      context.arc(Math.random() * 512, Math.random() * 512, 20, 0, 2 * Math.PI);
      context.fill();
    }
    (leopardMaterial.diffuseTexture as BABYLON.DynamicTexture).update();
    leopardBody.material = leopardMaterial;

    // Four heads
    const headPositions = [
      new BABYLON.Vector3(5.5, 0.8, -5.8),
      new BABYLON.Vector3(5.5, 0.8, -4.2),
      new BABYLON.Vector3(5.8, 0.8, -5.8),
      new BABYLON.Vector3(5.8, 0.8, -4.2)
    ];

    headPositions.forEach((pos, i) => {
      const head = BABYLON.MeshBuilder.CreateSphere('leopardHead' + i, { diameter: 1 }, scene);
      head.position = pos;
      head.material = leopardMaterial;
    });

    // Four wings
    const wingPositions = [
      { pos: new BABYLON.Vector3(3.5, 1.5, -5.5), rot: new BABYLON.Vector3(0, 0, Math.PI / 4) },
      { pos: new BABYLON.Vector3(4.5, 1.5, -5.5), rot: new BABYLON.Vector3(0, 0, -Math.PI / 4) },
      { pos: new BABYLON.Vector3(3.5, 1.5, -4.5), rot: new BABYLON.Vector3(0, 0, Math.PI / 4) },
      { pos: new BABYLON.Vector3(4.5, 1.5, -4.5), rot: new BABYLON.Vector3(0, 0, -Math.PI / 4) }
    ];

    wingPositions.forEach((wingData, i) => {
      const wing = BABYLON.MeshBuilder.CreateBox('leopardWing' + i, { width: 0.1, height: 1.5, depth: 2 }, scene);
      wing.position = wingData.pos;
      wing.rotation = wingData.rot;
      wing.material = wingMaterial;
    });

    // Fourth Beast: Dreadful and Terrible (Rome)
    const dragonBody = BABYLON.MeshBuilder.CreateBox('dragonBody', { width: 4, height: 2.5, depth: 2.5 }, scene);
    dragonBody.position = new BABYLON.Vector3(10, 0, -5);
    const dragonMaterial = new BABYLON.StandardMaterial('dragonMaterial', scene);
    dragonMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.1, 0.1);
    dragonMaterial.emissiveColor = new BABYLON.Color3(0.1, 0, 0);
    dragonBody.material = dragonMaterial;

    const dragonHead = BABYLON.MeshBuilder.CreateBox('dragonHead', { width: 2, height: 1.5, depth: 2 }, scene);
    dragonHead.position = new BABYLON.Vector3(12.5, 0.5, -5);
    dragonHead.material = dragonMaterial;

    // Ten horns
    for (let i = 0; i < 10; i++) {
      const horn = BABYLON.MeshBuilder.CreateCylinder('horn' + i, { height: 1, diameterTop: 0.1, diameterBottom: 0.3 }, scene);
      const angle = (i / 10) * Math.PI * 2;
      horn.position = new BABYLON.Vector3(
        12.5 + Math.cos(angle) * 0.8,
        1.5,
        -5 + Math.sin(angle) * 0.8
      );
      const hornMaterial = new BABYLON.StandardMaterial('hornMaterial', scene);
      hornMaterial.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.6);
      horn.material = hornMaterial;
    }

    // Little horn (Papal power)
    const littleHorn = BABYLON.MeshBuilder.CreateCylinder('littleHorn', { height: 1.5, diameterTop: 0.15, diameterBottom: 0.4 }, scene);
    littleHorn.position = new BABYLON.Vector3(12.5, 2, -5);
    const littleHornMaterial = new BABYLON.StandardMaterial('littleHornMaterial', scene);
    littleHornMaterial.diffuseColor = new BABYLON.Color3(0.6, 0.1, 0.6);
    littleHornMaterial.emissiveColor = new BABYLON.Color3(0.2, 0, 0.2);
    littleHorn.material = littleHornMaterial;

    // Iron teeth
    for (let i = 0; i < 8; i++) {
      const tooth = BABYLON.MeshBuilder.CreateCylinder('tooth' + i, { height: 0.5, diameter: 0.2 }, scene);
      tooth.position = new BABYLON.Vector3(13.2, 0.2, -5.5 + i * 0.15);
      const toothMaterial = new BABYLON.StandardMaterial('toothMaterial', scene);
      toothMaterial.diffuseColor = new BABYLON.Color3(0.7, 0.7, 0.7);
      tooth.material = toothMaterial;
    }

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
      
      const worldPos = BABYLON.Vector3.Project(
        position,
        BABYLON.Matrix.Identity(),
        scene.getTransformMatrix(),
        camera.viewport.toGlobal(scene.getEngine().getRenderWidth(), scene.getEngine().getRenderHeight())
      );
      
      label.leftInPixels = worldPos.x - 90;
      label.topInPixels = worldPos.y - 60;

      const text1 = new BABYLON.GUI.TextBlock();
      text1.text = text;
      text1.color = 'white';
      text1.fontSize = 11;
      label.addControl(text1);
    };

    addLabel('Lion with Eagle Wings\n(Babylon)', new BABYLON.Vector3(-8, 2, -5), '#FFD700');
    addLabel('Bear with Three Ribs\n(Medo-Persia)', new BABYLON.Vector3(-2, 2, -5), '#C0C0C0');
    addLabel('Leopard - 4 Heads/Wings\n(Greece)', new BABYLON.Vector3(4, 2, -5), '#CD7F32');
    addLabel('Dreadful Beast\n(Rome - 10 Horns)', new BABYLON.Vector3(10, 3, -5), '#8B0000');

    // Add ground
    const ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 40, height: 20 }, scene);
    const groundMaterial = new BABYLON.StandardMaterial('groundMaterial', scene);
    groundMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.4, 0.2);
    ground.material = groundMaterial;
    ground.position.y = -3;
  };

  return (
    <BabylonScene 
      onSceneReady={onSceneReady} 
      id="four-beasts-canvas"
      className="w-full h-96 rounded-lg"
    />
  );
};

export default FourBeasts;