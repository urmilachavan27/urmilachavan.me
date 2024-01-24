const counters = document.querySelectorAll('.value');
const speed = 10000;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 50);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});


var i = 0;
var txt = 'Front-end Developer.';
var speedd = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speedd);
  }
}
