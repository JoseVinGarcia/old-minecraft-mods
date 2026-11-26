///mensagem ao entrar no mundo
function newLevel(){

clientMessage("§4Harry Potter World mod by Mr.J");
}

///FELIX FELICIS
ModPE.setFoodItem(501,"felicis",0,3 ,"felix felicis");

Item.addCraftRecipe(501, 1, 0, [20 , 1, 0 ,348 ,6 ,0]) ;

///CHOCOSAPO
ModPE.setFoodItem(503,"chocosapo",0,3 ,"sapo de chocolate");

Item.addCraftRecipe(503, 1, 0, [351 , 2, 3,392,1 ,0]) ;

///PEDRA FILOSOFAL
ModPE.setItem(505,"pedrafilosofal",0,"Pedra Filosofal");

ModPE.setItem(509,"cristalbranco",0,"Cristal Branco");

ModPE.setItem(519,"cristalvermelho",0,"Cristal Vermelho");

Item.addCraftRecipe(509, 1, 0, [155 , 4, 0 ,264 ,4 ,0 ,265 ,1 ,0]) ;

Item.addFurnaceRecipe(509,519,1)

Item.addCraftRecipe(505, 1, 0, [519 , 4, 0 ]) ;

///ESPADA GRIFINORIA
ModPE.setItem(506, "espadagrif", 0, "Espada Grifinória");
Item.setHandEquipped(506,2);
Item.addCraftRecipe(506, 1, 0, [331 , 1, 0,280,1 ,0 ,406,3 ,0]) ;

///VARINHA DAS VARINHAS
ModPE.setItem(508, "varinhavarinha", 0, "Varinha das Varinhas");

Item.setHandEquipped(508,1);

ModPE.setItem(556,"varinhavarinha",0,"Varinha das Varinhas(Aguamentis)");

Item.addCraftRecipe(556, 1, 0, [508 ,1 ,0]) ;

Item.addCraftRecipe(508, 1, 0, [556 ,1 ,0]) ;

ModPE.setItem(557,"varinhavarinha",0,"Varinha das Varinhas(Expectro Patronum)");

Item.addCraftRecipe(557, 1, 0, [508 ,1 ,0]) ;

Item.addCraftRecipe(508, 1, 0, [557 ,1 ,0]) ;

ModPE.setItem(558,"varinhavarinha",0,"Varinha das Varinhas(Incêndio)");

Item.addCraftRecipe(558, 1, 0, [508 ,1 ,0]) ;

Item.addCraftRecipe(508, 1, 0, [558 ,1 ,0]) ;

ModPE.setItem(559,"varinhavarinha",0,"Varinha das Varinhas(Confringo)");

Item.addCraftRecipe(559, 1, 0, [508 ,1 ,0]) ;

Item.addCraftRecipe(508, 1, 0, [559 ,1 ,0]) ;

ModPE.setItem(562, "varinhavarinha", 0, "Varinha das Varinhas(Wingardium Leviosa)");
Item.setMaxDamage(562,600);
Item.setHandEquipped(562,1);

Item.addCraftRecipe(562, 1, 0, [508 ,1 ,0]) ;

Item.addCraftRecipe(508, 1, 0, [562 ,1 ,0]) ;

Item.setHandEquipped(556,1);

Item.setHandEquipped(557,1);

Item.setHandEquipped(558,1);

Item.setHandEquipped(559,1);


///FEIJOEZINHOS
ModPE.setFoodItem(510,"feijaoverde",0,2 ,"Feijãozinho Verde");


ModPE.setFoodItem(511,"feijao",0,2 ,"Feijão");


ModPE.setFoodItem(512,"feijaobranco",0,2 ,"Feijãozinho Branco");

ModPE.setFoodItem(513,"feijaoazul",0,2 ,"Feijãozinho Azul");

ModPE.setFoodItem(514,"feijaolilas",0,2 ,"Feijãozinho Azul Claro");

ModPE.setFoodItem(515,"feijaolistrado",0,2 ,"Feijãozinho Listrado");

ModPE.setFoodItem(516,"feijaorosa",0,2 ,"Feijãozinho Rosa");

ModPE.setFoodItem(517,"feijaovermelho",0,2 ,"Feijãozinho Vermelho");

ModPE.setFoodItem(518,"feijaoamarelo",0,2 ,"Feijãozinho Amarelo");

Item.addCraftRecipe(512, 1, 0, [511 , 1, 0 ,351 ,1 ,15]) ;

Item.addCraftRecipe(510, 1, 0, [512 , 1, 0 ,351 ,1 ,10]) ;

Item.addCraftRecipe(513, 1, 0, [512 , 1, 0 ,351 ,1 ,12 ,351 ,1 ,8]) ;

Item.addCraftRecipe(514, 1, 0, [512 , 1, 0 ,351 ,1 ,12 ,351 ,1 ,15]) ;

Item.addCraftRecipe(515, 1, 0, [513 , 1, 0 ,351 ,1 ,11 ]) ;

Item.addCraftRecipe(517, 1, 0, [512 , 1, 0 ,351 ,1 ,1]) ;

Item.addCraftRecipe(516, 1, 0, [517 , 1, 0 ,351 ,1 ,15]) ;

Item.addCraftRecipe(518, 1, 0, [512 , 1, 0 ,351 ,1 ,11]) ;

Item.addCraftRecipe(511,3, 0, [353 , 1, 0 ,351 ,1 ,0]) ;

ModPE.setFoodItem(523,"caixaofeijao",0,10 ,"Caixa de Feijãozinhos");

Item.addCraftRecipe(523,1, 0, [518 , 1, 0 ,517 ,1 ,0 ,516 ,1 ,0 ,515 ,1 ,0 ,514 ,1 ,0 ,513 ,1 ,0 ,510 ,1 ,0]) ;

///VARINHA
ModPE.setItem(504, "varinha", 0, "Varinha");

Item.setHandEquipped(504,1);

Item.addCraftRecipe(504, 1, 0, [351 , 1, 0,280,1 ,0 ,351 ,1 ,15]) ;

ModPE.setItem(525, "varinha", 0, "Varinha(Incêndio)");

Item.setHandEquipped(525,1);


Item.addCraftRecipe(525, 1, 0, [504 ,1 ,0]) ;

Item.addCraftRecipe(504, 1, 0, [525 , 1, 0]) ;

ModPE.setItem(529, "varinha", 0, "Varinha(Confringo)");

Item.setHandEquipped(529,1);

ModPE.setItem(561, "varinha", 0, "Varinha(Wingardium Leviosa)");
Item.setMaxDamage(561,600);
Item.setHandEquipped(561,1);

Item.addCraftRecipe(561, 1, 0, [504 ,1 ,0]) ;

Item.addCraftRecipe(504, 1, 0, [561 ,1 ,0]) ;

Item.addCraftRecipe(504, 1, 0, [529 , 1, 0]) ;

Item.addCraftRecipe(529, 1, 0, [504 ,1 ,0]) ;

ModPE.setItem(530,"varinha",0,"Varinha(Aguamentis)");
Item.setHandEquipped(530,1);
Item.addCraftRecipe(530, 1, 0, [504 ,1 ,0]) ;

Item.addCraftRecipe(504, 1, 0, [530 ,1 ,0]) ;

ModPE.setItem(555, "varinha", 0, "Varinha(Expectro Patronum)");

Item.setHandEquipped(555,1);

Item.addCraftRecipe(555, 1, 0, [504 ,1 ,0]) ;

Item.addCraftRecipe(504, 1, 0, [555 ,1 ,0]) ;

///ARMADURAS
Item.defineArmor(520,"escolachapeu", 0,
" chapéu de bruxo",
			"armor/escola_1.png", 2, 70, ArmorType.helmet);

Item.defineArmor(524,"calcaescola", 0, "Calça da Escola",
			"armor/escola_2.png", 2, 85, ArmorType.leggings);
			
Item.defineArmor(560,"saiaescola", 0, "Saia da Escola",
			"armor/escolafemi_2.png", 2, 85, ArmorType.leggings);

Item.addCraftRecipe(520, 1, 0, [351 , 3 , 0 ,287 ,3 ,0]) ;

Item.addCraftRecipe(524, 1, 0, [351 , 7 , 0 ,351 ,1 ,15 ,287 ,1 ,0]) ;
Item.defineArmor(527,"botaquadribol", 0, "Bota de Quadribol",
			"armor/quadribol_0.png", 3, 85, ArmorType.boots);

Item.addCraftRecipe(527, 1, 0, [301 ,1 ,0 ,288 ,2 ,0]) ;

Item.defineArmor(531,"calcaquadribol", 0, "Calça de Quadribol",
			"armor/quadribol_2.png", 2, 100, ArmorType.leggings);
			
Item.addCraftRecipe(531, 1, 0, [281 ,3 ,0 ,35 ,4 ,0]) ;

Item.defineArmor(522,"capainv", 0, " Capa da Invisibilidade",
			"armor/capainv_1.png", 4, 100, ArmorType.chestplate);

Item.addCraftRecipe(522, 1, 0, [334 , 4, 0 ,351 ,2 ,15 ,264 ,1 ,0 ,351 ,2 ,4]) ;

Item.defineArmor(526,"jaquetaquadribol", 0, " Jaqueta de Quadribol da Grifinória",
			"armor/quadribol_1.png", 2, 85, ArmorType.chestplate);
			
ModPE.setItem(532,"quadribranca",0,"Roupa de Quadribol Vazia");

Item.addCraftRecipe(532, 1, 0, [287 , 4, 0 ,35 ,1,0]) ;

Item.addCraftRecipe(526, 1, 0, [532 , 1, 0 ,351 ,4 ,1]) ;

Item.defineArmor(533,"roupaquadrisonserina", 0, " Jaqueta de Quadribol da Sonserina",
			"armor/quadrisly_1.png", 2, 85, ArmorType.chestplate);
			
///jaqueta lufa-lufa
Item.defineArmor(534,"jaquetaquadrihuff", 0, " Jaqueta de Quadribol da Lufa-Lufa",
			"armor/quadrilufa_1.png", 2, 85, ArmorType.chestplate);
			
///jaqueta corvinal
Item.defineArmor(535,"jaquetaraven", 0, " Jaqueta de Quadribol da Corvinal",
			"armor/quadricorvi_1.png", 2, 85, ArmorType.chestplate);
			
///crafting das jaquetas
Item.addCraftRecipe(533, 1, 0, [532 , 1, 0 ,351 ,4 ,10]) ;

Item.addCraftRecipe(534, 1, 0, [532 , 1, 0 ,351 ,4 ,11]) ;

Item.addCraftRecipe(535, 1, 0, [532 , 1, 0 ,351 ,4 ,12]) ;

Item.addCraftRecipe(526, 1, 0, [532 , 1, 0 ,351 ,4 ,1]) ;

///roupas escolares
///roupa grifinória
Item.defineArmor(521,"escolaroupa", 0, " Túnica da Escola(Grifinória)",
			"armor/escola_1.png", 4, 85, ArmorType.chestplate);
			
///roupa escola vazia
ModPE.setItem(536,"escolabranca",0,"Túnica da Escola Vazia");

Item.addCraftRecipe(536, 1, 0, [287 , 4, 0 ,35 ,1,0]) ;

///tunica sonserina
Item.defineArmor(537,"escolaroupasly", 0, " Túnica da Escola(Sonserina)",
			"armor/escoly_1.png", 4, 85, ArmorType.chestplate);
			
///tunica lufa lufa
Item.defineArmor(538,"escolaroupahuff", 0, " Túnica da Escola(Lufa Lufa)",
			"armor/escolufa_1.png", 4, 85, ArmorType.chestplate);
			
///tunica Corvinal
Item.defineArmor(539,"escolarouparaven", 0, " Túnica da Escola(Corvinal)",
			"armor/escolorvi_1.png", 4, 85, ArmorType.chestplate);
			
///craftings
Item.addCraftRecipe(521, 1, 0, [536 , 1, 0 ,351 ,4,0 ,351 ,4 ,1]);

Item.addCraftRecipe(537, 1, 0, [536 , 1, 0 ,351 ,4,0 ,351 ,4 ,10]) ;

Item.addCraftRecipe(538, 1, 0, [536 , 1, 0 ,351 ,4,0 ,351 ,4 ,11]) ;

Item.addCraftRecipe(539, 1, 0, [536 , 1, 0 ,351 ,4,0 ,351 ,4 ,12]) ;

////ORCRUXES
Item.defineArmor(547,"pressureicao", 0, " Anél de Servolo Gaunt",
			"armor/gaunt_1.png", 1, 85, ArmorType.chestplate);
			
Item.addCraftRecipe(547, 1, 0, [13 , 3, 0 ,266 ,3 ,0]) ;

ModPE.setItem(548,"riddlediary",0,"Diário de Tom Riddle");

Item.addCraftRecipe(548, 1, 0, [340 , 1, 0 ,351 ,1 ,0 ,20 ,1 ,1]) ;

ModPE.setItem(549,"copohuff",0,"Taça de Helga Hufflepuff");

Item.addCraftRecipe(549, 1, 0, [263 , 1, 0 ,266 ,4 ,0]) ;

ModPE.setItem(550,"colarsly",0,"Colar de Salazar Slytherin");

ModPE.setItem(551,"tiararaven",0,"Tiara de Rowena Ravenclaw");

Item.addCraftRecipe(551, 1, 0, [265 , 3, 0 ,264 ,2 ,0]) ;

///VASSOURA
ModPE.setItem(528,"vassoura",0,"Vassoura");
Item.setHandEquipped(528,1);
Item.addCraftRecipe(528, 1, 0, [280 ,2 ,0 ,296 ,1 ,0]) ;

///ATTACK HOOK
function attackHook(attacker, victim){

if(Player.getCarriedItem() == 506){

var dmg = 8;

Entity.setHealth(victim, Entity.getHealth(victim) - 8);
	
}
if(Player.getCarriedItem() == 525){

var dmg = 1;

Entity.setHealth(victim, Entity.getHealth(victim) - 2);
Entity.setFireTicks(victim,20);

}

if(Player.getCarriedItem() == 529){

var dmg = 1;

Entity.setHealth(victim, Entity.getHealth(victim) - 2);
explode(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),2);

}

if(Player.getCarriedItem() == 561){
(99,530);
toolUse(600,561)
dmg = 350;
setPosition(victim,Entity.getX(victim), Entity.getY(victim)+19, Entity.getZ(victim))
}

if(Player.getCarriedItem() == 558){

var dmg = 1;

Entity.setHealth(victim, Entity.getHealth(victim) - 2);
Entity.setFireTicks(victim,20);

}
if(Player.getCarriedItem() == 559){

var dmg = 1;

Entity.setHealth(victim, Entity.getHealth(victim) - 2);
explode(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),2);

}

if(Player.getCarriedItem() == 562){
(99,530);
toolUse(600,562)
dmg = 350;
setPosition(victim,Entity.getX(victim), Entity.getY(victim)+19, Entity.getZ(victim))
}
}

///TOOL USE
function toolUse(maxDamage,id) {
var pcid=Player.getCarriedItemData();
if(pcid!==maxDamage){
Entity.setCarriedItem(getPlayerEnt(),id,1,pcid+1);
}else if(pcid==maxDamage) {
Level.playSound(Player.getX(),Player.getY(),Player.getZ(),"random.break",2);
Entity.setCarriedItem(getPlayerEnt(),0,0,1);
}
}

///USE ITEM

function useItem(x,y,z,itemId,block,side){
if(itemId==555){
	 crab = Level.spawnMob( x,y+1,z, 20,"mob/patronum.png");
Entity.setRenderType(crab,crabRenderType.renderType); 
 Entity.setHealth(crab, 2);
 crabc=0;}
 
 if(itemId==528){
if(Player.setCanFly(1/0));
	
}
 if(itemId==530){
Level.spawnMob(x, y+1, z, EntityType.THROWN_POTION);

}

if(itemId==556){
Level.spawnMob(x, y+1, z, EntityType.THROWN_POTION);

}

if(itemId==557){
	 crab = Level.spawnMob( x,y+1,z, 20,"mob/patronum.png");
Entity.setRenderType(crab,crabRenderType.renderType); 
 Entity.setHealth(crab, 2);
 crabc=0;}
 }
///MODTICK
function modTick(){

if(Player.getArmorSlot(3)==527){
AgilityBoots();
}

var tickCounter4 = 0;
function AgilityBoots(){
Entity.addEffect(Player.getEntity(),MobEffect.jump,10,10,false,false);
var x = getPlayerX();
var y = getPlayerY();
var z = getPlayerZ();
Level.addParticle(ParticleType.cloud,x,y-1,z,0,0,0);



tickCounter4++;
if(tickCounter4>=100){
tickCounter4 = 0;
  }
 }
 
if(Player.getArmorSlot(1)==522){
Protective();
}
var tickCounter2 = 0
function Protective(){
Entity.addEffect(Player.getEntity(),MobEffect.invisibility,10,6,false,false);
Entity.addEffect(Player.getEntity(),MobEffect.blindness,10,6,false,false);
tickCounter2++;
if(tickCounter2>=100){
tickCounter2 = 0;
 }
}
}

///CREATIVE ITENS
Player.addItemCreativeInv(501,1,3);
Player.addItemCreativeInv(503,1,3);
Player.addItemCreativeInv(505,1,3);
Player.addItemCreativeInv(509,1,3);
Player.addItemCreativeInv(519,1,3);
Player.addItemCreativeInv(506,1,3);
Player.addItemCreativeInv(508,1,3);
Player.addItemCreativeInv(556,1,3);
Player.addItemCreativeInv(557,1,3);
Player.addItemCreativeInv(558,1,3);
Player.addItemCreativeInv(559,1,3);
Player.addItemCreativeInv(562,1,3);
Player.addItemCreativeInv(510,1,3);
Player.addItemCreativeInv(511,1,3);
Player.addItemCreativeInv(12,1,3);
Player.addItemCreativeInv(513,1,3);
Player.addItemCreativeInv(514,1,3);
Player.addItemCreativeInv(515,1,3);
Player.addItemCreativeInv(516,1,3);
Player.addItemCreativeInv(517,1,3);
Player.addItemCreativeInv(518,1,3);
Player.addItemCreativeInv(523,1,3);
Player.addItemCreativeInv(504,1,3);
Player.addItemCreativeInv(525,1,3);
Player.addItemCreativeInv(561,1,3);
Player.addItemCreativeInv(529,1,3);
Player.addItemCreativeInv(530,1,3);
Player.addItemCreativeInv(555,1,3);
Player.addItemCreativeInv(520,1,3);
Player.addItemCreativeInv(524,1,3);
Player.addItemCreativeInv(560,1,3);
Player.addItemCreativeInv(527,1,3);
Player.addItemCreativeInv(531,1,3);
Player.addItemCreativeInv(522,1,3);
Player.addItemCreativeInv(526,1,3);
Player.addItemCreativeInv(532,1,3);
Player.addItemCreativeInv(533,1,3);
Player.addItemCreativeInv(534,1,3);
Player.addItemCreativeInv(535,1,3);
Player.addItemCreativeInv(527,1,3);
Player.addItemCreativeInv(536,1,3);
Player.addItemCreativeInv(537,1,3);
Player.addItemCreativeInv(538,1,3);
Player.addItemCreativeInv(539,1,3);
Player.addItemCreativeInv(547,1,3);
Player.addItemCreativeInv(548,1,3);
Player.addItemCreativeInv(549,1,3);
Player.addItemCreativeInv(550,1,3);
Player.addItemCreativeInv(551,1,3);
Player.addItemCreativeInv(528,1,3);