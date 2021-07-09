Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src = "'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pEQYY41Nv/',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}

function place_to_recycle()
{
    if(results[0].label == "Plastic 1")
    {
        document.getElementById("result_object_place").innerHTML = "Sanjose Recyling Center";
    }
    
    if(results[0].label == "Plastic 2"){
        document.getElementById("result_object_place").innerHTML = "Sanjose Recyling Center";
    }
    if(results[0].label == "Plastic 3"){
        document.getElementById("result_object_place").innerHTML = "Cannot Be recylced but can be donated to places such as Goodwill and Salvation Army";
    }
    if(results[0].label == "Plastic 4"){
        document.getElementById("result_object_place").innerHTML = "Sanjose Recyling Center";
    }

    if(results[0].label == "Plastic 5"){
        document.getElementById("result_object_place").innerHTML = "Sanjose Recyling Center";
    }

    if(results[0].label == "Plastic 6"){
    document.getElementById("result_object_place").innerHTML = "Sanjose Recyling Center";
    }

    if(results[0].label == "Plastic 7"){
        document.getElementById("result_object_place").innerHTML = "Sanjose Recyling Center";
    }



}
