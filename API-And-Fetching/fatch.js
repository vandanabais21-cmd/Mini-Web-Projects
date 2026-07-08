 let url = "https://jsonplaceholder.typicode.com/todos";
//  console.log(url);

const list = document.querySelector("#list");

function addTaskToList(data){ 
    for( let i=0; i<data.length; i++){
      console.log(data[i].title);
      const li = document.createElement("li");
      li.innerText = data[i].title;
      list.appendChild(li);
   }
}


//fetch ek promise hai
fetch(url).then((data) => {
    return data.json();
    
}).then((data) => {
  //  console.log(data);
//   for(let i=0;i<data.length;i++){
//     console.log(data[i],title);
//     let li = document.createElement("li");
//     li.innerText = data[i].title;
//     list.appendChild(li);
//   }
addTaskToList(data);
})
.catch((err) => {
    console.log(err);
})




    