const main = document.querySelector('main');
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayList() {
  main.innerHTML = "";
  list.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item;
    main.append(div);
    
  });
}
displayList();
displayList();



function sortDescending() {
  list.sort((a, b) => {
    if (a > b) {
      return -1;
    } 
    else {
      return 1;
   
    }
  }

}
sortDescending();
displayList();