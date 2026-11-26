///overide
ModPE.overrideTexture("images/mob/basilisc.png","http://i.imgur.com/xXBorSd.jpg");

ModPE.overrideTexture("images/mob/pomoouro.png","http://i.imgur.com/oJU4xYl.jpg ");

ModPE.overrideTexture("images/mob/edwiges.png","http://i.imgur.com/p6zCL93.jpg");

ModPE.overrideTexture("images/mob/fawkes.png","http://i.imgur.com/piZk1SY.jpg");

ModPE.overrideTexture("images/mob/trasgo.png"," http://i.imgur.com/fXudW8A.jpg");

ModPE.overrideTexture("images/mob/trasgofloresta.png","http://i.imgur.com/3O6caCh.jpg");

ModPE.overrideTexture("images/mob/bowtruckle.png","http://i.imgur.com/oN0XviV.jpg");

ModPE.overrideTexture("images/mob/snake.png","http://i.imgur.com/9YH5hXn.jpg");

ModPE.overrideTexture("images/mob/mandrake.png","http://i.imgur.com/XnmBcdT.jpg");

ModPE.overrideTexture("images/mob/firetail.png","http://i.imgur.com/T709fMJ.jpg");

ModPE.overrideTexture("images/mob/dobby.png","http://i.imgur.com/ezqjVaV.jpg");

ModPE.overrideTexture("images/mob/bludger.png","http://i.imgur.com/M5pTyCp.jpg");

ModPE.overrideTexture("images/mob/quaffle.png","http://i.imgur.com/bpKB5je.jpg");

ModPE.overrideTexture("images/mob/voldemort.png","http://i.imgur.com/8WBuNTb.jpg");

ModPE.overrideTexture("images/mob/patronum.png","http://i.imgur.com/HrHLklq.jpg");

///mobs
var basilic;
var aluna;
var owl;
var fenix;
var trasgo;
var tverde;
var tronco;
var snake;
var crab;
var mandrake;
var dino;
var dobby;
var goles;
var balaco;

///ovos

ModPE.setItem(540,"ovobasilisco",0,"Invocar Basilisco");

ModPE.setItem(541,"ovocoruja",0,"Gaiola com Coruja");

ModPE.setItem(542,"ovofenix",0,"Invocar Fênix");

ModPE.setItem(543,"ovotroll",0,"Invocar Trasgo");

ModPE.setItem(544,"ovotrollverde",0,"Invocar Trasgo da Floresta");

ModPE.setItem(545,"ovotronquilho",0,"Sementes de Tronquilho");

ModPE.setItem(546,"nagini",0,"Nagini");

ModPE.setItem(563,"ovomandrake",0,"Mandrágora");

ModPE.setItem(564,"ovodragao",0,"Invocar Dragão");

ModPE.setItem(565,"ovodobby",0,"Invocar Elfo Doméstico");

///render

function addbasilicRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 0, 0);
body.addBox(-3,17,30, 6, 6, 13);
body.setTextureOffset( 0, 0);
body.addBox(-5,14,0, 10, 10, 19);
body.setTextureOffset( 0, 0);
body.addBox(-4.5,14.5,19, 9, 9, 11);
body.setTextureOffset( 0, 0);
body.addBox(-5,7,-18, 10, 1, 5);
body.setTextureOffset( 0, 0);
body.addBox(-5,11,-3, 10, 8, 8);
body.setTextureOffset( 0, 0);
body.addBox(-5,8,-7, 10, 8, 8);
body.setTextureOffset( 0, 0);
body.addBox(-5,3,-10, 10, 10, 8);
body.setTextureOffset( 0, 0);
body.addBox(-5,-1,-13, 10, 10, 8);
body.setTextureOffset( 0, 0);
body.addBox(-5,2,-19, 10, 4, 6);
body.setTextureOffset( 0, 0);
body.addBox(-2.5,-3,-6.5, 1, 2, 1);
body.setTextureOffset( 0, 0);
body.addBox(-4,-3,-6.5, 1, 2, 1);
body.setTextureOffset( 0, 0);
body.addBox(3,-3,-6.5, 1, 2, 1);
body.setTextureOffset( 0, 0);
body.addBox(1.5,-3,-6.5, 1, 2, 1);
body.setTextureOffset( 0, 0);
body.addBox(-0.5,-3,-6.5, 1, 2, 1);
}
var basilicRenderType = Renderer.createHumanoidRenderer();
addbasilicRenderType(basilicRenderType);

function addSerpienteRenderType(renderer) 
{

var model = renderer.getModel();
var var2 = 0;

var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(0.5, 19.5, -8, 2, 2, 27, var2);


}
 
var serpienteRenderType = Renderer.createHumanoidRenderer();
addSerpienteRenderType(serpienteRenderType);

function addcrabRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureSize(64,32);
body.setTextureOffset( 0, 12);
body.addBox(-5,17,-2, 10, 7, 10);
body.setTextureOffset( 18, 0);
body.addBox(-20,22,5, 16, 2, 2);
body.setTextureOffset( 18, 0);
body.addBox(5,22,5, 16, 2, 2);
body.setTextureOffset( 23, 7);
body.addBox(-4,16,-4, 2, 2, 1);
body.setTextureOffset( 29, 7);
body.addBox(2,16,-4, 2, 2, 1);
body.setTextureOffset( 18, 0);
body.addBox(-10,21,-5, 8, 2, 2);
body.setTextureOffset( 18, 0);
body.addBox(4,20.5,-4, 8, 2, 2);
body.setTextureOffset( 0, 0);
body.addBox(-11,19,-11, 5, 4, 6);
body.setTextureOffset( 0, 0);
body.addBox(7,19,-10, 5, 4, 6);
body.setTextureOffset( 18, 0);
body.addBox(5,22,-2, 16, 2, 2);
body.setTextureOffset( 18, 0);
body.addBox(5,22,2, 16, 2, 2);
body.setTextureOffset( 18, 0);
body.addBox(-20,22,-2, 16, 2, 2);
body.setTextureOffset( 0, 0);
body.addBox(-3,18,-3, 6, 6, 1);
body.setTextureOffset( 18, 0);
body.addBox(-20,22,2, 16, 2, 2);
}
var crabRenderType = Renderer.createHumanoidRenderer();
addcrabRenderType(crabRenderType);

function addtrollRenderType(renderer)
{

var modelG = renderer.getModel();
var varG = 0;

var headG = modelG.getPart("head").clear();
var bodyG = modelG.getPart("body").clear();
var rArmG = modelG.getPart("rightArm").clear();
var lArmG = modelG.getPart("leftArm").clear();
var rLegG = modelG.getPart("rightLeg").clear();
var lLegG = modelG.getPart("leftLeg").clear();

headG.clear();
headG.setTextureOffset(0, 0, true);
headG.addBox(-4, -8, -4, 8, 8, 8, varG);

bodyG.clear();
bodyG.setTextureOffset(22, 10, true);
bodyG.addBox(-5.5, 0, -5, 11, 12, 10, varG);

rArmG.clear();
rArmG.setTextureOffset(0, 17, true);
rArmG.addBox(-4.5, -2, -3, 4, 11, 4, varG);

lArmG.clear();
lArmG.setTextureOffset(0, 17, true);
lArmG.addBox(0.5, -2, -3, 4, 11, 4, varG);

rLegG.clear();
rLegG.setTextureOffset(0, 17, true);
rLegG.addBox(-2, 0, -3, 4, 11, 4, varG);

lLegG.clear();
lLegG.setTextureOffset(0, 17, true);
lLegG.addBox(-2, 0, -3, 4, 11, 4, varG);

}

var trollRenderType = Renderer.createHumanoidRenderer();
addtrollRenderType(trollRenderType);

function adddrakeRenderType(renderer)
{

var modelD = renderer.getModel();
var varD = 0;

var headD = modelD.getPart("head").clear();
var bodyD = modelD.getPart("body").clear();
var rArmD = modelD.getPart("rightArm").clear();
var lArmD = modelD.getPart("leftArm").clear();
var rLegD = modelD.getPart("rightLeg").clear();
var lLegD = modelD.getPart("leftLeg").clear();

headD.clear();
headD.setTextureOffset(0, 0, true);
headD.addBox(-5, -2, -5, 10, 10, 10, varD);
headD.setTextureOffset(30, 20, true);
headD.addBox(-1, 4, -6, 2, 2, 1, varD);
headD.setTextureOffset(32, 27, true);
headD.addBox(-2, 3, -7, 4, 4, 1, varD);

bodyD.clear();
bodyD.setTextureOffset(0, 20, true);
bodyD.addBox(-3, 8, -1, 6, 8, 4, varD);

rArmD.clear();
rArmD.setTextureOffset(20, 23, true);
rArmD.addBox(-0.5, 6, -1, 3, 6, 3, varD);

lArmD.clear();
lArmD.setTextureOffset(20, 23, true);
lArmD.addBox(-2, 6, -1, 3, 6, 3, varD);

rLegD.clear();
rLegD.setTextureOffset(20, 23, true);
rLegD.addBox(-1, 4, -1, 3, 6, 3, varD);

lLegD.clear();
lLegD.setTextureOffset(20, 23, true);
lLegD.addBox(-2, 4, -1, 3, 6, 3, varD);

}

var drakeRenderType = Renderer.createHumanoidRenderer();
adddrakeRenderType(drakeRenderType);

function adddinoRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(0, 0, 0, 5, 5, 5);
head.setTextureOffset(40, 0);
head.addBox(0, -3, 3, 0, 3, 2);
head.setTextureOffset(40, 0);
head.addBox(0, -4, 4, 0, 4, 1);
head.setTextureOffset(40, 0);
head.addBox(5, -3, 3, 0, 3, 2);
head.setTextureOffset(40, 0);
head.addBox(5, -4, 4, 0, 4, 1);
head.setTextureOffset(20, 0);
head.addBox(0, 1, -5, 5, 4, 5);
body.clear();
body.setTextureOffset(40, 0);
body.addBox(0, 1, 5, 5, 4, 3);
body.setTextureOffset(40, 0);
body.addBox(-1, 0, 8, 7, 7, 5);
body.setTextureOffset(40, 0);
body.addBox(-1, 0, 13, 7, 7, 5);
body.setTextureOffset(40, 0);
body.addBox(-1, 0, 18, 7, 7, 5);
body.setTextureOffset(40, 0);
body.addBox(-1, 0, 23, 7, 7, 5);
body.setTextureOffset(40, 0);
body.addBox(-1, 2, 28, 7, 5, 5);
body.setTextureOffset(40, 0);
body.addBox(0, 3, 33, 5, 4, 4);
body.setTextureOffset(40, 0);
body.addBox(-1, -3, 8, 1, 3, 3);
body.setTextureOffset(40, 0);
body.addBox(5, -3, 8, 1, 3, 3);
body.setTextureOffset(40, 0);
body.addBox(-3, 3, 18, 4, 6, 6);
body.setTextureOffset(40, 0);
body.addBox(-5, 3, 24, 2, 8, 2);
body.setTextureOffset(40, 0);
body.addBox(4, 3, 18, 4, 6, 6);
body.setTextureOffset(40, 0);
body.addBox(8, 3, 24, 2, 8, 2);
body.setTextureOffset(0, 22, true);
body.addBox(-25, 2, 13, 24, 0, 10);
body.setTextureOffset(24, 22, true);
body.addBox(6, 2, 13, 24, 0, 10);
lArm.clear();
rArm.clear();
lLeg.clear();
rLeg.clear();

}
var dinoRenderType = Renderer.createHumanoidRenderer();
adddinoRenderType(dinoRenderType);

function adddobbyRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, 3, -2, 7, 8, 7);

body.clear();
body.setTextureOffset(16, 15, true);
body.addBox(-2, 11, -1, 7, 10, 7);
body.setTextureOffset(28, 0, true);
body.addBox(1.5, 16, 6, 0, 5, 9);

rArm.clear();
rArm.setTextureOffset(52, 0);
rArm.addBox(2, 11, 0, 2, 5, 3);

lArm.clear();
lArm.setTextureOffset(52, 0);
lArm.addBox(-1, 11, 0, 2, 5, 3);

rLeg.clear();
rLeg.setTextureOffset(0, 16);
rLeg.addBox(-1, 7, 0, 3, 5, 3);

lLeg.clear();
lLeg.setTextureOffset(0, 24);
lLeg.addBox(1, 7, 0, 3, 5, 3);

}

var dobbyRenderType = Renderer.createHumanoidRenderer();
adddobbyRenderType(dobbyRenderType);

///use item


var basilic= Level.spawnMob(x,y+1,z,40,"mob/basilic.png");
Entity.setRenderType(basilic,basilicRenderType.renderType);
Entity.setHealth(basilic, 780);
Entity.setCollisionSize(basilic,2,2)
Entity.addEffect(basilic,MobEffect.damageResistance, 99999*20, 10, false, true);
Entity.addEffect(basilic,MobEffect.movementSpeed ,99999*10, 10, false, true);

}

if(itemId==507){
var aluna = Level.spawnMob(x,y+1,z,36,"mob/voldemort.png");
Entity.setRenderType(aluna,36); 
Entity.setHealth(aluna,50);
clientMessage("§3Quem me Chamas?");
Entity.addEffect(aluna, MobEffect.regeneration, 99999*20, 10, false, true);
Entity.addEffect(aluna, MobEffect.damageBoost, 99999*20, 10, false, true);
Entity.addEffect(aluna, MobEffect.movementSpeed, 99999*20, 10, false, true);
Entity.setCarriedItem(aluna, 508, 3, 0);
}

if(itemId==541){
var owl = Level.spawnMob(x,y+1,z,19,"mob/edwiges.png");
Entity.setRenderType(owl,19); 
Entity.setHealth(owl,5);

}

if(itemId==542){
var fenix = Level.spawnMob(x,y+1,z,19,"mob/fawkes.png");
Entity.setRenderType(fenix,19); 
Entity.setHealth(fenix,5);
var x = getPlayerX();
var y = getPlayerY();
var z = getPlayerZ();
Level.addParticle(ParticleType.mobFlame,x,y-1,z,0,0,0);

}

if(itemId==543){
var trasgo = Level.spawnMob(x,y+1,z,36,"mob/trasgo.png");
Entity.setRenderType( trasgo,trollRenderType.renderType); 
Entity.setHealth(trasgo,20);
Entity.setCollisionSize(trasgo,2,2)
Entity.addEffect(trasgo, MobEffect.regeneration, 99999*20, 10, false, true);
Entity.addEffect(trasgo, MobEffect.damageBoost, 99999*20, 5, false, true);
Entity.setCarriedItem(trasgo, 280, 3, 0);
}

if(itemId==544){
var tverde = Level.spawnMob(x,y+1,z,36,"mob/trasgofloresta.png");
Entity.setRenderType( tverde,trollRenderType.renderType); 
Entity.setHealth(tverde,20);
Entity.setCollisionSize(tverde,2,2)
Entity.addEffect(tverde, MobEffect.regeneration, 99999*20, 10, false, true);
Entity.addEffect(tverde, MobEffect.damageBoost, 99999*20, 5, false, true);
Entity.setCarriedItem(tverde, 280, 3, 0);
}


if(itemId==545){
var tronco = Level.spawnMob(x,y+1,z,32,"mob/bowtruckle.png");
Entity.setRenderType(tronco,32); 
Entity.setHealth(tronco,20);
Entity.addEffect(tronco, MobEffect.regeneration, 99999*20, 10, false, true);
Entity.addEffect(tronco, MobEffect.fireResistance, 99999*20, 5, false, true);
Entity.setCarriedItem(tronco, 280, 3, 0);
}
if(itemId==546){
var snake= Level.spawnMob(x,y+1,z,40,"mob/snake.png");
Entity.setRenderType(snake,serpienteRenderType.renderType);
Entity.setHealth(snake, 780);
Entity.setCollisionSize(snake,2,2)

}

 
if(itemId==502){
var pomo = Level.spawnMob(x,y+1,z,19,"mob/pomoouro.png");
Entity.setRenderType(pomo,19); 
Entity.setHealth(pomo,1);

}

if(itemId==553){
	Entity.addEffect(getPlayerEnt(), MobEffect.regeneration ,10*100, 4, false, true);
	efecto=true;

}




 
if(itemId==563){
	 mandrake = Level.spawnMob( x,y+1,z, 15,"mob/mandrake.png");
Entity.setRenderType(mandrake,drakeRenderType.renderType); 
 Entity.setHealth(mandrake, 5);
 mandrakec=0;}
 
if(itemId==564){
	  dino = Level.spawnMob( x,y+1,z, 43,"mob/firetail.png");
Entity.setRenderType(dino,dinoRenderType.renderType); 
 Entity.setHealth(dino, 10);
 dinoc=0;}
 
if(itemId==565){
	  dobby= Level.spawnMob( x,y+1,z, 15,"mob/dobby.png");
Entity.setRenderType(dobby,dobbyRenderType.renderType); 
 Entity.setHealth(dobby, 20);
 dobbyc=0;
 
}

if(itemId==571){
var balaco = Level.spawnMob(x,y+1,z,19,"mob/bludger.png");
Entity.setRenderType(balaco,19); 
Entity.setHealth(balaco,1);

}

if(itemId==572){
var goles = Level.spawnMob(x,y+1,z,19,"mob/quaffle.png");
Entity.setRenderType(goles,19); 
Entity.setHealth(goles,1);

}
}

function attackHook(attacker, victim){


}

function deathHook(murderer, victim){
if(Entity.getMobSkin(victim)=="images/mob/voldemort.png")
{
Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim),1000,508,1,0);
}
}

function toolUse(maxDamage,id) {
var pcid=Player.getCarriedItemData();
if(pcid!==maxDamage){
Entity.setCarriedItem(getPlayerEnt(),id,1,pcid+1);
}else if(pcid==maxDamage) {
Level.playSound(Player.getX(),Player.getY(),Player.getZ(),"random.break",2);
Entity.setCarriedItem(getPlayerEnt(),0,0,1);
}
}

Item.addCraftRecipe(550, 1, 0, [266 , 3, 0 ,20 ,1 ,0 ,566 ,1 ,0]) ;

Item.addCraftRecipe(546, 1, 0, [266 , 4, 0 ,567 ,1 ,0 ]) ;