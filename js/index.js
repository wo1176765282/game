/*
* @Author: asuspc
* @Date:   2018-08-03 14:50:08
* @Last Modified by:   asuspc
* @Last Modified time: 2018-08-03 17:33:55
*/
window.onload=function(){
	let screen=document.querySelector(".screen");
	let life=document.querySelector(".life");
	let point=document.querySelector(".point");
    let start=document.querySelector(".start");
	let bgMusic=document.querySelector(".bgMusic");
	let c=document.querySelector(".c");
	let btn=document.querySelectorAll(".btn");
	let zhezhao=document.querySelector(".zhezhao");
	let gameOver=document.querySelector(".gameOver span");
	let btn2=document.querySelector(".btn2")
	let audio1=document.querySelector(".audio1");
    let audio2=document.querySelector(".audio2");



    let gameobj=new Game;
	gameobj.screen=screen;
	gameobj.life=life;
	gameobj.point=point;
	// gameobj.start=start;
	gameobj.letterWidth="0.53";
	gameobj.createLetter(5);
	gameobj.zhezhao=zhezhao;
	gameobj.gameOver=gameOver
	gameobj.btn2=btn2;
	gameobj.c=c;
	gameobj.bgMusic=bgMusic
	gameobj.audio1=audio1
	gameobj.audio2=audio2
	gameobj.run();

}