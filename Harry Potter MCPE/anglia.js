///anglia render
function addangliaRenderType(renderer){

var model = renderer.getModel();
var head =
model.getPart("head").clear();
var body =
model.getPart("body").clear();
var rArm =
model.getPart("rightArm").clear();
var lArm =
model.getPart("leftArm").clear();
var rLeg =
model.getPart("rightLeg").clear();
var lLeg =
model.getPart("leftLeg").clear();

body = model.getPart("body");

body.setTextureSize(64,64);

body.addBox(-14.0, 4.0,-26.0 , 14, 15, 1);
body.addBox( 0.0,4.0 ,-26.0 , 14,15 ,1 );
body.setTextureOffset(31,48);
body.addBox( 0.0, 16.0,-27.0 , 14,3 ,1);
body.addBox( -14.0,16.0 ,-27.0 , 14,3 ,1 );
body.addBox( 7.5,12.0 ,-26.5 ,4 ,2 , 1);
body.setTextureOffset(0,30);
body.addBox(11.5 , 10.0,-26.5 ,3 , 4, 1);
body.setTextureOffset(15,30);
body.addBox( 7.5,10.0 ,-26.5 , 4, 2, 1);
body.setTextureOffset(0,30);
body.addBox(-14.5,10.0 ,-26.5 ,3,4 , 1);
body.setTextureOffset(31,48);
body.addBox(-11.5 , 12.0, -26.5, 4, 2, 1);
body.setTextureOffset(15,30);
body.addBox(-11.5 , 10.0, -26.5, 4, 2,1 );
body.setTextureOffset(31,48);
body.addBox( 0.3, 7.0, -26.3, 14, 1, 1);
body.addBox(-14.3 ,7.0 ,-26.3 ,14 , 1, 1);
body.addBox( -1.0, 6.0,-27.0 ,2 , 3, 1);
body.setTextureOffset(0,0);
body.addBox( -14.0, 4.0,-25.0 , 1,15 , 6);
body.setTextureOffset(31,48);
body.addBox( -15.0,16.0 ,-27.0 , 1,3 , 6);
body.addBox( -14.3,7.0 , -25.7, 1, 1, 15);
body.setTextureOffset(0,0);
body.addBox(13.0 , 4.0,-25.0 , 1, 15, 6);
body.setTextureOffset(31,48);
body.addBox( 14.0, 16.0,-27.0 , 1, 3, 6);
body.addBox( 13.3,7.0 ,-26.0 ,1 ,1 , 15);
body.setTextureOffset(0,0);
body.addBox(-13.0 ,3.0 ,-25.0 ,13 , 1, 19);
body.addBox( 0.0, 3.0,-25.0 , 13,1 , 19);
body.addBox(-14.0 ,4.0 , -19.0,1 , 10, 9);
body.addBox( 13.0, 4.0, -19.0, 1,10 , 9);
body.addBox( -14.0,4.0 ,-10.0 , 1,15 , 6);
body.addBox( 13.0, 4.0,-10.0 ,1 ,15 , 6);
body.addBox( -14.0, 4.0, -4.0,1 , 15, 15);
body.setTextureOffset(31,48);
body.addBox(-14.3 ,7.0 ,-11.0 , 1, 1, 7);
body.addBox( -14.3, 7.0, -3.0,1 ,1 , 13);
body.addBox( -15.0,9.0 ,6.0 , 1, 1, 3);
body.addBox( 14.0,9.0 , 6.0, 1,1 , 3);
body.setTextureOffset(0,0);
body.addBox( 13.0,4.0 , -4.0, 1,15 ,15 );
body.setTextureOffset(31,48);
body.addBox( 13.3,7.0 ,-3.0 ,1 , 1,13 );
body.addBox( 13.3, 7.0,-11.0 , 1, 1, 7);
body.addBox( -1.0, 4.0,-7.0 ,14 , 15, 1);
body.addBox( -13.0,4.0 , -7.0,12,15 , 1);
body.setTextureOffset(0,0);
body.addBox(0.0, 18.0,-6.0 ,13 ,1 ,17 );
body.addBox( -13.0,18.0 , -6.0, 13,1 ,17 );
body.addBox(0.0 ,18.0 ,11.0 ,13 ,1 ,15 );
body.addBox( -13.0, 18.0, 11.0,13 ,1 ,15 );
body.addBox(13.0 ,4.0 ,11.0 ,1 ,15 , 15);
body.addBox( -14.0, 4.0, 11.0, 1,15 ,15 );
body.setTextureOffset(31,48);
body.addBox( 1.0, 4.0, 25.0, 12,14 , 1);
body.addBox( -13.0, 4.0,25.0 , 14,14 , 1);
body.addBox(13.3 , 7.0, 12.0, 1,1 , 13);
body.addBox( 14.0, 9.0, 21.0, 1,1 , 3);
body.addBox( -14.3, 7.0, 12.0, 1,1 ,13 );
body.addBox(-15.0 , 9.0, 21.0, 1,1 ,3 );
body.setTextureOffset(0,0);
body.addBox( -14.0,4.0 , 26.0, 1, 15, 4);
body.addBox( 13.0,4.0 , 26.0, 1,15 , 3);
body.addBox( 13.0, 4.0,29.0 ,1 ,10 , 9);
body.addBox( 13.0, 4.0, 38.0,1 ,15 ,6 );
body.addBox(-14.0 ,4.0 ,30.0 ,1 ,10 , 9);
body.addBox( -14.0, 4.0,39.0 , 1,15 , 6);
body.addBox( 0.0,4.0 ,44.0 ,14 ,15 , 1);
body.addBox( -14.0,4.0 ,44.0 , 14,15 ,1 );
body.addBox( 0.0,3.0 ,25.0 ,13 , 1, 19);
body.addBox( -13.0,3.0 ,25.0 ,13 ,1 , 19);
body.addBox( 0.0,-10.0 , 0.0,13 , 1,19 );
body.addBox( -13.0,-10.0 ,0.0 ,13 ,1 , 19);
body.addBox( -13.0,0.0 , -8.0,2 , 3,2 );
body.addBox( -13.0, -3.0, -6.0,2 ,3 ,2 );
body.addBox( -13.0, -6.0, -4.0,2 ,3 , 2);
body.addBox( -13.0, -9.0, -2.0, 2, 3,2 );
body.addBox( 11.0, 0.0, -8.0, 2, 3, 2);
body.addBox( 11.0, -3.0,-6.0, 2, 3,2 );
body.addBox( 11.0,-6.0 , -4.0, 2,3 ,2 );
body.addBox( 11.0, -9.0,-2.0 , 2, 3,2 );
body.addBox( 11.0,0.0 ,25.0 ,2 ,3 ,2 );
body.addBox(11.0 , -3.0,23.0 , 2,3 ,2 );
body.addBox(11.0 ,-6.0 , 21.0, 2,3 ,2 );
body.addBox( 11.0,-9.0 , 19.0, 2,3 , 2);
body.addBox( -13.0,0.0 ,25.0 , 2,3 , 2);
body.addBox(-13.0 , -3.0,23.0 , 2,3 ,2 );
body.addBox(-13.0 ,-6.0 ,21.0 , 2, 3,2 );
body.addBox(-13.0 , -9.0,19.0 , 2, 3, 2);
body.setTextureOffset(31,48);
body.addBox(13.3 , 7.0, 27.0,1 , 1,15 );
body.addBox(13.3 , 7.0,42.0 ,1 ,1 ,3 );
body.addBox(-14.3,7.0 , 27.0,1 ,1 , 15);
body.addBox( -14.3,7.0 ,42.0 ,1 , 1, 3);
body.addBox( 0.3, 7.0, 44.3,14 ,1 , 1);
body.addBox( -14.3, 7.0, 44.3, 14, 1, 1);
body.addBox(-1.0 ,6.0 ,45.0 ,2 ,3 ,1 );
body.addBox( 14.0,16.0 ,40.0 , 1, 3, 6);
body.addBox( 0.0, 16.0, 45.0, 14, 3, 1);
body.addBox(-14.0 , 16.0, 45.0, 14,3 , 1);
body.addBox( -15.0,16.0 ,40.0 ,1 ,3 ,6 );
body.setTextureOffset(17,33);
body.addBox( 7.0, 10.0, 45.0, 5,3 , 1);
body.addBox( -12.0,10.0 ,45.0 ,5 , 3, 1);
body.setTextureOffset(0,48);
body.addBox( 11.0, 15.0, -18.0,4 ,7 ,7 );
body.addBox( -15.0, 15.0,-18.0 ,4 , 7,7 );
body.addBox( -15.0,15.0 ,31.0 ,4 , 7, 7);
body.addBox( 11.0,15.0 , 30.0, 4, 7,7 );

}
var angliaRenderType = Renderer.createHumanoidRenderer();
addangliaRenderType(angliaRenderType);