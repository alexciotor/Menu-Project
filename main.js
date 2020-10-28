const menu = [{
    id: 1,
    title: 'Peperoni Pizza',
    cateogy: 'Lunch',
    price: 15.99, 
    img: "./Photo/photo1.jpg",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa tenetur qui error velit ab impedit,laudantium modi labore nulla maxime porro veniam cumque consequatur commodi aperiam, laborum fuga officia!'
},
{
    id: 2,
    title: 'Double Beef Burger',
    cateogy: 'Dinner',
    price: 25.99, 
    img: "./Photo/photo2.jpg",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa tenetur qui error velit ab impedit,laudantium modi labore nulla maxime porro veniam cumque consequatur commodi aperiam, laborum fuga officia!'
},
{
    id: 3,
    title: 'Chicken Sandwich and Fries',
    cateogy: 'Dinner',
    price: 19.89, 
    img: "./Photo/photo3.jpg",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa tenetur qui error velit ab impedit,laudantium modi labore nulla maxime porro veniam cumque consequatur commodi aperiam, laborum fuga officia!'
},

{
    id: 4,
    title: 'Avocado Salad',
    cateogy: 'Breakfest',
    price: 14.69, 
    img: "./Photo/photo4.jpg",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa tenetur qui error velit ab impedit,laudantium modi labore nulla maxime porro veniam cumque consequatur commodi aperiam, laborum fuga officia!'
},

{
    id: 5,
    title: 'Mixed Rice Salad',
    cateogy: 'Lunch',
    price: 13.99, 
    img: "./Photo/photo5.jpg",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa tenetur qui error velit ab impedit,laudantium modi labore nulla maxime porro veniam cumque consequatur commodi aperiam, laborum fuga officia!'
},
{
    id: 6,
    title: 'Tomato Sos Pasta',
    cateogy: 'Dinner',
    price: 19.99, 
    img: "./Photo/photo6.jpg",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa tenetur qui error velit ab impedit,laudantium modi labore nulla maxime porro veniam cumque consequatur commodi aperiam, laborum fuga officia!'
},

{
    id: 7,
    title: 'Beef Steak and Vegetables',
    cateogy: 'Dinner',
    price: 35.99, 
    img: "./Photo/photo7.jpg",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa tenetur qui error velit ab impedit,laudantium modi labore nulla maxime porro veniam cumque consequatur commodi aperiam, laborum fuga officia!'
},

{
    id: 8,
    title: 'Fresh Sushi',
    cateogy: 'Lunch',
    price: 15.99, 
    img: "./Photo/photo8.jpg",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa tenetur qui error velit ab impedit,laudantium modi labore nulla maxime porro veniam cumque consequatur commodi aperiam, laborum fuga officia!'
},

{
    id: 9,
    title: 'Caramel Pancakes',
    cateogy: 'Desert',
    price: 10.99, 
    img: "./Photo/photo9.jpg",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa tenetur qui error velit ab impedit,laudantium modi labore nulla maxime porro veniam cumque consequatur commodi aperiam, laborum fuga officia!'
},

{
    id: 10,
    title: 'Solmon with Rice',
    cateogy: 'Lunch',
    price: 22.99, 
    img: "./Photo/photo10.jpg",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa tenetur qui error velit ab impedit,laudantium modi labore nulla maxime porro veniam cumque consequatur commodi aperiam, laborum fuga officia!'
},

{
    id: 11,
    title: 'Chicken Strips',
    cateogy: 'Lunch',
    price: 8.99, 
    img: "./Photo/photo11.jpg",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa tenetur qui error velit ab impedit,laudantium modi labore nulla maxime porro veniam cumque consequatur commodi aperiam, laborum fuga officia!'
},

{
    id: 12,
    title: 'Ribes',
    cateogy: 'Dinner',
    price: 26.99, 
    img: "./Photo/photo12.jpg",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa tenetur qui error velit ab impedit,laudantium modi labore nulla maxime porro veniam cumque consequatur commodi aperiam, laborum fuga officia!'
}

]

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function(){
    let displayMenu =menu.map(item=>{
       
       return  `<article class="menu-item"> 
        <img src=${item.img} alt="food">
        <div class="item-info">
            <header>
            
         <h4 class="food-type">${item.title}</h4>
         <h4 class="price"> ${item.price} $ </h4>
      
        </header>
    <p class="item-text" >${item.desc}</p>
        </div>
  
    </article>
   `
   
    })
   displayMenu = displayMenu.join('');
   console.log(displayMenu)
   sectionCenter.innerHTML =displayMenu
})