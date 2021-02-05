var x, minute = 0 , secs = 0 , mils = 0;
var a = document.getElementById("mil");
var b = document.getElementById("sec");
var c = document.getElementById("min");
function but1()
{
   mils +=1;
   if(mils == 100)
   {
       mils = 1;
       secs +=1;
       b.innerHTML = secs;
       if(secs == 60)
       {
           secs = 1;
           minute +=1;
           c.innerHTML = minute;
       }
   }
   a.innerHTML = mils;
   x=setTimeout(but1,10);
   document.getElementById("str").disabled = true;
   document.getElementById("main").id='main1';
}


function but2()
{
   clearTimeout(x);
   document.getElementById("str").disabled = false;
   document.getElementById("main1").id='main';
}


// var intervel , minute = 0 , secs = 0 , mils = 0;
// var a = document.getElementById("mil");
// var b = document.getElementById("sec");
// var c = document.getElementById("min");
// function but()
// {
//     mils ++;
//     a.innerHTML = mils;
//          if(mils == 100)
//          {
//              mils = 0;
//              secs +=1;
//              b.innerHTML = secs;
//              if(secs == 60)
//              {
//                  secs = 0;
//                  minute +=1;
//                  c.innerHTML = minute;
//              }
//          }
// }
// function but1()
// {
//     intervel = setInterval(but,10);
//     document.getElementById("str").disabled = true;
// }
// function but2()
// {
//     clearInterval(intervel);
//     document.getElementById("str").disabled = false;
// }