const t=Matter.Engine,e=Matter.World,o=Matter.Bodies,n=Matter.Events;const r=t.create();const i=r.world;i.gravity.x=0;i.gravity.y=0;const s=window.innerWidth;const a=window.innerHeight;const l=Matter.Render.create({element:document.body,engine:r,options:{width:s,height:a,wireframes:false,background:"#FFF5E4"}});const d=o.circle(s/2-7,a/2,window.innerWidth/2-10,{isSensor:true,isStatic:true,render:{fillStyle:"rgb(180, 240, 228)",strokeStyle:"transparent"}});e.add(i,d);const c=o.circle(s/2-7,a/2,window.innerWidth/4,{isSensor:true,isStatic:true,render:{fillStyle:"rgb(230, 148, 148)",strokeStyle:"transparent"}});e.add(i,c);const y=o.circle(s/2,a/2,window.innerWidth/8,{restitution:0,render:{fillStyle:"rgb(200, 200, 225)",strokeStyle:"transparent"}});e.add(i,y);const p=o.circle(s/2,a/2,window.innerWidth/12,{restitution:1,render:{fillStyle:"rgb(255, 209, 209)",strokeStyle:"transparent"}});e.add(i,p);let u=0;let m=Date.now();let M=0;let f=0;let h=0;const b=.04;let w=b;let S=.12;let g=1.00001;let v=.005;const B=.02;const x=.023;const E=document.createElement("div");E.style.position="absolute";E.style.top="100px";E.style.left="50%";E.style.transform="translateX(-50%)";E.style.fontSize="72px";E.style.color="black";E.style.fontFamily="palatino, serif";E.style.whiteSpace="pre";document.body.appendChild(E);n.on(r,"collisionStart",t=>{const e=t.pairs;for(let t=0;t<e.length;t++){const o=e[t];if(o.bodyA===p&&o.bodyB===c||o.bodyA===c&&o.bodyB===p){u=0}}});document.addEventListener("mousemove",t=>{Matter.Body.setPosition(y,{x:t.clientX,y:t.clientY})});document.addEventListener("touchmove",t=>{t.preventDefault();const e=t.touches[0];Matter.Body.setPosition(y,{x:e.clientX,y:e.clientY})});Matter.Events.on(r,"beforeUpdate",t=>{E.textContent="Score: "+Math.floor(M)+"\r\n";if(f>0)E.textContent+="Top Score: "+Math.floor(f);const e=Matter.Vector.sub(c.position,p.position);Matter.Body.applyForce(p,p.position,Matter.Vector.mult(Matter.Vector.normalise(e),w));if(Math.random()<v&&M>10){console.log("random force");const o=Math.random()*(x-B)+B;const n=Math.random()*(x-B)+B;const r={x:o,y:n};Matter.Body.applyForce(p,p.position,r,w*10)}if(Matter.Bounds.contains(c.bounds,p.position)){u+=(t.timestamp-h)/1e3;if(u>3){console.log("Game Over! score:",M,w);if(M>f){f=M}m=Date.now();u=0;M=0;w=b;Matter.Body.setPosition(p,{x:Math.random()*s,y:Math.random()*a})}}if(Matter.Bounds.contains(d.bounds,p.position)&&!Matter.Bounds.contains(c.bounds,p.position)){M+=S}h=t.timestamp;w*=g});t.run(r);Matter.Render.run(l);