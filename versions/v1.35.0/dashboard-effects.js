const dashboardObserver=new MutationObserver(()=>{const root=document.querySelector('.data-dashboard');if(root&&!root.dataset.enhanced)enhanceDashboard(root)});
dashboardObserver.observe(document.querySelector('#content'),{childList:true,subtree:true});
async function enhanceDashboard(root){
 root.dataset.enhanced='true';
 root.insertAdjacentHTML('afterbegin','<canvas class="dashboard-space" aria-hidden="true"></canvas><div class="mesh-orb orb-a"></div><div class="mesh-orb orb-b"></div>');
 const items=[...root.querySelectorAll('.data-summary,.section-title,.northstar-card,.guardrail-card,.table-card')];
 items.forEach((el,i)=>{el.style.setProperty('--stagger',`${Math.min(i,8)*55}ms`);el.classList.add('reveal-item')});
 try{
  const [{animate,stagger},THREE]=await Promise.all([
   import('https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm'),
   import('https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js')
  ]);
  animate(items,{opacity:[0,1],y:[14,0]},{duration:.55,delay:stagger(.055),easing:[.22,1,.36,1]});
  const canvas=root.querySelector('.dashboard-space'),scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(45,1,.1,100),renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
  camera.position.z=8;
  const geometry=new THREE.BufferGeometry(),positions=new Float32Array(150*3);
  for(let i=0;i<positions.length;i+=3){positions[i]=(Math.random()-.5)*12;positions[i+1]=(Math.random()-.5)*7;positions[i+2]=(Math.random()-.5)*5}
  geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));
  const points=new THREE.Points(geometry,new THREE.PointsMaterial({color:0x7475e8,size:.025,transparent:true,opacity:.28}));
  scene.add(points);
  const resize=()=>{const box=root.getBoundingClientRect();renderer.setSize(box.width,box.height,false);camera.aspect=box.width/Math.max(box.height,1);camera.updateProjectionMatrix()};
  resize();new ResizeObserver(resize).observe(root);
  const tick=()=>{if(!root.isConnected){renderer.dispose();return}points.rotation.y+=.0008;points.rotation.x+=.00015;renderer.render(scene,camera);requestAnimationFrame(tick)};tick();
 }catch{root.classList.add('effects-fallback')}
}
