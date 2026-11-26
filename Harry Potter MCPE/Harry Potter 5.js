ModPE.setItem(566,"escama",0,"Escama");

Item.addCraftRecipe(566, 5, 0, [334 , 1, 0 ,352 ,1,0 ]) ;

ModPE.setItem(567,"sanguecobra",0,"Sangue de Cobra");

Item.addCraftRecipe(567, 3, 0, [325 , 1, 0 ,566 ,1,0 ]) ;

ModPE.setItem(568,"wiggenquente",0,"Poção WiggenWeld");

Item.addCraftRecipe(568, 2, 0, [373 ,1 ,0 ,567 ,1 ,0]) ;


Block.defineBlock(201, "Caldeirão", [["cauldron_side", 0],["piston_top_sticky", 0]], true, 5, 0);

Item.addCraftRecipe(201 , 1, 0, [568 ,4 ,0 ,200 ,1 ,0]) ;

Item.addCraftRecipe(540, 1, 0, [566 , 9, 0 ]) ;

Item.addCraftRecipe(541, 1, 0, [265 , 4, 0 ,344 ,1 ,0 ]) ;

Item.addCraftRecipe(542, 1, 0, [50 , 3, 5 ,344 ,1 ,0 ,331 ,1 ,0 ]) ;

Item.addCraftRecipe(543, 1, 0, [334 , 3, 0 ,344 ,1 ,0 ,280 ,1 ,0 ]) ;

Item.addCraftRecipe(544, 1, 0, [334 , 2, 0 ,344 ,1 ,0 ,280 ,1 ,0 ,295 ,1 ,0 ]) ;

Item.addCraftRecipe(545, 1, 0, [344 ,1 ,0 ,17 ,1 ,0 ,263 ,1 ,0 ]) ;

Item.addCraftRecipe(563, 1, 0, [295 ,3 ,0 ,17 ,1 ,0 ]) ;

Item.addCraftRecipe(564, 1, 0, [566 ,3 ,0 ,50 ,1 ,5 ,344 ,1 ,0]) ;

Item.addCraftRecipe(565 , 1, 0, [344 ,1 ,0 ,263 ,4 ,0]) ;

Item.addCraftRecipe(508, 1, 0, [504 ,1 ,0 ,17 ,2 ,0 ,264 ,2, 0 ]) ;