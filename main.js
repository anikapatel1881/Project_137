
objects = [];
status = "";


function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
  object_name = document.getElementById("object_name").value;
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}

function draw() {
  image(video, 0, 0, 380, 380);
      if(status != ""){

        //1. Set the objectDetector as: objectDetector.detect(video, gotResult);

        //2. Create a For loop that starts at 0, ends according to the length of the objects list and the interval must be i++:
        for (                  ) {

          document.getElementById("status").innerHTML = "Status : Object Detected";
          
          //3. Set the color for the text of the name of objects to be shown on the canvas:
          fill("      ");
          text(objects[i].label, objects[i].x + 15, objects[i].y + 15);
          noFill();
          //4. Set the color for the rectangle that will indicate the objects to be shown on the canvas:
          stroke("       ");
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

          //5. Set an if statement so you can compare if the objects label is equal to the object_name variable:

          if (          ) {
            video.stop();
            objectDetector.detect(gotResult);
            document.getElementById("object_status").innerHTML = object_name + " Found";
          }
          else
          {
            //6. Set the text object_name + " Not Found" on the object_status label from html by using getElementById...:

          }          
         }
      }
}
