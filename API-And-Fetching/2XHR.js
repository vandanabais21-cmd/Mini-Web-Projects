let url = "https://jsonplaceholder.typicode.com/todos";

 const ul = document.querySelector("#list")
 const btn = document.querySelector("#btn");
// console.log(url);


function addTaskToList (data){ 
    for( let i=0; i<data.length; i++){
      //console.log(data[i].title);
      const li = document.createElement("li");
      li.innerText = data[i].title;
      ul.appendChild(li);
   }
}

let xhr = new XMLHttpRequest();

xhr.open("GET",url);

btn.addEventListener("click",() =>{
  xhr.send();
})

xhr.onload = (data) =>{
    //console.log(data.target.response);
    const responseData = JSON.parse(data.target.response);
    addTaskToList(responseData);
}

xhr.onerror = (err) =>{
    console.log(err);
}



// xhr.onload = (data) =>{
//   //console.log(data);
//     //console.log(data.target.response);
//   data = data.target.response;
//   addTaskToList(JSON.parse(data));
// }

// xhr.onerror = (err) =>{
//   console.log(err);
// }