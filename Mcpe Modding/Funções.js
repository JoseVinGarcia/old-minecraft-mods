//sistema de mana

function useItem(x,y,z,i,b,s){
if(i==ID DO ITEM){
VAR Q VC ESCOLHEU=true;
}}

function modTick(){
if(VAR Q VC ESCOLHEU==true){
if(mana==true){
time++;
if(time==SEGUNDOS Q VAI DEMORAR PRA ACONTECER*20){
//FUNCAO



mana=false;
time=0;
}}}

if(mana==false){
time++;
if(time==1*20){
ModPE.showTipMessage("carregando mana");
}
if(time==7*20){
ModPE.showTipMessage("mana carregada");
mana=true;
VAR Q VC ESCOLHEU=false;
time=0;
}}}

//BRILHO DE ENCANTAMENTO

Item.setProperties(ID,{"foil":true});
//(Embaixo do Item)

//LANÇAR FRECHA

function useItem(x,y,z,item,block)
{
if(item==ID DO ITEM Q VOÇÊ QUER USAR PRA LANÇAR A FLECHA)
{
if(Player.getCarriedItemData() < QUANTIDADE DE VEZES Q VOCÊ VAI USAR) Entity.setCarriedItem(Player.getEntity(),ID DO ITEM Q VOÇÊ QUER USAR PRA LANÇAR A FLECHA, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
else 
{
/*Level.playSoundEnt(Player.getEntity(), "SOM Q VC QUER Q FAÇA QND LANÇAR MAS NN PRECISA", 100, 100);*/
Player.clearInventorySlot(Player.getSelectedSlotId());
}
if(item==ID DO ITEM Q VOÇÊ QUER USAR PRA LANÇAR A FLECHA&&Player.getCarriedItemData()==0)
{
Player.clearInventorySlot(Player.getSelectedSlotId());
}
var playerYaw = Entity.getYaw(Player.getEntity()); 
var playerPitch = Entity.getPitch(Player.getEntity()); 
{
 if(item==ID DO ITEM Q VOÇÊ QUER USAR PRA LANÇAR A FLECHA)
{
Level.playSoundEnt(Player.getEntity(), "random.fuse", 100, 100);
velY = Math.sin((playerPitch - 180) / 180 * Math.PI); 
            velX = 2.5 * (Math.sin(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI)); 
            velY = 0.3 * (Math.sin(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI)); 
            velZ = 2.5 * (-1 * Math.cos(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI)); 
           var fire  = Level.spawnMob(Player.getX() + Math.sin(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI),Player.getY()+0.1,Player.getZ() + -1 * Math.cos(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI) ,ID DA ENTIDADE Q VC QUISER LANÇAR);
            setVelX(fire,velX); 
            setVelY(fire,velY); 
            setVelZ(fire,velZ); 
} 
}
}
}


//ESTEIRA/TRAMPOLIM

z=setVelZ
x=setVelX

if(getTile(x,y-2,z)==ID DO BLOCO Q VC VAI PISAR){
xOUz(getPlayerEnt(), VELOCIDADE EXEMPLO: 0.1 OU -1.0 OU 1.0);


//RENDER TYPE

Entity.setRenderType(fire, EntityRenderType.experienceOrb);


//OPACIDADE

Block.setLightOpacity(ID DO BLOCO,true)


//FLOR

;Block.setRenderLayer(ID DO BLOCO,true);


//MUDAR DE BLOCO

function useItem(x,y,z,i,b,s){
    if (i == ID DO ITEM){
if(b==ID DO PRIMEIRO BLOCO BLOCO){
        Level.setTile(x,y+0.1,z,ID DO SEGUNDO BLOCO) }}}
if (i == ID DO ITEM){
if(b==ID DO SEGUNDO BLOCO){
        Level.setTile(x,y+0.1,z,ID DO OUTRO PRIMEIRO BLOCO) }}}
        
        
//MONTAR EM UM MOB
function
attackHook(attacker,victim){
if(Player.getCarriedItem() == ID DO ITEM Q VC VAI USAR PARA MONTAR NO MOB){
if(victim==VARIAVEL DO MOB){
Entity.rideAnimal(Player.getEntity(),VARIAVEL DO MOB);
}}}


//Vassoura Voadora(mount voa)

var vuelo;
var isOnvuelo = false;
var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var vueloSpeed = 0.5;
var rotFix;
var vueloonmap = false;


var timer = 0;
var gasAmount = 1;

function addMobToRenderer(renderer){
model = renderer.getModel();

model.getPart("head").clear();
model.getPart("body").clear();
model.getPart("rightArm").clear();
model.getPart("leftArm").clear();
model.getPart("rightLeg").clear();
model.getPart("leftLeg").clear();

body = model.getPart("body");
body.setTextureSize(512,256);

body.setTextureOffset(150, 0);
body.addBox(-21, 3, -21 , 42, 5, 42);
body.setTextureOffset(0, 0);
body.addBox(-15, -3, 7 , 30, 3, 8);
body.setTextureOffset(150, 150);
body.addBox(-18, 0, -18 , 36, 3, 36);
body.setTextureOffset(150, 150);
body.addBox(-18, 8, -18 , 36, 3, 36);
/*body.setTextureOffset(150, 150);
body.addBox(-12, 14, -12 , 24, 2, 24);*/
body.setTextureOffset(0, 0);
body.addBox(7, -3, -7 , 8, 3, 14);
body.setTextureOffset(0, 0);
body.addBox(-15, -3, -15 , 30, 3, 8);
body.setTextureOffset(0, 0);
body.addBox(-15, -3, -7 , 8, 3, 14);
}


ModPE.setItem(322,"blaze_rod",0,"Escoba Magica");

Item.addShapedRecipe(322,1,0,["d  "," d ","  c"],["d",280,0,"c",296,0]);

function attackHook(attacker , victim){

if(attacker == vuelo){
preventDefault();
}
if(victim == vuelo){
Level.dropItem(Entity.getX(vuelo) , Entity.getY(vuelo) , Entity.getZ(vuelo) , 0 , 322 , 1 , 0);
Entity.remove(vuelo);
vueloonmap = false;
ModPE.saveData("vueloonmap","false");
}
}




function useItem(x,y,z,i,b) {
var block = getTile(x,y+1,z);

if(i == 322 && vueloonmap == true){
}
if(i == 322 && vueloonmap == false) {

vuelo = Level.spawnMob(x,y+1,z,11);

Entity.setMobSkin(vuelo, "mob/UFO/light_blue_UFO.png");

Entity.setRenderType(vuelo , Renderer.renderType);

Entity.setHealth(vuelo , 10000);

preventDefault();
Entity.rideAnimal(getPlayerEnt(),vuelo);
isOnvuelo = true;
//Entity.rideAnimal(getPlayerEnt(),vuelo);
//isOnvuelo = true;

vueloonmap = true;
ModPE.saveData("vueloonmap","true");
Player.addItemInventory(322,-1,0);
}

}

function modTick() {

timer++;

if(ModPE.readData("vueloonmap") == "true" && timer > 50 && timer < 51){
Level.dropItem(getPlayerX() , getPlayerY() , getPlayerZ() , 0 , 322 , 1 , 0);
ModPE.saveData("vueloonmap","false");
}




if(getYaw() > 360 || getYaw() < -360){
setRot(getPlayerEnt(),0,getPitch());
}



if(gasAmount < 0 ){
isOnvuelo = true;
unmannedvuelo();
}



if(getPlayerX() <  Entity.getX(vuelo) -1 || getPlayerX() >  Entity.getX(vuelo) +1  || getPlayerZ() <  Entity.getZ(vuelo) -1 || getPlayerZ() >  Entity.getZ(vuelo) +1){
isOnvuelo = false;
unmannedvuelo();
}


if(isOnvuelo == true) {
vueloTick();
var vueloblock = getTile(Entity.getX(vuelo),Entity.getY(vuelo)-1,Entity.getZ(vuelo));
var vueloblockup = getTile(Entity.getX(vuelo),Entity.getY(vuelo),Entity.getZ(vuelo));

//clientMessage(getYaw());
//clientMessage(Entity.getYaw(vuelo));


gasAmount--;



if(getYaw() > Entity.getYaw(vuelo) + 30 ){
rotFix = 30;
}

if(getYaw() < Entity.getYaw(vuelo) - 15 && getYaw() > Entity.getYaw(vuelo) + 15 ){
rotFix = 0;
}


if(getYaw() < Entity.getYaw(vuelo) - 30 ){
rotFix = -30;
}


Level.playSoundEnt(vuelo , "random.fuse" , 100 , 30 );

setRot(vuelo , getYaw() + rotFix , 0 );
}
}
function vueloTick() {
toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD , getPitch() * DEG_TO_RAD * -1);
setVelX(vuelo, vueloSpeed * playerDir[0]);
setVelY(vuelo, vueloSpeed * playerDir[1]);
setVelZ(vuelo, vueloSpeed * playerDir[2]);

}
function toDirectionalVector(vector, yaw, pitch) {	
vector[0] = Math.cos(yaw) * Math.cos(pitch);

if(getPitch() < 3 && getPitch() > -3 ){
vector[1] = Math.sin(pitch);
}

if(getPitch() > 3){
vector[1] = -0.3;
}

if(getPitch() < -3){
vector[1] = 0.3;
}

vector[2] = Math.sin(yaw) * Math.cos(pitch);
}
function unmannedvuelo(){
setVelX(vuelo,0);
setVelY(vuelo,-0.5);
setVelZ(vuelo,0);
setRot(vuelo , 0 , 0 );
}  
function leaveGame(){
if(vueloonmap == true){
ModPE.saveData("vueloonmap","true");
}
}


//DROPS
//definir ação
function deathHook(murderer, victim){
if(Entity.getMobSkin(victim)=="images/mob/mob.png")
{
//dropar item ou bloco
Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim),tempo,ID,quantidade,dano);
}
}


//Botar de Noite
Level.setNightMode(true);


///mob monta em outro
Entity.RideAnimal(nome do mob de cima,mob de baixo)


///Arvore customizada por Guipink gamer
///function use item
If(i==Id do item q VC quiser){
if(b==32){
		Level.setTile(x,y,z,17)
		Level.setTile(x,y+1,z,17)
		Level.setTile(x,y+2,z,17)
		Level.setTile(x,y+3,z,17)
		Level.setTile(x,y+3,z+1,17)
		Level.setTile(x,y+3,z-1,17)
		Level.setTile(x+1,y+4,z,17)
		Level.setTile(x-1,y+3,z,17)
		Level.setTile(x,y+4,z,17)
		Level.setTile(x,y+5,z,17)
		Level.setTile(x,y+6,z-1,17)
		Level.setTile(x,y+7,z,17)
		Level.setTile(x-1,y+8,z+1,17)
		Level.setTile(x+2,y+4,z,17)
		Level.setTile(x+3,y+5,z,17)
		Level.setTile(x+3,y+6,z,17)
		Level.setTile(x+2,y+7,z,17)
		Level.setTile(x-2,y+3,z,17)
		Level.setTile(x-3,y+4,z,17)
		Level.setTile(x-3,y+5,z,17)
		Level.setTile(x-2,y+6,z,17)
		Level.setTile(x,y+3,z+2,17)
		Level.setTile(x,y+4,z+3,17)
		Level.setTile(x,y+5,z+3,17)
		Level.setTile(x,y+6,z+2,17)
		Level.setTile(x,y+3,z-2,17)
		Level.setTile(x,y+4,z-3,17)
		Level.setTile(x,y+5,z-3,17)
		Level.setTile(x,y+6,z-3,17)
		Level.setTile(x,y+7,z-3,17)
		Level.setTile(x+1,y+8,z-2,17)
		Level.setTile(x,y+2,z+1,17)
		Level.setTile(x,y+2,z-1,17)
		Level.setTile(x-1,y+2,z,17)
		Level.setTile(x+1,y+3,z,17)
		Level.setTile(x-1,y+7,z+2,17)
		Level.setTile(x-2,y+7,z-1,17)
		Level.setTile(x+2,y+8,z+1,17)
	}}
	
	
///Um mob vira outro
function deathHook(attacker,victim){
if(Entity.getMobSkin(victim)=="mob/skeleton.png"){
Level.spawnMob(Entity.getX(victim),Entity.getY(victim)+1,Entity.getZ(victim),EntityType.COW);

}}


////IMOBILIDADE DO MOB
Entity.setImmobile(var do mob(ou victim), true);


///Item lançável(Numero de Id da Snowball)
Item.defineThrowable(519,"fireball",0,"bola de fogo",64);
Player.addItemCreativeInv(519,5);

////Ações ao Projétil encostar em algo:

///Entity
function customThrowableHitEntityHook(projectile, itemId, target){
	if(itemId==519){
		Entity.setFireTicks(target,30);}}

///Bloco
function customThrowableHitBlockHook(projectile, itemId, x, y, z, side){
	if(itemId==519){
			Level.spawnMob(x,y,z,EntityType.LIGHTNING_BOLT);}}
			
			
///ARMADURAS NOS MOBS
Entity.setArmor(VAR DO MOB, ArmorType.helmet, ID DO HELMET, 0);
                    Entity.setArmor(VAR DO MOB, ArmorType.chestplate, ID DO CHESTPLATE, 0);
                    Entity.setArmor(VAR DO MOB, ArmorType.leggings, ID DA LEGGINGS, 0);
                    Entity.setArmor(VAR DO MOB, ArmorType.boots, ID DAS BOTAS, 0);
                   
                    
///Bloco Consome redstone
Block.setRedstoneConsumer(ID DO BLOCO,true);

function redstoneUpdateHook(x, y, z, newCurrent, worldLoading, blockId, blockDamage) {
    if(blockId==ID DO BLOCO&&newCurrent>1){

///BOTE AQUI ALGO QUE ACONTECA AO BLOCO TER REDSTONE ATIVADA

}
}


//