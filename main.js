function preload() {
    //put code for preloading things here
    //For eg - loading images
  }
  
  function setup() {
    //put setup code here
    //For eg - setting canvas
    canvas=createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300)
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
  }
  function modelLoaded(){
      console.log("poseNet Initialized")
  }
  function gotPoses(results){
      if(results.length<0){
          console.log(results);
          console.log("nose x"+results[0].pose.nose.x);
          console.log("nose y"+results[0].pose.nose.y);
      }
  }
    function draw() {
    image(video,0,0,300,300); 
  }

  function take_snapshot(){
    save('student_name.png')
    }

   