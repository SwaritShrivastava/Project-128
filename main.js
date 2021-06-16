song="";
leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;

function preload(){
    song=loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
     video=createCapture(VIDEO);
     video.hide();
     posenet=ml5.poseNet(video,modelLoaded);
     posenet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,400,400);
}

function play(){
    song.play();
    song.setVolume(3);
    song.rate(1);
}

function modelLoaded(){
    console.log("posenet is initialized")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristx=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        console.log("Left Wrist X="+leftWristx+"Left Wrist Y="+leftWristy);
        rightWristx=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.y;
        console.log("Right Wrist X="+rightWristx+"Right Wrist Y="+rightWristy);
    }
}