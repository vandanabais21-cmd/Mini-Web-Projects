// const ul = document.querySelector(".movieList");
// console.log(ul);

// const li = document.createElement("li");

// li.innerText = "Dabing";
// li.classList.add = "movie";


// ul.appendChild(li);

// let arr = ["vandana","spiderman"];
// const ul = document.querySelector(".movieList");

// for(let item of arr){
//     //way list=>o(N)
//     //ul.innerHTML += `<li>${item}</li>`;

//     //way 2=>o(1)

//     const li = document.createElement("li");

//     li.innerText = `${item}`;

//     ul.appendChild(li);


//}


// const ul = document.querySelector(".movieList");
// for (let i = 1; i < 100; i++) {
//     const li = document.createElement("li");

//     if (i % 3 == 0) {
//         li.innerText = "fizz";
//     } else if (i % 5 == 0) {
//         li.innerText = "buzz";
//     } else if (i % 3 == 0 && i % 5 == 0) {
//         li.innerText = "fizzbuzz";
//     }

//     ul.appendChild(li);
// }

const ul = document.querySelector(".movieList");
for (let i = 1; i < 100; i++) {
    const li = document.createElement("li");

    if (i % 3 == 0) {
        li.innerText = "fizz";
    } else if (i % 5 == 0) {
        li.innerText = "buzz";
    } else if (i % 3 == 0 && i % 5 == 0) {
        li.innerText = "fizzbuzz";
    }

    ul.appendChild(li);
}
