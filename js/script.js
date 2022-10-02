
let index = 0;
function Storage(data, el) {
   localStorage.setItem(data, el)
}

let lIndex = localStorage.getItem('index')

function slider() {
   let lIndex = localStorage.getItem('index')

   if (lIndex > $a('.slide-item').length - 1) {
      index = 0
      Storage("index", index)
   }

   if (lIndex < 0) {
      index = $a('.slide-item').length - 1;
      Storage("index", index)
   }
   lIndex = localStorage.getItem('index')

   let width = $('.slide-content').offsetWidth

$('.slide-list').style.transform = `translateX(-${lIndex * (width + 2)}px)`;
}
slider()




$('.next').addEventListener('click', () => {
   index++;
   Storage("index", index)
   slider()
})

$('.prev').addEventListener('click', () => {
   index--;
   Storage("index", index)
   slider()
})


setInterval(() => {
   index=localStorage.getItem('index')
   index++;
   Storage("index", index)
   lIndex =  localStorage.getItem('index')
   slider()
   indicate(lIndex)
}, 3000)

$a('.ind').forEach((e, i) => {
   e.addEventListener('click', () => {
      index = i
      Storage("index", index)
      lIndex =  localStorage.getItem('index')
      slider()
      indicate(lIndex)
   })
})

indicate(index)

function indicate(index) {
   $a('.ind').forEach((e, i) => {
      if (i ==localStorage.getItem('index')) {
         e.classList.add('current')
      } else {
         e.classList.remove('current')
      }
   })
}


//count

let count = 0

function countF(i) {
   if(i){
      $('.quantity').innerHTML = ''
      $('.quantity').innerHTML = `${i}`
   }else{
      $('.quantity').innerHTML = ''
      $('.quantity').innerHTML = `${0}`
   }
}

countF(localStorage.getItem('count'))

$('.min').addEventListener('click', () => {

   if (localStorage.getItem('count')> 0){
      count--
      Storage('count', count)
      countF(localStorage.getItem('count'))
   }
})

$('.add').addEventListener('click', () => {
   count++
   Storage('count', count)
   countF(localStorage.getItem('count'))
})

$('.del').addEventListener('click', () => {
   $('.product').style.display = 'none'
   count = 0
   Storage('count', count)
   countF(localStorage.getItem('count'))
   cartF()
})

$('.card').addEventListener('click', () => {
   cartF()
})

$('.close').addEventListener('click', () => {
   $('.basket').style.display = 'none'
})


$('.korzinka').addEventListener('click', () => {
   cartF()
})



$('.menu').addEventListener('click', () => {
   if ($('.menu-items').style.transform == 'translateX(-120vw)') {
      $('.menu-items').style.transform = 'translateX(0vw)'
      $('.menu-items').style.boxShadow = '0px 0px 220vw rgb(0, 0, 0)'
      $('.menu').setAttribute('src', 'img/icon-close.svg')


   } else {
      $('.menu-items').style.transform = 'translateX(-120vw)'
      $('.menu-items').setAttribute('src', 'img/icon-menu.svg')
      $('.menu-items').style.boxShadow = 'none'
   }
})



function cartF() {
   $('.basket').style.display = 'block'
   let lCount =localStorage.getItem('count')

   if (lCount && lCount>0) {
      $('.note').style.display = 'none'
      $('.c').innerHTML = lCount
      $('.res').innerHTML = lCount * 125
      $('.product').style.display = 'block'
      $('.check').style.display = 'block'
      $('.product').style.display = 'flex'
      console.log(count);
   } 
   
   else {
      $('.note').style.display = 'block'
      $('.product').style.display = 'none'
      $('.check').style.display = 'none'
   }
}




let index1 = 0;


function slider1() {

   if (index1 > $a('.slide-item1').length - 1) {
      index1 = 0
   }

   if (index1 < 0) {
      index1 = $a('.slide-item1').length - 1;
   }


   let width = $('.slide-content1').offsetWidth

$('.slide-list1').style.transform = `translateX(-${index1* (width + 2)}px)`;
}
slider1()




$('.next1').addEventListener('click', () => {
   index1++;
   slider1()
   indicate1(index1)

})

$('.prev1').addEventListener('click', () => {
   index1--;
   slider1()
   indicate1(index1)
})


setInterval(() => {
   index1++;
   slider1()
   indicate1(index1)
}, 3000)

$a('.ph1').forEach((e, i) => {
   e.addEventListener('click', () => {
      index1 = i
      slider1()
      indicate1(index1)
   })
})

indicate1(index1)

function indicate1(index) {
   $a('.ph1').forEach((e, i) => {
      if (i ==index) {
         e.classList.add('current')
      } else {
         e.classList.remove('current')
      }
   })
}

$('.slide-content').addEventListener('click',()=>{
   if($('body').offsetWidth>660)
   $('.modal-preview').style.display = 'flex'
})

$('.close-modal').addEventListener('click',()=>{
   $('.modal-preview').style.display = 'none'
})






$('.check1').addEventListener('click',()=>{
   if($('.check1').checked){
      $('body').style.backgroundColor = 'black'      
      $('*').style.color = 'white'
      $('.container').style.borderBottom = '1px solid #ffffff2b'
      $('.basket').style.backgroundColor = '#535151'
      $('.count').style.backgroundColor = '#535151'
      $('.basket').style.boxShadow = 'none'
      $('.b-head').style.borderBottom = '1px solid #ffffff2b'
      $('.logo-site').setAttribute('src','img/white-logo.svg')
      $('.korzinka').setAttribute('src','img/karzinka-white.svg')
      $('.close').setAttribute('src','img/close-white.svg')
      
      if($('body').offsetWidth<739){
         console.log('snickers');
         $('.menuP').style.backgroundColor = '#484646'
      }else{
         $('.menuP').style.backgroundColor = 'transparent'
      }
      
      
   }else{
      $('.logo').setAttribute('src','img/logo.svg')
      $('body').style.backgroundColor = 'white'      
      $('.container').style.borderBottom = ' 1px solid #0000002b'
      $('.b-head').style.borderBottom = '1px solid rgba(0, 0, 0, 0.114)'
      $('.basket').style.boxShadow = 'rgba(149, 157, 165, 0.424) 0px 8px 24px'
      $('.basket').style.backgroundColor = '#fff'
      $('.korzinka').setAttribute('src','img/icon-cart.svg')
      $('.close').setAttribute('src','img/icon-close.svg')
      $('.count').style.backgroundColor = '#00000019'
      $('.menu-items').style.backgroundColor = 'none'
         
      }
      $('*').style.color = 'black'
      
   }
)


