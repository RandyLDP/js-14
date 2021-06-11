const btn = document.querySelector('#mybutton');

btn.addEventListener('click', function(e){
  if(e.target.className == 'btn-alert');{
      alert('button clicked');
  }
})

// const color = document.querySelector('.blue-background');

// color.addEventListener('click',function(e){
//    if (e.target.className == 'background');{
//        const button = e.target.parentElement;
//        color.classList.add('red-background');
//    }
// })

const color = document.querySelector('.blue-background');

color.addEventListener('click',function(e){
   if (e.target.className == 'background');{
       const button = e.target.parentElement;
       color.classList.toggle('red-background');
   }
})
