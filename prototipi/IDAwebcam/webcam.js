// IDA INCLUSIVE DIGITAL ASSISTANCE: Design open source di assistente digitale per la didattica inclusiva di studenti con DSA.
// Relatore Daniele Tabellini Daniele Tabellini @fupete MIT License
// Cristiano Chiti @ccristiano22 © 2018 MIT License
// webcam face tracking, eye monitoring and push notification in p5.js, clmtrackr.js, bootstrap.css Line issue | San Marino, IT | 3.2018
// Educational purpose, made for Master's thesis in interaction design @UniRSM
// Università degli Studi della Repubblica di San Marino
// Università Iuav di Venezia
// Laurea Magistrale in Design
// Inspired by Audun Mathias Øygard 2017 MIT License
// This example uses Audun Mathias Øygard's clmtracker along with p5.js, p5.dom.js, and p5.sound.js
// https://github.com/auduno/clmtrackr
// http://p5js.org/ -->



var ctracker;

function setup() {

  frameRate(60);
  var i = 100;

  // setup camera capture
  var videoInput = createCapture(VIDEO);
  videoInput.size(500, 400);
  videoInput.position(800, 100);

  // setup canvas
  var cnv = createCanvas(500, 400);
  cnv.position(800, 100);

  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);


}

  function draw() {

    var time = frameCount% 101;


    // get array of face marker positions [x, y] format
    var positions = ctracker.getCurrentPosition();
    if(positions.length > 0) {
      var mouthH = positions[57][1] - positions[60][1];
      var leftEyeH = positions[26][1] - positions[24][1];
      var rightEyeH = positions[31][1] - positions[29][1];
      var faceH = positions[7][1] - positions[33][1];

      //var mouthR = mouthH/faceH;
      var leftEyeR = leftEyeH/10;
      var rightEyeR = rightEyeH/10;
      var EyeR = leftEyeR+rightEyeR;


      //var t = EyeR > 0.16 ? "Ciao" : "Dormo" ;
      //var v = EyeR > 0.16 ? "Ciao" : "Dormo" ;
      //var t = EyeR < 0.075 ? " Dormo " : " Dormo " ;
    if ( EyeR < 1.94 && time == 100) {
      i--;
      print("chiusi",EyeR);

      if (i = -1) {
        var u = new SpeechSynthesisUtterance("Ti vedo stanco");
        var ciao = false;
        print("Sono chiusi", i );
        speechSynthesis.speak(u);
       }

     } else if (EyeR > 2.25 && time == 100){
      i++;
      print("aperti",EyeR);

      if (i = 200) {
        var t = new SpeechSynthesisUtterance("Ti vedo Attivo");
        var ciao = true;
        print("Sono sveglio", i );
        speechSynthesis.speak(t);
      }

      } else {
        //speechSynthesis.cancel();
      }
    }
    clear();


    // // get array of face marker positions [x, y] format
     var positions = ctracker.getCurrentPosition();

     for (var i=0; i<positions.length; i++) {
       // set the color of the ellipse based on position on screen
       fill(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 255), 255);
       // draw ellipse at each position point
       ellipse(positions[i][0], positions[i][1], 2, 2);
     }

     var occhi2 = map(EyeR, 0, 100);
     var occhi = map(EyeR, 1.4, 2.7, 0, 100);
     text(occhi, 500 , 10);
     text(EyeR, 10 , 10);
     noFill();
     line(180, 250, 320, 250);
     ellipse(250, 210, 150, 240);


     if (ciao == true) {
       var notify;

         if (Notification.permission === 'default') {
          // alert('perfavore, accetta le notifiche dopo questa notifica')
         } else {
           notify = new Notification('Nuovo messaggio da IDA',{
           body: 'Ti vedo Attivo!',
           icon: 'img/messaggio.png'
         });
         notify.onclick = function(){
           window.location = 'index.html' + this.tag;
         }
        }
     }

     if (ciao == false) {
       var notify;
        // alert('perfavore, accetta le notifiche dopo questa notifica')
         if (Notification.permission === 'default') {
           alert('perfavore, accetta le notifiche dopo questa notifica')
         } else {
           notify = new Notification('Nuovo messaggio da IDA',{
           body: 'Ti vedo stanco',
           icon: 'img/messaggio.png'
         });
         notify.onclick = function(){
           window.location = 'index.html' + this.tag;
         }
        }
     }

  }
