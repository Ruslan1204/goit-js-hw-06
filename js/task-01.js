const refs = document.querySelectorAll(".item");
console.log(`Number of categories: ${refs.length}`)

refs.forEach(function(ref){
  console.log(`Category: ${ref.firstElementChild.textContent}`)
  console.log(`Elements: ${ref.lastElementChild.children.length}`)
})


  
