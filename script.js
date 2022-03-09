const main = document.querySelector('main');
const list = [];

function displayList(list) {
  main.innerHTML = "";
  list.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item;
    main.append(div);
    
  });
}




function sortDescending() {
  list.sort((a, b) => {
    if (a > b) {
      return -1;
    } 
    else {
      return 1;
   
    }
  });

}

function sortAscening() {
  list.sort((a, b) => a < b ? -1 : 1);
}
function showOdd() {
  return  list.filter(item => item % 2 != 0)
   
 };
 function showEven() {
  return  list.filter(item => item % 2 == 0)
   
 };


displayList(list);
document
  .querySelector("#sort-descending")
  .addEventListener("click", function () {
    sortDescending();
    displayList(list);
  });
   
  document
  .querySelector("#sort-ascending")
  .addEventListener("click", function () {
    sortAscening();
    displayList(list);
   
  });
  document
  .querySelector("#show-odd")
  .addEventListener("click", function () {
    
    displayList(showOdd());
   
  });
  document
  .querySelector("#show-even")
  .addEventListener("click", function () {
    
    displayList(showEven());
   
  });
  document
  .querySelector("#show-all")
  .addEventListener("click", function () {
    
    displayList(list);
   
  });

 
     
  fetch("/list.json")
  .then((response) => {
    return response.json();
  })
  .then((mains) => {
    mains.forEach((main) => {
      const mains = document.querySelector("main");
      
      mains.append(main);
      

      
    });
  });