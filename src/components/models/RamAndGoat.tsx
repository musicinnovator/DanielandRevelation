import React from 'react';
import * as BABYLON from 'babylonjs';
import BabylonScene from '../BabylonScene';

const RamAndGoat: React.FC = () => {
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
    camera.attachControl(scene.getEngine().getRenderingCanvas(), true);

    // Create lights
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    const directionalLight = new BABYLON.DirectionalLight('dirLight', new BABYLON.Vector3(-1, -1, -1), scene);
    directionalLight.position = new BABYLON.Vector3(20, 40, 20);

    // Create the Ram (Medo-Persia) - Daniel 8:3-4
    const ramBody = BABYLON.MeshBuilder.CreateBox('ramBody', { width: 2.5, height: 1.5, depth: 1.8 }, scene);
    ramBody.position = new BABYLON.Vector3(-8, 0, 0);
    const ramMaterial = new BABYLON.StandardMaterial('ramMaterial', scene);
    ramMaterial.diffuseColor = new BABYLON.Color3(0.7, 0.6, 0.5);
    ramBody.material = ramMaterial;

    const ramHead = BABYLON.MeshBuilder.CreateBox('ramHead', { width: 1.2, height: 1, depth: 1.5 }, scene);
    ramHead.position = new BABYLON.Vector3(-6, 0.5, 0);
    ramHead.material = ramMaterial;

    // Two horns - one higher than the other (Media and Persia)
    const horn1 = BABYLON.MeshBuilder.CreateCylinder('horn1', { 
      height: 1.5, 
      diameterTop: 0.1, 
      diameterBottom: 0.3 
    }, scene);
    horn1.position = new BABYLON.Vector3(-5.7, 1.8, -0.3);
    horn1.rotation.z = -Math.PI / 12;
    const hornMaterial = new BABYLON.StandardMaterial('hornMaterial', scene);
    hornMaterial.diffuseColor = new BABYLON.Color3(0.8, 0.7, 0.6);
    horn1.material = hornMaterial;

    // Second horn higher (Persia became dominant)
    const horn2 = BABYLON.MeshBuilder.CreateCylinder('horn2', { 
      height: 2, 
      diameterTop: 0.1, 
      diameterBottom: 0.3 
    }, scene);
    horn2.position = new BABYLON.Vector3(-5.7, 2, 0.3);
    horn2.rotation.z = Math.PI / 12;
    horn2.material = hornMaterial;

    // Ram legs
    for (let i = 0; i < 4; i++) {
      const leg = BABYLON.MeshBuilder.CreateCylinder(`ramLeg${i}`, { 
        height: 1, 
        diameter: 0.3 
      }, scene);
      leg.position = new BABYLON.Vector3(
        -8.5 + (i % 2) * 1.5,
        -1,
        -0.5 + Math.floor(i / 2) * 1
      );
      leg.material = ramMaterial;
    }

    // Create the Goat (Greece) - Daniel 8:5
    const goatBody = BABYLON.MeshBuilder.CreateBox('goatBody', { width: 2, height: 1.2, depth: 1.5 }, scene);
    goatBody.position = new BABYLON.Vector3(8, 0, 0);
    const goatMaterial = new BABYLON.StandardMaterial('goatMaterial', scene);
    goatMaterial.diffuseColor = new BABYLON.Color3(0.9, 0.8, 0.7);
    goatBody.material = goatMaterial;

    const goatHead = BABYLON.MeshBuilder.CreateBox('goatHead', { width: 1, height: 0.8, depth: 1.2 }, scene);
    goatHead.position = new BABYLON.Vector3(9.2, 0.4, 0);
    goatHead.material = goatMaterial;

    // Notable horn between the eyes (Alexander the Great)
    const notableHorn = BABYLON.MeshBuilder.CreateCylinder('notableHorn', { 
      height: 1.8, 
      diameterTop: 0.15, 
      diameterBottom: 0.4 
    }, scene);
    notableHorn.position = new BABYLON.Vector3(9.5, 1.5, 0);
    notableHorn.rotation.z = Math.PI / 8;
    const notableHornMaterial = new BABYLON.StandardMaterial('notableHornMaterial', scene);
    notableHornMaterial.diffuseColor = new BABYLON.Color3(1, 0.8, 0.3);
    notableHornMaterial.emissiveColor = new BABYLON.Color3(0.2, 0.16, 0.06);
    notableHorn.material = notableHornMaterial;

    // Goat legs
    for (let i = 0; i < 4; i++) {
      const leg = BABYLON.MeshBuilder.CreateCylinder(`goatLeg${i}`, { 
        height: 1, 
        diameter: 0.25 
      }, scene);
      leg.position = new BABYLON.Vector3(
        7.5 + (i % 2) * 1.2,
        -1,
        -0.4 + Math.floor(i / 2) * 0.8
      );
      leg.material = goatMaterial;
    }

    // Four horns that replace the notable horn (Alexander's four generals)
    const fourHorns = [];
    const hornPositions = [
      { pos: new BABYLON.Vector3(9.3, 1.3, -0.4), name: 'Cassander' },
      { pos: new BABYLON.Vector3(9.3, 1.3, 0.4), name: 'Lysimachus' },
      { pos: new BABYLON.Vector3(9.7, 1.3, -0.4), name: 'Seleucus' },
      { pos: new BABYLON.Vector3(9.7, 1.3, 0.4), name: 'Ptolemy' }
    ];

    hornPositions.forEach((hornData, index) => {
      const smallHorn = BABYLON.MeshBuilder.CreateCylinder(`fourHorn${index}`, { 
        height: 0.8, 
        diameterTop: 0.08, 
        diameterBottom: 0.2 
      }, scene);
      smallHorn.position = hornData.pos;
      const smallHornMaterial = new BABYLON.StandardMaterial(`fourHornMaterial${index}`, scene);
      smallHornMaterial.diffuseColor = new BABYLON.Color3(0.6, 0.5, 0.4);
      smallHorn.material = smallHornMaterial;
      smallHorn.setEnabled(false); // Initially hidden
      fourHorns.push(smallHorn);
    });

    // Little horn (Antiochus Epiphanes/Rome)
    const littleHorn = BABYLON.MeshBuilder.CreateCylinder('littleHorn', { 
      height: 1.2, 
      diameterTop: 0.1, 
      diameterBottom: 0.25 
    }, scene);
    littleHorn.position = new BABYLON.Vector3(9.5, 1.8, 0.6);
    const littleHornMaterial = new BABYLON.StandardMaterial('littleHornMaterial', scene);
    littleHornMaterial.diffuseColor = new BABYLON.Color3(0.4, 0.2, 0.6);
    littleHornMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.05, 0.15);
    littleHorn.material = littleHornMaterial;
    littleHorn.setEnabled(false); // Initially hidden

    // Animation sequence
    let animationPhase = 0;
    let animationRunning = false;

    const runAnimation = () => {
      if (animationRunning) return;
      animationRunning = true;

      // Phase 1: Goat charges at ram
      const goatCharge = BABYLON.Animation.CreateAndStartAnimation(
        'goatCharge',
        goatBody,
        'position.x',
        30,
        60,
        8,
        -2,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      );

      // Move goat parts together
      BABYLON.Animation.CreateAndStartAnimation(
        'goatHeadCharge',
        goatHead,
        'position.x',
        30,
        60,
        9.2,
        -0.8,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      );

      BABYLON.Animation.CreateAndStartAnimation(
        'notableHornCharge',
        notableHorn,
        'position.x',
        30,
        60,
        9.5,
        -0.5,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      );

      setTimeout(() => {
        // Phase 2: Ram's horns broken
        horn1.setEnabled(false);
        horn2.setEnabled(false);
        
        // Create particle effect for broken horns
        const particleSystem = new BABYLON.ParticleSystem('hornBreak', 500, scene);
        particleSystem.particleTexture = new BABYLON.Texture('https://playground.babylonjs.com/textures/flare.png', scene);
        particleSystem.emitter = new BABYLON.Vector3(-6, 1.5, 0);
        particleSystem.minEmitBox = new BABYLON.Vector3(-0.5, 0, -0.5);
        particleSystem.maxEmitBox = new BABYLON.Vector3(0.5, 0, 0.5);
        particleSystem.color1 = new BABYLON.Color4(1, 0.8, 0.6, 1.0);
        particleSystem.color2 = new BABYLON.Color4(0.8, 0.6, 0.4, 1.0);
        particleSystem.minSize = 0.1;
        particleSystem.maxSize = 0.3;
        particleSystem.minLifeTime = 0.5;
        particleSystem.maxLifeTime = 1.0;
        particleSystem.emitRate = 300;
        particleSystem.start();

        setTimeout(() => {
          particleSystem.stop();
          
          // Phase 3: Notable horn broken, four horns appear
          notableHorn.setEnabled(false);
          fourHorns.forEach(horn => horn.setEnabled(true));
          
          setTimeout(() => {
            // Phase 4: Little horn appears and grows
            littleHorn.setEnabled(true);
            
            const hornGrowth = BABYLON.Animation.CreateAndStartAnimation(
              'hornGrowth',
              littleHorn,
              'scaling',
              30,
              60,
              new BABYLON.Vector3(0.1, 0.1, 0.1),
              new BABYLON.Vector3(1.5, 1.5, 1.5),
              BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
            );
            
            setTimeout(() => {
              animationRunning = false;
            }, 2000);
          }, 1500);
        }, 1000);
      }, 2000);
    };

    // Click to start animation
    scene.onPointerObservable.add((pointerInfo) => {
      if (pointerInfo.pickInfo?.hit) {
        runAnimation();
      }
    });

    // Add labels
    const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI');
    
    const addLabel = (text: string, position: BABYLON.Vector3, color: string) => {
      const label = new BABYLON.GUI.Rectangle();
      label.background = color;
      label.height = '50px';
      label.alpha = 0.9;
      label.widthInPixels = 200;
      label.cornerRadius = 5;
      label.thickness = 1;
      advancedTexture.addControl(label);
      
      const dummyMesh = new BABYLON.TransformNode('dummy', scene);
      dummyMesh.position = position;
      label.linkWithMesh(dummyMesh);
      label.linkOffsetY = -70;

      const text1 = new BABYLON.GUI.TextBlock();
      text1.text = text;
      text1.color = 'white';
      text1.fontSize = 11;
      label.addControl(text1);
    };

    addLabel('Ram with Two Horns\n(Medo-Persia)\nDaniel 8:3-4', new BABYLON.Vector3(-8, 2, 0), 'rgba(100, 150, 200, 0.8)');
    addLabel('Goat with Notable Horn\n(Greece - Alexander)\nDaniel 8:5-8', new BABYLON.Vector3(8, 2, 0), 'rgba(200, 150, 100, 0.8)');
    addLabel('Click anywhere to see\nthe prophetic battle\nunfold!', new BABYLON.Vector3(0, 4, 0), 'rgba(255, 100, 100, 0.8)');

    // Add ground
    const ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 30, height: 15 }, scene);
    const groundMaterial = new BABYLON.StandardMaterial('groundMaterial', scene);
    groundMaterial.diffuseColor = new BABYLON.Color3(0.4, 0.6, 0.3);
    ground.material = groundMaterial;
    ground.position.y = -2;

    // Add some terrain features
    const river = BABYLON.MeshBuilder.CreateBox('river', { width: 25, height: 0.2, depth: 2 }, scene);
    river.position = new BABYLON.Vector3(0, -1.8, -3);
    const riverMaterial = new BABYLON.StandardMaterial('riverMaterial', scene);
    riverMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.4, 0.8);
    riverMaterial.specularColor = new BABYLON.Color3(0.5, 0.7, 1);
    river.material = riverMaterial;
  };

  return (
    <BabylonScene 
      onSceneReady={onSceneReady} 
      id="ram-and-goat-canvas"
      className="w-full h-96 rounded-lg"
    />
  );
};

export default RamAndGoat;