const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const ref = document.querySelector(".gallery");
// console.log(ref);

// const element = images.map( (imag) => {
//   ref.insertAdjacentHTML("beforeend", `<li><img src = ${imag.url}, alt = ${imag.alt}, width = ${300}></li>`);
// });


const ref = document.querySelector(".gallery");
ref.insertAdjacentHTML("beforeend", 
`<li><img src = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
alt = "White and Black Long Fur Cat", 
width = ${300}></li>
<li><img src = "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
alt = "Orange and White Koi Fish Near Yellow Koi Fish", 
width = ${300}></li>
<li><img src = "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
alt = "Group of Horses Running", 
width = ${300}></li>`);

console.log(ref);
