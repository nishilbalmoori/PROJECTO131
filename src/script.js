var createItems = new ShortCuts();
var img = "";
var objects = [];
var i = 0;

status = "";

function preload(){
    img = loadImage(imgSRC);

}

function setup(){
    if(imgSRC == "imgs/Helicopter.jpg"){
        createItems.create("canvas",1200,800);
    }else{
        createItems.create("canvas",640,420);
    }
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("Status").innerHTML = "Status: Detecting Object";
}

function gotResult(e,r){
    if(e){
        console.error(e);
    }
    console.log(r);
    objects = r;
}

function modelLoaded(){
    console.log("FINALLY IT'S WORKING\n anyway back to my divorce papers");
    status = true;
    objectDetector.detect(img, gotResult);
    c1 = [255,0,0];
    c2 = [0,0,255];

}

function draw(){
    background(255);
    image(img,0,0);

    if(status != ""){
        for(i =0;i<objects.length;i++){
            document.getElementById("Status").innerHTML = "Status: Object Detected";
            if(i%2 == 0){
                fill(c2[0],c2[1],c2[2]);
                stroke(c2[0],c2[1],c2[2]);
            }else{
                fill(c1[0],c1[1],c1[2]);
                stroke(c1[0],c1[1],c1[2]);
            }
            let percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent+"%",objects[i].x+15, objects[i].y+15);
            noFill();
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }

    // drawDogBox();
    // drawCatBox();
}
// function drawDogBox(){
//     fill(255,0,0);
//     textSize(24);
//     text("Dog",45,80);
//     noFill();
//     stroke(255,0,0);
//     rect(30,60,450,350);
//     noStroke();
// }
// function drawCatBox(){
//     fill(0,0,255);
//     textSize(24);
//     text("Cat",220,120);
//     noFill();
//     stroke(0,0,255);
//     rect(210,100,425,300);
// }

