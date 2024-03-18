Webcam.set({
    crop_width : 300,
    crop_height : 350,
    image_format : "png",
    png_quality :  100
})

Webcam.attach("#camera");

function capture()
{
    setTimeout(function(){
        Webcam.snap(function(data_uri){
            document.getElementById("selfie").innerHTML = '<img id = "image" src = "' + data_uri + '">'
        })
    },5000)
}

model = ml5 .imageClassifier("https://teachablemachine.withgoogle.com/models/adiVGTzcO/model.json",modelLoded);

function modelLoded(){
    console.log("Teachable machine is linked !!!!")
}


function predict(){
    img = document.getElementById("image");
    model.classify(img , showresult);
}

pred = "";



function showresult(error,result ){
             if(error){
                console.log(error);
             }

             else{
                console.log(result);
                pred = result[0].label;

                if(pred == "proper mask"){
                    document.getElementById("pred").innerHTML = "prediction: proper mask 😊"
                 }

                 if(pred == "improper mask"){
                    document.getElementById("pred").innerHTML = "prediction: improper mask 😖"
                 }

                 if(pred == "no mask"){
                    document.getElementById("pred").innerHTML = "prediction: no mask 😀 "
                 }
             }
           
}