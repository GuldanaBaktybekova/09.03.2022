const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayList() {
  list.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item;
    document.body.append(div);
    
  })
}
