import React from 'react';
import * as BABYLON from 'babylonjs';
import BabylonScene from '../BabylonScene';

const NebuchadnezzarsImage: React.FC = () => {
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
    camera.attachControls(scene.getEngine().getRenderingCanvas(), true);

    // Create lights
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    const directionalLight = new BABYLON.DirectionalLight('dirLight', new BABYLON.Vector3(-1, -1, -1), scene);
    directionalLight.position = new BABYLON.Vector3(20, 40, 20);
    directionalLight.intensity = 0.5;

    // Create the Great Image parts
    
    // Head of Gold (Babylon)
    const head = BABYLON.MeshBuilder.CreateSphere('head', { diameter: 2 }, scene);
    head.position.y = 8;
    const goldMaterial = new BABYLON.StandardMaterial('gold', scene);
    goldMaterial.diffuseColor = new BABYLON.Color3(1, 0.84, 0);
    goldMaterial.specularColor = new BABYLON.Color3(1, 1, 0.5);
    goldMaterial.emissiveColor = new BABYLON.Color3(0.2, 0.17, 0);
    head.material = goldMaterial;

    // Chest and Arms of Silver (Medo-Persia)
    const chest = BABYLON.MeshBuilder.CreateBox('chest', { width: 2.5, height: 2, depth: 1.5 }, scene);
    chest.position.y = 6;
    const silverMaterial = new BABYLON.StandardMaterial('silver', scene);
    silverMaterial.diffuseColor = new BABYLON.Color3(0.75, 0.75, 0.75);
    silverMaterial.specularColor = new BABYLON.Color3(1, 1, 1);
    silverMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    chest.material = silverMaterial;

    // Arms
    const leftArm = BABYLON.MeshBuilder.CreateCylinder('leftArm', { height: 2, diameter: 0.8 }, scene);
    leftArm.position = new BABYLON.Vector3(-1.5, 6, 0);
    leftArm.material = silverMaterial;

    const rightArm = BABYLON.MeshBuilder.CreateCylinder('rightArm', { height: 2, diameter: 0.8 }, scene);
    rightArm.position = new BABYLON.Vector3(1.5, 6, 0);
    rightArm.material = silverMaterial;

    // Belly and Thighs of Bronze (Greece)
    const belly = BABYLON.MeshBuilder.CreateBox('belly', { width: 2, height: 1.5, depth: 1.2 }, scene);
    belly.position.y = 4;
    const bronzeMaterial = new BABYLON.StandardMaterial('bronze', scene);
    bronzeMaterial.diffuseColor = new BABYLON.Color3(0.8, 0.5, 0.2);
    bronzeMaterial.specularColor = new BABYLON.Color3(0.9, 0.6, 0.3);
    bronzeMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.05, 0.02);
    belly.material = bronzeMaterial;

    const leftThigh = BABYLON.MeshBuilder.CreateCylinder('leftThigh', { height: 2, diameter: 0.9 }, scene);
    leftThigh.position = new BABYLON.Vector3(-0.6, 2.5, 0);
    leftThigh.material = bronzeMaterial;

    const rightThigh = BABYLON.MeshBuilder.CreateCylinder('rightThigh', { height: 2, diameter: 0.9 }, scene);
    rightThigh.position = new BABYLON.Vector3(0.6, 2.5, 0);
    rightThigh.material = bronzeMaterial;

    // Legs of Iron (Rome)
    const leftLeg = BABYLON.MeshBuilder.CreateCylinder('leftLeg', { height: 3, diameter: 0.7 }, scene);
    leftLeg.position = new BABYLON.Vector3(-0.6, 0, 0);
    const ironMaterial = new BABYLON.StandardMaterial('iron', scene);
    ironMaterial.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
    ironMaterial.specularColor = new BABYLON.Color3(0.8, 0.8, 0.8);
    ironMaterial.emissiveColor = new BABYLON.Color3(0.05, 0.05, 0.05);
    leftLeg.material = ironMaterial;

    const rightLeg = BABYLON.MeshBuilder.CreateCylinder('rightLeg', { height: 3, diameter: 0.7 }, scene);
    rightLeg.position = new BABYLON.Vector3(0.6, 0, 0);
    rightLeg.material = ironMaterial;

    // Feet of Iron and Clay (Divided Europe)
    const leftFoot = BABYLON.MeshBuilder.CreateBox('leftFoot', { width: 1, height: 0.5, depth: 1.5 }, scene);
    leftFoot.position = new BABYLON.Vector3(-0.6, -2, 0);
    
    const rightFoot = BABYLON.MeshBuilder.CreateBox('rightFoot', { width: 1, height: 0.5, depth: 1.5 }, scene);
    rightFoot.position = new BABYLON.Vector3(0.6, -2, 0);

    // Mixed iron and clay material
    const ironClayMaterial = new BABYLON.StandardMaterial('ironClay', scene);
    ironClayMaterial.diffuseTexture = new BABYLON.DynamicTexture('ironClayTexture', { width: 512, height: 512 }, scene);
    const context = (ironClayMaterial.diffuseTexture as BABYLON.DynamicTexture).getContext();
    context.fillStyle = '#666666';
    context.fillRect(0, 0, 256, 512);
    context.fillStyle = '#8B4513';
    context.fillRect(256, 0, 256, 512);
    (ironClayMaterial.diffuseTexture as BABYLON.DynamicTexture).update();
    
    leftFoot.material = ironClayMaterial;
    rightFoot.material = ironClayMaterial;

    // The Stone (God's Kingdom)
    const stone = BABYLON.MeshBuilder.CreateSphere('stone', { diameter: 1.5 }, scene);
    stone.position = new BABYLON.Vector3(5, -1, 0);
    const stoneMaterial = new BABYLON.StandardMaterial('stone', scene);
    stoneMaterial.diffuseColor = new BABYLON.Color3(0.9, 0.9, 0.9);
    stoneMaterial.specularColor = new BABYLON.Color3(1, 1, 1);
    stoneMaterial.emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
    stone.material = stoneMaterial;

    // Animate the stone hitting the feet
    let animationRunning = false;
    scene.onPointerObservable.add((pointerInfo) => {
      if (pointerInfo.pickInfo?.hit && pointerInfo.pickInfo.pickedMesh === stone && !animationRunning) {
        animationRunning = true;
        
        const animationStone = BABYLON.Animation.CreateAndStartAnimation(
          'stoneAnimation',
          stone,
          'position.x',
          30,
          60,
          5,
          0,
          BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
        );

        setTimeout(() => {
          // Create particle system for destruction
          const particleSystem = new BABYLON.ParticleSystem('particles', 2000, scene);
          particleSystem.particleTexture = new BABYLON.Texture('https://playground.babylonjs.com/textures/flare.png', scene);
          particleSystem.emitter = new BABYLON.Vector3(0, -1, 0);
          particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, -1);
          particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 1);
          particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
          particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
          particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
          particleSystem.minSize = 0.1;
          particleSystem.maxSize = 0.5;
          particleSystem.minLifeTime = 0.3;
          particleSystem.maxLifeTime = 1.5;
          particleSystem.emitRate = 1500;
          particleSystem.start();

          setTimeout(() => {
            particleSystem.stop();
            animationRunning = false;
            stone.position.x = 5;
          }, 3000);
        }, 2000);
      }
    });

    // Add labels
    const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI');
    
    const addLabel = (text: string, mesh: BABYLON.AbstractMesh, color: string) => {
      const label = new BABYLON.GUI.Rectangle();
      label.background = color;
      label.height = '30px';
      label.alpha = 0.8;
      label.widthInPixels = 150;
      label.cornerRadius = 5;
      label.thickness = 1;
      label.linkOffsetY = -30;
      advancedTexture.addControl(label);
      label.linkWithMesh(mesh);

      const text1 = new BABYLON.GUI.TextBlock();
      text1.text = text;
      text1.color = 'white';
      text1.fontSize = 12;
      label.addControl(text1);
    };

    addLabel('Head of Gold\n(Babylon)', head, '#FFD700');
    addLabel('Chest of Silver\n(Medo-Persia)', chest, '#C0C0C0');
    addLabel('Belly of Bronze\n(Greece)', belly, '#CD7F32');
    addLabel('Legs of Iron\n(Rome)', leftLeg, '#808080');
    addLabel('Feet Iron/Clay\n(Divided Europe)', leftFoot, '#8B4513');
    addLabel('Stone Kingdom\n(Click to animate)', stone, '#FFFFFF');

    // Add ground
    const ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 20, height: 20 }, scene);
    const groundMaterial = new BABYLON.StandardMaterial('groundMaterial', scene);
    groundMaterial.diffuseColor = new BABYLON.Color3(0.3, 0.5, 0.3);
    ground.material = groundMaterial;
    ground.position.y = -3;
  };

  return (
    <BabylonScene 
      onSceneReady={onSceneReady} 
      id="nebuchadnezzar-image-canvas"
      className="w-full h-96 rounded-lg"
    />
  );
};

export default NebuchadnezzarsImage;