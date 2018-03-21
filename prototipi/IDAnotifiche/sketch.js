// IDA INCLUSIVE DIGITAL ASSISTANCE: Design open source di assistente digitale per la didattica inclusiva di studenti con DSA.
// Relatore Daniele Tabellini Daniele Tabellini @fupete MIT License
// Cristiano Chiti @ccristiano22 © 2018 MIT License
// webcam face tracking, eye monitoring and push notification in p5.js, clmtrackr.js, bootstrap.css Line issue | San Marino, IT | 3.2018
// Educational purpose, made for Master's thesis in interaction design @UniRSM
// Università degli Studi della Repubblica di San Marino
// Università Iuav di Venezia
// Laurea Magistrale in Design
// Inspired by Audun Mathias Øygard 2017 MIT License


var dnperm = document.getElementById('dnperm');
var dntrigger = document.getElementById('dntrigger');
var slider;
var text;
var val;

///////// simulare una notifica

//////// notifica
function myFunction() {

  var notify;

    if (Notification.permission === 'default') {
      alert('perfavore, accetta le notifiche dopo questa notifica')
    } else {
      notify = new Notification('Messaggio da IDA',{
      body: 'Monitoraggio avviato',
    });
    notify.onclick = function(){
      window.location = 'index.html' + this.tag;
    }
   }
 }

function myFunction1() {

  var notify;

    if (Notification.permission === 'default') {
      alert('perfavore, accetta le notifiche dopo questa notifica')
    } else {
      notify = new Notification('Nuovo messaggio da IDA',{
      body: 'come procede lo studio?',
    });
    notify.onclick = function(){
      window.location.href = 'index2.html' + this.tag;
    }
   }
 }

 function myFunction2() {

   var notify;

     if (Notification.permission === 'default') {
       alert('perfavore, accetta le notifiche dopo questa notifica')
     } else {
       notify = new Notification('Nuovo messaggio da IDA',{
       body: 'Continua così! hai a disposizione ancora 40 minuti. ',
     });
     notify.onclick = function(){
       window.location = 'index21.html' + this.tag;
     }
    }
  }

  function myFunction22() {

    var notify;

      if (Notification.permission === 'default') {
        alert('perfavore, accetta le notifiche dopo questa notifica')
      } else {
        notify = new Notification('Nuovo messaggio da IDA',{
        body: 'Sono passati 40 minuti, lo stuido procede ancora bene?',
      });
      notify.onclick = function(){
        window.location = 'index22.html' + this.tag;
      }
     }
   }

   function myFunction23() {

     var notify;

       if (Notification.permission === 'default') {
         alert('perfavore, accetta le notifiche dopo questa notifica')
       } else {
         notify = new Notification('Nuovo messaggio da IDA',{
         body: 'Sono passati 40 minuti, lo stuido procede ancora bene?',
       });
       notify.onclick = function(){
         window.location = 'index5.html' + this.tag;
       }
      }
    }


  function myFunction3() {

    var notify;

      if (Notification.permission === 'default') {
        alert('perfavore, accetta le notifiche dopo questa notifica')
      } else {
        notify = new Notification('Nuovo messaggio da IDA',{
        body: 'Capisco, affronta la materia con calma! Seleziona il messaggio per alcuni suggerimenti',
      });
      notify.onclick = function(){
        window.location = 'index31.html' + this.tag;
      }
     }
   }

   function myFunction31() {

     var notify;

       if (Notification.permission === 'default') {
         alert('perfavore, accetta le notifiche dopo questa notifica')
       } else {
         notify = new Notification('Nuovo messaggio da IDA',{
         body: 'Parlami delle tue difficoltà',
       });
       notify.onclick = function(){
         window.location = 'index33.html' + this.tag;
       }
      }
    }

   function myFunction4() {

     var notify;

       if (Notification.permission === 'default') {
         alert('perfavore, accetta le notifiche dopo questa notifica')
       } else {
         notify = new Notification('Nuovo messaggio da IDA',{
         body: 'sono trascorsi 40 minuti, facciamo una pausa di 10 minuti?',
       });
       notify.onclick = function(){
         window.location = 'index41.html' + this.tag;
       }
      }
    }

    function myFunction41() {

      var notify;

        if (Notification.permission === 'default') {
          alert('perfavore, accetta le notifiche dopo questa notifica')
        } else {
          notify = new Notification('Nuovo messaggio da IDA',{
          body: 'Come procede lo studio?',
        });
        notify.onclick = function(){
          window.location = 'index42.html' + this.tag;
        }
       }
     }

     function myFunction42() {

       var notify;

         if (Notification.permission === 'default') {
           alert('perfavore, accetta le notifiche dopo questa notifica')
         } else {
           notify = new Notification('Nuovo messaggio da IDA',{
           body: 'Come procede lo studio?',
         });
         notify.onclick = function(){
           window.location = 'index42.html' + this.tag;
         }
        }
      }


      function myFunction43() {

        var notify;

          if (Notification.permission === 'default') {
            alert('perfavore, accetta le notifiche dopo questa notifica')
          } else {
            notify = new Notification('Nuovo messaggio da IDA',{
            body: 'Capisco, affronta la materia con calma, hai ancora 40 minuti a disposizione!',
          });
          notify.onclick = function(){
            window.location = '' + this.tag;
          }
         }
       }

       function myFunction44() {

         var notify;

           if (Notification.permission === 'default') {
             alert('perfavore, accetta le notifiche dopo questa notifica')
           } else {
             notify = new Notification('Nuovo messaggio da IDA',{
             body: 'facciamo una pausa di 10 minuti!',
           });
           notify.onclick = function(){
             window.location = 'index42.html' + this.tag;
           }
          }
        }

    function myFunction5() {

      var notify;

        if (Notification.permission === 'default') {
          alert('perfavore, accetta le notifiche dopo questa notifica')
        } else {
          notify = new Notification('Nuovo messaggio da IDA',{
          body: 'Sono passati 40 minuti, lo stuido procede ancora bene?',
        });
        notify.onclick = function(){
          window.location = 'index22.html' + this.tag;
        }
       }
     }

     function myFunction6() {

       var notify;

         if (Notification.permission === 'default') {
           alert('perfavore, accetta le notifiche dopo questa notifica')
         } else {
           notify = new Notification('Nuovo messaggio da IDA',{
           body: 'Sono passati 40 minuti, avete ancora delle difficoltà? ',
         });
         notify.onclick = function(){
           window.location = 'index32.html' + this.tag;
         }
        }
      }

      function myFunction7() {

        var notify;

          if (Notification.permission === 'default') {
            alert('perfavore, accetta le notifiche dopo questa notifica')
          } else {
            notify = new Notification('Nuovo messaggio da IDA',{
            body: 'Studio interrotto',
          });
          notify.onclick = function(){
            window.location = 'index42.html' + this.tag;
          }
         }
       }

       function myFunctionfine() {

         var notify;

           if (Notification.permission === 'default') {
             alert('perfavore, accetta le notifiche dopo questa notifica')
           } else {
             notify = new Notification('Nuovo messaggio da IDA',{
             body: 'Tempo di studio esaurito',
           });
           notify.onclick = function(){
             window.location = 'index5.html' + this.tag;
           }
          }
        }

       function myFunctionpausa() {

         var notify;

           if (Notification.permission === 'default') {
             alert('perfavore, accetta le notifiche dopo questa notifica')
           } else {
             notify = new Notification('Nuovo messaggio da IDA',{
             body: 'Inizio pausa di 10 minuti',
           });
           notify.onclick = function(){
             window.location = '' + this.tag;
           }
          }
        }

        function myFunctionfinepausa() {

          var notify;

            if (Notification.permission === 'default') {
              alert('perfavore, accetta le notifiche dopo questa notifica')
            } else {
              notify = new Notification('Nuovo messaggio da IDA',{
              body: 'Fine pausa',
            });
            notify.onclick = function(){
              window.location = '' + this.tag;
            }
           }
         }

        function myFunctioninterrompi() {

          var notify;

            if (Notification.permission === 'default') {
              alert('perfavore, accetta le notifiche dopo questa notifica')
            } else {
              notify = new Notification('Nuovo messaggio da IDA',{
              body: 'Interrompo lo studio. Potrai ripredere ha studiare in un altro momento.',
            });
            notify.onclick = function(){
              window.location = '' + this.tag;
            }
           }
         }

         function myFunctionrisp1() {

           var notify;

             if (Notification.permission === 'default') {
               alert('perfavore, accetta le notifiche dopo questa notifica')
             } else {
               notify = new Notification('Nuovo messaggio da IDA',{
               body: 'Dividi il testo in parti, cerca di identificare le informazioni che ti servono e crea una mappa o uno schema per fissare i concetti',
             });
             notify.onclick = function(){
               window.location = '' + this.tag;
             }
            }
          }
          function myFunctionrisp2() {

            var notify;

              if (Notification.permission === 'default') {
                alert('perfavore, accetta le notifiche dopo questa notifica')
              } else {
                notify = new Notification('Nuovo messaggio da IDA',{
                body: 'Cerca nel testo solo terminologie che non consci, dagli significato e poi leggi il testo',
              });
              notify.onclick = function(){
                window.location = '' + this.tag;
              }
             }
           }
           function myFunctionrisp3() {

             var notify;

               if (Notification.permission === 'default') {
                 alert('perfavore, accetta le notifiche dopo questa notifica')
               } else {
                 notify = new Notification('Nuovo messaggio da IDA',{
                 body: 'Rileggi la consegna, determina cosa ti serve, e ricerca quelle informazioni',
               });
               notify.onclick = function(){
                 window.location = '' + this.tag;
               }
              }
            }

    function aggiornaOrologio() {
    var ora=new Date();
    var hh = ora.getHours();
    var mm = ora.getMinutes();
    var ss = ora.getSeconds();
    str = ((hh<10)?"0":"")+hh+":"+((mm<10)?"0":"")+mm+":"+((ss<10)?"0":"")+ss;
    document.getElementById('orologio').innerHTML = str;
    }

    function drawClock() {
      drawFace(ctx, radius);
      drawNumbers(ctx, radius);
      drawTime(ctx, radius);
    }

    function drawFace(ctx, radius) {
      var grad;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2*Math.PI);
      ctx.fillStyle = '#eee';
      ctx.fill();
      grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
      grad.addColorStop(0, '#333');
      grad.addColorStop(0, 'white');
      grad.addColorStop(1, '#333');
      ctx.strokeStyle = grad;
      ctx.lineWidth = '1px';
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, radius*0.05, 0, 2*Math.PI);
      ctx.fillStyle = '#333';
      ctx.fill();
    }

    function drawNumbers(ctx, radius) {
      var ang;
      var num;
      ctx.font = radius*0.1 + "px arial";
      ctx.textBaseline="middle";
      ctx.textAlign="center";
      for(num = 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
      }
    }
    function drawTime(ctx, radius){
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        //hour
        hour=hour%12;
        hour=(hour*Math.PI/6)+
        (minute*Math.PI/(6*60))+
        (second*Math.PI/(360*60));
        drawHand(ctx, hour, radius*0.5, radius*0.07);
        //minute
        minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
        drawHand(ctx, minute, radius*0.8, radius*0.07);
        // second
        second=(second*Math.PI/30);
        drawHand(ctx, second, radius*0.9, radius*0.02);
    }

    function drawHand(ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.moveTo(0,0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }
