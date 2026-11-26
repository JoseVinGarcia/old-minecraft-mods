
//Armadura

Item.addCraftRecipe(506, 1, 0, [331 , 1, 0,280,1 ,0 ,406,3 ,0]) ;

(Player.getEntity(80), 100, 100);


//varinha das varinhas




function attackHook(attacker, victim){

if(Player.getCarriedItem() == 508){

var dmg = 2;

Entity.setHealth(victim, Entity.getHealth(victim) - dmg);
	
}

}

//mob

//feijoezinhos


///varinha


ModPE.setItem(502,"ouropomo",0,"pomo de ouro");

Item.addCraftRecipe(502, 1, 0, [288 , 1, 0 ,266 ,1 ,0 ,288 ,1, 0]) ;

///pedra ressureicao





			







///ATAQUE
function attackHook(attacker, victim){

if(Player.getCarriedItem() == 504){

var dmg = 1;

Entity.setHealth(victim, Entity.getHealth(victim) - 2);

}


///miscelaneo



ModPE.setItem(571,"balaco",0,"Balaço");

Item.addCraftRecipe(571, 1, 0, [344 ,1 ,0 ,265 ,2 ,0 ,288 ,2 ,0]) ;

ModPE.setItem(572,"goles",0,"Goles");

Item.addCraftRecipe(572, 1, 0, [334 ,1 ,0 ,265 ,2 ,0 ,288 ,2 ,0]) ;