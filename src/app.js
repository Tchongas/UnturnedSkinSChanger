const fs = require('fs');



let form = document.getElementById("myForm");
let nameInput = document.getElementById("name");
let skinInput = document.getElementById("skinID");
let pathInput = document.getElementById("path");

const success = document.getElementById('success')



form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  let path = pathInput.value;

  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    const items = JSON.parse(data);
    
  let name = nameInput.value;
  let skin = skinInput.value;

  
  const name1 = name;
  const name2 = skin;

  const item1 = items.find(item => item.name === name1);
  const item2 = items.find(item => item.name === name2);
  
  console.log(item1)
  console.log(item2)
  const itemId1 = item1.item_skin;
  const itemId2 = item2.item_skin;
  
  item1.item_skin = itemId2;
  item2.item_skin = itemId1;
  console.log(itemId1)
  console.log(itemId2)
  

  fs.writeFile(path, JSON.stringify(items), 'utf8', err => {
    if (err) throw err;
    console.log('The item IDs were successfully swapped.');


  let Complete = `Your ${name} has been changed to a ${skin}`;
  success.innerHTML = Complete
  console.log(itemId1)
  console.log(itemId2)
  console.log(path)
  


});
});
});