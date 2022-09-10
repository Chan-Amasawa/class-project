import './style.scss';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import 'waypoints/lib/noframework.waypoints.js';

let options = {
    strings: ['Food...', 'Drink...'],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
  };
  
let typed = new Typed('.element', options);

let toDown = {
  distance: '50px',
  origin: 'top',
  interval: 300,
  duration: 800,
};

ScrollReveal().reveal('.to-down', toDown);

let toRight = {
  distance: '50px',
  origin: 'left',
  interval: 300,
  duration: 800,
};

ScrollReveal().reveal('.to-right', toRight);

let toLeft = {
  distance: '50px',
  origin: 'right',
  interval: 300,
  duration: 800,
};

ScrollReveal().reveal('.to-left', toLeft);

new Waypoint({
  element: document.getElementById('home-content'),
  handler: function(direction) {
    let oldWaypoint = document.querySelector('.nav-link.active')
    if(oldWaypoint != null){
      oldWaypoint.classList.remove('active')
    }
    let currentWaypoint = document.querySelector(`[href='#home']`);
    currentWaypoint.classList.add("active");
    
  },
  offset: '0%' 
})

// new Waypoint({
//   element: document.getElementById('about'),
//   handler: function(direction) {
//     let oldWaypoint = document.querySelector('.nav-link.active')
//     oldWaypoint.classList.remove('active')
//     let currentWaypoint = document.querySelector(`[href='#about']`);
//     currentWaypoint.classList.add("active");
    
//   },
//   offset: '0%' 
// })

// new Waypoint({
//   element: document.getElementById('services'),
//   handler: function(direction) {
//     let oldWaypoint = document.querySelector('.nav-link.active')
//     oldWaypoint.classList.remove('active')
//     let currentWaypoint = document.querySelector(`[href='#services']`);
//     currentWaypoint.classList.add("active");
    
//   },
//   offset: '0%' 
// })

// new Waypoint({
//   element: document.getElementById('menus'),
//   handler: function(direction) {
//     let oldWaypoint = document.querySelector('.nav-link.active')
//     oldWaypoint.classList.remove('active')
//     let currentWaypoint = document.querySelector(`[href='#menus']`);
//     currentWaypoint.classList.add("active");
    
//   },
//   offset: '75%' 
// })

  let sections = ['about', 'services', 'menus'];
  sections.forEach(function(section){
    new Waypoint({
      element: document.getElementById(section),
      handler: function(direction) {
        let oldWaypoint = document.querySelector('.nav-link.active')
        oldWaypoint.classList.remove('active')
        let currentWaypoint = document.querySelector(`[href='#${section}']`);
        currentWaypoint.classList.add("active");
      },
      offset: '50%' 
    })
  });

let menuLists=[
  {
    id: 1,
    img: 'public/img/img/plate1.png',
    title: 'berbecue salad',
    description: 'Special Delious Salad',
    price: 22.2,
    currency: "$"
  },
  {
    id: 2,
    img: 'public/img/img/plate2.png',
    title: 'Salad With Fish',
    description: 'Special Delious Salad',
    price: 30.5,
    currency: "$"
  },
  {
    id: 3,
    img: 'public/img/img/plate3.png',
    title: 'spanach salad',
    description: 'Special Delious Salad',
    price: 50,
    currency: "$"
  }
];

let menuRow = document.getElementById('menuRow');
menuLists.forEach(function(menuList){
  let div = document.createElement('div');
  div.classList.add('col-8', 'col-md-4', 'col-lg-2');
  div.innerHTML = 
  ` 
    <div class="card plate-card">
      <img src="${menuList.img}" class="w-75 mx-auto d-block my-4">
      <div class="card-body">
        <p class="fw-bold">${menuList.title}</p>
        <p class="text-black-50">${menuList.description}</p>
        <div class="d-flex justify-content-between align-items-center"> 
          <p class="mb-0 fw-bold">${menuList.currency} ${menuList.price}</p>
          <button class="btn btn-primary">
            <i class="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>   
    </div>
  ` 
  menuRow.append(div);
})