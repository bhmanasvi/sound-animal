
function start()
    {
       navigator.mediaDevices.getUserMedia({audio:true});
       classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HiXBn2XuQ/',Modelready);
    }

function Modelready()
{
    classifier.classify(gotresult);
}