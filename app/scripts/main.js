(function() {
  
  'use strict';

  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 500;
  camera.position.x = -300;

  var renderer = new THREE.WebGLRenderer();

  renderer.setClearColor( 0xffff00, 1);

  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  var geometry = new THREE.BoxGeometry(200, 200, 50);
  var stroke = new THREE.MeshBasicMaterial({
    wireframe: true,
    wireframeLinewidth: 5,
    color: 0x000000
  });
  var fill = new THREE.MeshLambertMaterial({
    emissive: 0xffffff
  });

  var cube = new THREE.SceneUtils.createMultiMaterialObject(geometry, [fill, stroke]);

  scene.add(cube);
  

  function render() {
    requestAnimationFrame(render);

    cube.rotation.x += 0.01;

    renderer.render(scene, camera);
  }

  render();


})();
