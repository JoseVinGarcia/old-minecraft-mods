
function addScareRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureSize(128,64);
body.setTextureOffset( 0, 0,true);
body.addBox(-1,3,-1, 1, 21, 1);
body.setTextureOffset( 40, 29);
body.addBox(-4,-2,-4, 7, 5, 7);
body.setTextureOffset( 49, 23);
body.addBox(-1,-4,-1, 1, 2, 1);
body.setTextureOffset( 26, 0);
body.addBox(0,4,-1, 15, 1, 1);
body.setTextureOffset( 63, 0);
body.addBox(-16,4,-1, 15, 1, 1);
body.setTextureOffset( 42, 43);
body.addBox(-3,3.9,-3, 5, 12, 5);
body.setTextureOffset( 31, 7);
body.addBox(-12,3.9,-2, 9, 8, 3);
body.setTextureOffset( 71, 7);
body.addBox(2,3.9,-2, 9, 8, 3);
body.setTextureOffset( 97, 0);
body.addBox(-15,3.9,-1, 4, 9, 1);
body.setTextureOffset( 97, 0);
body.addBox(11,4,-1, 4, 16, 1);
}
var ScareRenderType = Renderer.createHumanoidRenderer();
addScareRenderType(ScareRenderType);

///MEATY
function addMeatyRenderType(renderer){

var var2 = 0;
var model = renderer.getModel();
 
var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

body.setTextureSize(64,64);
head.setTextureSize(64,64);
rLeg.setTextureSize(64,64);
lLeg.setTextureSize(64,64);
rArm.setTextureSize(64,64);
lArm.setTextureSize(64,64);

 
head.clear();

body.clear();
body.setTextureOffset(0, 0); 
body.addBox(-5, 16, 0, 10, 8, 9);
body.setTextureOffset(0, 19); 
body.addBox(-4, 13, 0.5, 8, 3, 8);
body.setTextureOffset(0, 0); 
body.addBox(-1, 8, 3.5, 2, 5, 2);
body.setTextureOffset(40, 1); 
body.addBox(-2.5, 7, 3.5, 2, 2, 2);
body.setTextureOffset(40, 1); 
body.addBox(0.5, 7, 3.5, 2, 2, 2);
body.setTextureOffset(0, 32); 
body.addBox(3, 18, -1, 3, 3, 2);
body.setTextureOffset(0, 32); 
body.addBox(-6, 18, -1, 3, 3, 2);

rArm.clear();

lArm.clear();


rLeg.clear();


lLeg.clear();


}
var MeatyRenderType = Renderer.createHumanoidRenderer();
addMeatyRenderType(MeatyRenderType);

//ITENS

ModPE.setItem(1000,"scarecrow",0,"Espantalho");
Player.addItemCreativeInv(1000,5)
Item.setHandEquipped(1000,1);

ModPE.setItem(1006,"darkstomper",0,"Dark Stomper");
Player.addItemCreativeInv(1006,5)
Item.setHandEquipped(1006,1);
Item.addCraftRecipe(1006, 1, 0, [276 ,1 ,0 ,266 ,4 ,0 ,370 ,2 ,0 ,331 ,2 ,0]);

///SACO DE FEDOR
Item.defineThrowable(1001,"sacofedor",0,"Bomba de Fedor",64);
Player.addItemCreativeInv(1001,5);

function customThrowableHitEntityHook(projectile, itemId, target){
	if(itemId==1001){

}}

///USE ITEM
function useItem(x,y,z,itemId,block,side)
{
if(itemId==1000)
{ clot = 
Level.spawnMob(x,y+1,z,15,"mob/scarecrow.png");
Entity.setRenderType(clot,ScareRenderType.renderType);
}

if(itemId==1001){
var mag= Level.spawnMob(x,y+1,z,36,"mob/knight.png");
Entity.setRenderType(mag,EntityRenderType.zombiePigman);
Entity.setHealth(mag, 100);
Entity.setCarriedItem(mag,267, 3, 0);
}
}



///TEST ARMOUR
Item.defineArmor(1002,"coroanegra", 0,
"Coroa Negra",
			"armor/hell_1.png", 2, 500, ArmorType.helmet);
Item.defineArmor(1003,"peitoralhell", 0, "Peitoral do Inferno",
			"armor/hell_1.png", 4, 500, ArmorType.chestplate);
Item.defineArmor(1004,"helllegs", 0, "Calça do Inferno",
			"armor/hell_2.png", 6, 85, ArmorType.leggings);
Item.defineArmor(1005,"hellbots", 0, "Botas Infernais",
			"armor/hell_1.png", 3, 85, ArmorType.boots);

Player.addItemCreativeInv(1003,5);
Player.addItemCreativeInv(1002,5);
Player.addItemCreativeInv(1004,5);
Player.addItemCreativeInv(1005,5);