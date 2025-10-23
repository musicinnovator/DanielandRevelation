import React, { useEffect, useRef } from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import 'babylonjs-materials';

interface BabylonSceneProps {
  onSceneReady: (scene: BABYLON.Scene) => void;
  onRender?: (scene: BABYLON.Scene) => void;
  id: string;
  className?: string;
}

const BabylonScene: React.FC<BabylonSceneProps> = ({ onSceneReady, onRender, id, className }) => {
  const reactCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const { current: canvas } = reactCanvas;

    if (!canvas) return;

    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    if (scene.isReady()) {
      onSceneReady(scene);
    } else {
      scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
    }

    engine.runRenderLoop(() => {
      if (typeof onRender === 'function') onRender(scene);
      scene.render();
    });

    const resize = () => {
      scene.getEngine().resize();
    };

    if (window) {
      window.addEventListener('resize', resize);
    }

    return () => {
      scene.getEngine().dispose();

      if (window) {
        window.removeEventListener('resize', resize);
      }
    };
  }, [onRender, onSceneReady]);

  return <canvas ref={reactCanvas} id={id} className={className} />;
};

export default BabylonScene;