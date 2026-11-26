///Marvel Heroes mod by Mr.J(2016)

///RENDER
function addhulkToRenderer(renderer)
{
 
var var2 = 0;
var model = renderer.getModel();
 
var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
 
head.clear();
body.setTextureOffset(0,0);//Head
body.addBox(-4,-20,-7,8,8,8,var2);


body.clear(); 
body.setTextureOffset(0, 18);//Body1
body.addBox(-6,-10,-4,12,6,8,2);
body.setTextureOffset(33, 10);//Body2
body.addBox(-3,0,-3,6,6,6,2);
body.setTextureOffset(0,0);
body.addBox(-4,-20,-7,8,8,8,var2);


rArm.clear();
rArm.setTextureOffset(53,1); 
rArm.setRotationPoint(0,-10,0);
rArm.addBox(-8,0.5,0,3,8,2,2);	
rArm.setTextureOffset(1,1); 
rArm.addBox(-8,11.5,-8,3,2,8,2);

lArm.clear();
lArm.setTextureOffset(53,1); 
lArm.setRotationPoint(0,-10,0);
lArm.addBox(5,0.5,0,3,8,2,2);
lArm.setTextureOffset(1,1);
lArm.addBox(5,11.5,-8,3,2,8,2);

rLeg.clear();
rLeg.setTextureOffset(38,2);
rLeg.addBox(-3,-2,-1,3,4,2,2);	
rLeg.setTextureOffset(24,2);
rLeg.addBox(-2.5,6,-1,2,4,2,2);

lLeg.clear();
lLeg.setTextureOffset(38,2);
lLeg.addBox(0,-2,-1,3,4,2,2); 
lLeg.setTextureOffset(24,2);
lLeg.addBox(0.5,6,-1,2,4,2,2);	
}

var hulkRenderer = Renderer.createHumanoidRenderer();
addhulkToRenderer(hulkRenderer);

///Homem-Aranha

Item.defineArmor(500,"spidermask", 0,
"Máscara do Homem-Aranha",
			"armor/spiderman_1.png", 6, 500, ArmorType.helmet);
Item.defineArmor(501,"spiderchest", 0, "Peitoral do Homem-Aranha",
			"armor/spiderman_1.png", 4, 500, ArmorType.chestplate);
Item.defineArmor(502,"spiderlegs", 0, "Calça do Homem-Aranha",
			"armor/spiderman_2.png", 6, 500, ArmorType.leggings);
Item.defineArmor(503,"spiderboot", 0, "Botas do Homem-Aranha",
			"armor/spiderman_1.png", 4, 500, ArmorType.boots);

///Capitão américa

Item.defineArmor(504,"capitaochapeu", 0,
"Máscara do Capitão América",
			"armor/capitao_1.png", 6, 500, ArmorType.helmet);
Item.defineArmor(505,"capitaoroupa", 0, "Peitoral do Capitão América",
			"armor/capitao_1.png", 4, 500, ArmorType.chestplate);
Item.defineArmor(506,"calcaamerica", 0, "Calça do Capitão América",
			"armor/capitao_2.png", 6, 500, ArmorType.leggings);
Item.defineArmor(507,"capitaobota", 0, "Botas do Capitão América",
			"armor/capitao_1.png", 4, 500, ArmorType.boots);
ModPE.setItem(508,"escudocapitao",0,"Escudo de Adamantium");
Item.setHandEquipped(508,1);
///Thor

Item.defineArmor(509,"thorpeu", 0,
"Capacete do Thor",
			"armor/thor_1.png", 4, 500, ArmorType.helmet);
Item.defineArmor(510,"thorchest", 0, "Peitoral do Thor",
			"armor/thor_1.png", 8, 500, ArmorType.chestplate);
Item.defineArmor(511,"thorcalca", 0, "Calça do Thor",
			"armor/thor_2.png", 4, 500, ArmorType.leggings);
Item.defineArmor(512,"thorbot", 0, "Botas do Thor","armor/thor_1.png", 2, 500,ArmorType.boots);
ModPE.setItem(513,"mjolnir",0,"Mjolnir");
Item.setHandEquipped(513,1);

///jóias e manopla do infinito

Item.defineArmor(514,"manopla", 0, "Manopla do Infinito(Vazia)",
			"armor/manopla_1.png", 5, 1000, ArmorType.chestplate);
ModPE.setItem(515,"joiaalma",0,"Jóia da Alma");
ModPE.setItem(516,"joiaespaco",0,"Jóia do Espaço");
ModPE.setItem(517,"joiamente",0,"Jóia da Mente");
ModPE.setItem(518,"joiapoder",0,"Jóia do Poder");
ModPE.setItem(519,"joiarealidade",0,"Jóia da Realidade");
ModPE.setItem(520,"joiatempo",0,"Jóia do Tempo");
Item.defineArmor(521,"manoplacar", 0, "Manopla do Infinito",
			"armor/manoplacarregada_1.png", 5, 1000, ArmorType.chestplate);

///Mobs
ModPE.setItem(522,"symbiote",0,"Simbionte");
ModPE.setItem(523,"ovo",0,"Dormammu");
ModPE.setItem(524,"ovocolossus",0,"Colossus");
ModPE.setItem(525,"caveiravermelha",0,"Caveira Vermelha");
ModPE.setItem(532,"greengoblin",0,"Duende Verde");
ModPE.setItem(539,"ultron",0,"Ultron");
ModPE.setItem(549,"loki",0,"Loki");
ModPE.setItem(550,"doom",0,"Doutor Destino");
ModPE.setItem(551,"thanos",0,"Thanos");
ModPE.setItem(552,"azazel",0,"Azazel");
ModPE.setItem(554,"mysterio",0,"Mysterio");
ModPE.setItem(555,"dentesabre",0,"Dente de Sabre");
ModPE.setItem(556,"mandarim",0,"Mandarim");
Player.addItemCreativeInv(550,1,3);
Player.addItemCreativeInv(522,1,3);
Player.addItemCreativeInv(523,1,3);
Player.addItemCreativeInv(524,1,3);
Player.addItemCreativeInv(525,1,3);
Player.addItemCreativeInv(532,1,3);
Player.addItemCreativeInv(539,1,3);
Player.addItemCreativeInv(549,1,3);
Player.addItemCreativeInv(551,1,3);
Player.addItemCreativeInv(552,1,3);
Player.addItemCreativeInv(554,1,3);
Player.addItemCreativeInv(555,1,3);
Player.addItemCreativeInv(556,1,3);

////HOMEM DE FERRO

Item.defineArmor(526,"ironmask", 0,
"Capacete do Mark-VI",
			"armor/iroman_1.png", 4, 500, ArmorType.helmet);
Item.defineArmor(527,"ironmchest", 0, "Peitoral do Mark-VI",
			"armor/iroman_1.png", 8, 500, ArmorType.chestplate);
Item.defineArmor(528,"ironlegs", 0, "Calça do Mark-VI",
			"armor/ironman_2.png", 4, 500, ArmorType.leggings);
Item.defineArmor(529,"ironmboot", 0, "Botas do Mark-VI","armor/iroman_1.png", 2, 500,ArmorType.boots);

///DEADPOOL
Item.defineArmor(533,"deadphelmet", 0,
"Máscara do Deadpool",
			"armor/deadp_1.png", 2, 500, ArmorType.helmet);
Item.defineArmor(534,"deadpchest", 0, "Peitoral do Deadpool",
			"armor/deadp_1.png", 4, 500, ArmorType.chestplate);
Item.defineArmor(535,"deadplegs", 0, "Calça do Deadpool",
			"armor/deadp_2.png", 3, 500, ArmorType.leggings);
Item.defineArmor(536,"deadpboots", 0, "Botas do Deadpool","armor/deadp_1.png", 2, 500,ArmorType.boots);
ModPE.setItem(537,"deadpoolsword",0,"Katana de Aço");
Item.setHandEquipped(537,1);
ModPE.setItem(553,"deadpteleport",0,"Teleporte do Deadpool");

///WOLVERINE
Item.defineArmor(540,"wolvhelm", 0,
"Máscara do Wolverine",
			"armor/wolverine_1.png", 2, 500, ArmorType.helmet);
Item.defineArmor(541,"wolvchest", 0, "Peitoral do Wolverine",
			"armor/wolverine_1.png", 4, 500, ArmorType.chestplate);
Item.defineArmor(542,"wolvlegs", 0, "Calça do Wolverine",
			"armor/wolverine_2.png", 3, 500, ArmorType.leggings);
Item.defineArmor(543,"wolbot", 0, "Botas do Wolverine","armor/wolverine_1.png", 2, 500,ArmorType.boots);
ModPE.setItem(544,"wolvclaw",0,"Garras de Adamantium");
Item.setHandEquipped(544,1);

///DOUTOR ESTRANHO
Item.defineArmor(545,"strangechest", 0, "Túnica do Doutor Estranho",
			"armor/strange_1.png", 8, 500, ArmorType.chestplate);
Item.defineArmor(546,"strangelegs", 0, "Calça do Doutor Estranho",
			"armor/strange_2.png", 4, 500, ArmorType.leggings);
Item.defineArmor(547,"strangeboot", 0, "Botas do Doutor Estranho","armor/strange_1.png", 2, 500,ArmorType.boots);

////GAMBIT
Item.defineArmor(557,"gamchest", 0, "Jaqueta do Gambit",
			"armor/gambit_1.png", 8, 500, ArmorType.chestplate);
Item.defineArmor(558,"gamlegs", 0, "Calça do Gambit",
			"armor/gambit_2.png", 4, 500, ArmorType.leggings);
Item.defineArmor(559,"gamboot", 0, "Botas do Gambit","armor/gambit_1.png", 2, 500,ArmorType.boots);
ModPE.setItem(560,"gambitstick",0,"Bastão de Ferro");
ModPE.setItem(561,"card",0,"Carta");
ModPE.setItem(562,"gambitcard",0,"Carta Explosiva");
Item.setHandEquipped(560,1);

///SHIELD
Item.defineArmor(563,"tapaolho", 0,
"Tapa-Olho",
			"armor/shield_1.png", 2, 500, ArmorType.helmet);
Item.defineArmor(564,"shiest", 0, "Camisa da S.H.I.E.L.D.",
			"armor/shield_1.png", 4, 500, ArmorType.chestplate);
Item.defineArmor(565,"shielegs", 0, "Calça da S.H.I.E.L.D.",
			"armor/shield_2.png", 3, 500, ArmorType.leggings);
Item.defineArmor(566,"shieldboots", 0, "Botas da S.H.I.E.L.D.","armor/shield_1.png", 2, 500,ArmorType.boots);

///HAWKEYE
Item.defineArmor(567,"hawkhat", 0,
"Óculos Roxo",
			"armor/hawkeye_1.png", 2, 500, ArmorType.helmet);
Item.defineArmor(568,"hawkchest", 0, "Túnica de Arqueiros",
			"armor/hawkeye_1.png", 4, 500, ArmorType.chestplate);
Item.defineArmor(569,"hawklegs", 0, "Calça do Gavião Arqueiro",
			"armor/hawkeye_2.png", 3, 500, ArmorType.leggings);
Item.defineArmor(570,"hawkboot", 0, "Botas Escuras","armor/hawkeye_1.png", 2, 500,ArmorType.boots);

///ITENS
ModPE.setItem(530,"bombora",0,"Bombóbora");
ModPE.setItem(531,"pistol",0,"Pistola");
Item.setHandEquipped(531,1);
ModPE.setItem(538,"gama", 0, "§3Soro Gama");
ModPE.setItem(548,"cetroloki",0,"Cetro do Loki");
Item.setHandEquipped(548,1);

////MAX DAMAGE
Item.setMaxDamage(508, 90);
Item.setMaxDamage(513, 90);

///USE ITEM FUNCTION
function useItem(x,y,z,i,b,s){
if(i==522){
var venom= Level.spawnMob(x,y+1,z,35,"mob/symbiote.png");
Entity.setRenderType(venom,EntityRenderType.zombie);
Entity.setHealth(venom, 100);
Player.addItemInventory(522,-1);
Entity.addEffect(venom,MobEffect.fireResistance,100000*5, 5, false, true);
Entity.addEffect(venom,MobEffect.blindness,100000*5, 5, false, true);
Entity.addEffect(venom,MobEffect.jump,1000000*8, 5, false, true);
Entity.addEffect(venom,MobEffect.movementSpeed,10000000*2, 2, false, true);
}

if(i==513){
if(Player.setCanFly(true));
}

if(i==523){
var dom= Level.spawnMob(x,y+1,z,45,"mob/dormamu.png");
Entity.setRenderType(dom,EntityRenderType.zombie);
Entity.setHealth(dom, 100);
Player.addItemInventory(523,-1);
Entity.addEffect(dom,MobEffect.damageResistance,100000*5, 5, false, true);
}

if(i==524){
var col= Level.spawnMob(x,y+1,z,32,"mob/colossus.png");
Entity.setRenderType(col,EntityRenderType.zombie);
Entity.setHealth(col, 100);
Player.addItemInventory(524,-1);
Entity.addEffect(col,MobEffect.damageResistance,100000*5, 5, false, true);
Entity.addEffect(col,MobEffect.fireResistance,100000*5, 5, false, true);
Entity.addEffect(col,MobEffect.damageBoost,100000*1, 1, false, true);
}

if(i==525){
var skull= Level.spawnMob(x,y+1,z,34,"mob/redskull.png");
Entity.setRenderType(skull,EntityRenderType.zombie);
Entity.setHealth(skull, 100);
Player.addItemInventory(525,-1);
Entity.addEffect(skull,MobEffect.damageResistance,100000*2, 2, false, true);
Entity.addEffect(skull,MobEffect.fireResistance,100000*5, 5, false, true);
Entity.setCarriedItem(skull,531, 3, 0);
}

if(i==532){
var gg= Level.spawnMob(x,y+1,z,41,"mob/greengoblin.png");
Entity.setRenderType(gg,EntityRenderType.zombie);
Entity.setHealth(gg, 20);
Player.addItemInventory(532,-1);
Entity.addEffect(gg,MobEffect.damageResistance,100000*5, 5, false, true);
Entity.addEffect(gg,MobEffect.waterBreathing,100000*1, 1, false, true);
Entity.setCollisionSize(gg,1,1)
}

if(i==538) 
{
Entity.setRenderType(getPlayerEnt() ,hulkRenderer.renderType);
 Entity.setMobSkin(getPlayerEnt(),"mob/hulk.png"); Entity.addEffect(Player.getEntity(),MobEffect.movementSpeed,30000,5,false,false);
Entity.addEffect(Player.getEntity(),MobEffect.jump,30000,5,false,false);
Entity.addEffect(Player.getEntity(),MobEffect.damageBoost,30000,3,false,false);
Entity.addEffect(Player.getEntity(),MobEffect.damageResistance,30000,4,false,false);
}

if(i==539){
var tron= Level.spawnMob(x,y+1,z,43,"mob/ultron.png");
Entity.setRenderType(tron,EntityRenderType.zombie);
Entity.setHealth(tron, 100);
Player.addItemInventory(539,-1);
Entity.addEffect(tron,MobEffect.damageResistance,100000*3, 3, false, true);
Entity.addEffect(tron,MobEffect.fireResistance,100000*5, 5, false, true);
}

if(i==549){
var loki= Level.spawnMob(x,y+1,z,34,"mob/loki.png");
Entity.setRenderType(loki,EntityRenderType.zombie);
Entity.setHealth(loki, 100);
Player.addItemInventory(549,-1);
Entity.addEffect(loki,MobEffect.damageResistance,100000*3, 3, false, true);
Entity.addEffect(loki,MobEffect.fireResistance,100000*5, 5, false, true);
Entity.setCarriedItem(loki,548, 3, 0);
}

if(i==550){
var doom= Level.spawnMob(x,y+1,z,41,"mob/destino.png");
Entity.setRenderType(doom,EntityRenderType.zombie);
Entity.setHealth(doom, 100);
Player.addItemInventory(550,-1);
Entity.addEffect(doom,MobEffect.damageResistance,100000*4, 4, false, true);
Entity.addEffect(doom,MobEffect.fireResistance,100000*5, 5, false, true);
Entity.setCollisionSize(doom,1,1)
}
if(i==551){
var thanos= Level.spawnMob(x,y+1,z,44,"mob/thanos.png");
Entity.setRenderType(thanos,EntityRenderType.zombie);
Entity.setHealth(thanos, 100);
Player.addItemInventory(551,-1);
Entity.addEffect(thanos,MobEffect.damageResistance,100000*2, 2, false, true);
Entity.addEffect(thanos,MobEffect.harm,100000*3, 3, false, true);
Entity.addEffect(thanos,MobEffect.damageBoost,100000*2, 2, false, true);
Entity.addEffect(thanos,MobEffect.fireResistance,100000*5, 5, false, true);
Entity.setCollisionSize(thanos,1,1)
}
if(i==552){
var zz= Level.spawnMob(x,y+1,z,38,"mob/azazel.png");
Entity.setRenderType(zz,EntityRenderType.zombie);
Entity.setHealth(zz, 100);
Player.addItemInventory(552,-1);
Entity.addEffect(zz,MobEffect.damageResistance,100000*3, 3, false, true);
Entity.addEffect(zz,MobEffect.fireResistance,100000*5, 5, false, true);
Entity.addEffect(zz,MobEffect.damageBoost,100000*2, 2, false, true);
Entity.addEffect(zz,MobEffect.waterBreathing,100000*2, 2, false, true);
Entity.setCollisionSize(zz,1,1)
}

if(i==554){
var myst= Level.spawnMob(x,y+1,z,44,"mob/mysterio.png");
Entity.setRenderType(myst,EntityRenderType.zombie);
Entity.setHealth(myst, 100);
Player.addItemInventory(554,-1);
Entity.addEffect(myst,MobEffect.damageResistance,100000*5, 5, false, true);
Entity.addEffect(myst,MobEffect.fireResistance,100000*5, 5, false, true);
Entity.addEffect(myst,MobEffect.damageBoost,100000*1, 1, false, true);
Entity.addEffect(myst,MobEffect.movementSpeed,10000000*4, 4, false, true);
}

if(i==555){
var tooth= Level.spawnMob(x,y+1,z,44,"mob/dentesabre.png");
Entity.setRenderType(tooth,EntityRenderType.zombie);
Entity.setHealth(tooth, 100);
Player.addItemInventory(555,-1);
Entity.addEffect(tooth,MobEffect.damageResistance,100000*5, 5, false, true);
Entity.addEffect(tooth,MobEffect.fireResistance,100000*5, 5, false, true);
Entity.addEffect(tooth,MobEffect.damageBoost,100000*1, 1, false, true);
Entity.addEffect(tooth,MobEffect.jump,1000000*8, 5, false, true);
Entity.addEffect(tooth,MobEffect.movementSpeed,10000000*5, 5, false, true);
}

if(i==556){
var man= Level.spawnMob(x,y+1,z,36,"mob/mandarim.png");
Entity.setRenderType(man,EntityRenderType.zombie);
Entity.setHealth(man, 100);
Player.addItemInventory(556,-1);
Entity.addEffect(man,MobEffect.damageResistance,100000*5, 5, false, true);
Entity.addEffect(man,MobEffect.fireResistance,100000*5, 5, false, true);
Entity.addEffect(man,MobEffect.damageBoost,100000*2, 2, false, true);
Entity.addEffect(man,MobEffect.jump,1000000*8, 10, false, true);
Entity.setCarriedItem(man,280, 3, 0);
}
}

////ATTACK HOOK
function attackHook(attacker, victim){

if(Player.getCarriedItem() == 508){

var dmg = 4;

Entity.setHealth(victim, Entity.getHealth(victim) - 4);
	
}

if(Player.getCarriedItem() == 513){

var dmg = 6;

Entity.setHealth(victim, Entity.getHealth(victim) - 6);
explode(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),2);
}

if(Player.getCarriedItem() == 530){
explode(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),1);
Player.addItemInventory(530,-1);
}

if(Player.getCarriedItem() == 537){

var dmg = 6;

Entity.setHealth(victim, Entity.getHealth(victim) - 6);
	
}
}

///MODTICK
function modTick(){
if(Player.getArmorSlot()==526){ RegenHalmet();
}
var tickCounter1 = 0;
function RegenHalmet(){
Entity.addEffect(Player.getEntity(),MobEffect.nightVision,10,6,false,false);
tickCounter1++;
if(tickCounter1>=100){
tickCounter1 = 0;
 }
}
if(Player.getArmorSlot(1)==527){
Protective();
}
var tickCounter2 = 0
function Protective(){
Entity.addEffect(Player.getEntity(),MobEffect.damageResistance,10,2,false,false);
Entity.addEffect(Player.getEntity(),MobEffect.damageBoost,10,2,false,false);
tickCounter2++;
if(tickCounter2>=100){
tickCounter2 = 0;
 }
}

if(Player.getArmorSlot(3)==529){
AgilityBoots();
}

var tickCounter4 = 0;
function AgilityBoots(){
Entity.addEffect(Player.getEntity(),MobEffect.movementSpeed,10,2,false,false);

tickCounter4++;
if(tickCounter4>=100){
tickCounter4 = 0;
  }
 }
}

///ITENS CRIATIVOS
Player.addItemCreativeInv(500,1,3);
Player.addItemCreativeInv(501,1,3);
Player.addItemCreativeInv(502,1,3);
Player.addItemCreativeInv(503,1,3);
Player.addItemCreativeInv(504,1,3);
Player.addItemCreativeInv(505,1,3);
Player.addItemCreativeInv(506,1,3);
Player.addItemCreativeInv(507,1,3);
Player.addItemCreativeInv(508,1,3);
Player.addItemCreativeInv(509,1,3);
Player.addItemCreativeInv(510,1,3);
Player.addItemCreativeInv(511,1,3);
Player.addItemCreativeInv(512,1,3);
Player.addItemCreativeInv(513,1,3);
Player.addItemCreativeInv(514,1,3);
Player.addItemCreativeInv(515,1,3);
Player.addItemCreativeInv(516,1,3);
Player.addItemCreativeInv(517,1,3);
Player.addItemCreativeInv(518,1,3);
Player.addItemCreativeInv(519,1,3);
Player.addItemCreativeInv(520,1,3);
Player.addItemCreativeInv(521,1,3);

Player.addItemCreativeInv(526,1,3);
Player.addItemCreativeInv(527,1,3);
Player.addItemCreativeInv(528,1,3);
Player.addItemCreativeInv(529,1,3);
Player.addItemCreativeInv(530,1,3);
Player.addItemCreativeInv(533,1,3);
Player.addItemCreativeInv(534,1,3);
Player.addItemCreativeInv(535,1,3);
Player.addItemCreativeInv(536,1,3);
Player.addItemCreativeInv(537,1,3);
Player.addItemCreativeInv(538,1,3);
Player.addItemCreativeInv(540,1,3);
Player.addItemCreativeInv(541,1,3);
Player.addItemCreativeInv(542,1,3);
Player.addItemCreativeInv(543,1,3);
Player.addItemCreativeInv(544,1,3);
Player.addItemCreativeInv(545,1,3);
Player.addItemCreativeInv(546,1,3);
Player.addItemCreativeInv(547,1,3);
Player.addItemCreativeInv(548,1,3);
Player.addItemCreativeInv(553,1,3);
Player.addItemCreativeInv(557,1,3);
Player.addItemCreativeInv(558,1,3);
Player.addItemCreativeInv(559,1,3);
Player.addItemCreativeInv(560,1,3);
Player.addItemCreativeInv(561,1,3);
Player.addItemCreativeInv(562,1,3);
Player.addItemCreativeInv(563,1,3);
Player.addItemCreativeInv(564,1,3);
Player.addItemCreativeInv(565,1,3);
Player.addItemCreativeInv(566,1,3);
Player.addItemCreativeInv(567,1,3);
Player.addItemCreativeInv(568,1,3);
Player.addItemCreativeInv(569,1,3);
Player.addItemCreativeInv(570,1,3);