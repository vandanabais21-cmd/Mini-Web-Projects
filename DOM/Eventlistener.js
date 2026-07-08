const btn = document.querySelector("btn");

btn.onclick = () =>{
    console.log("mujhko dabaya gaya");
};

//onclick overriding the event
//btn.onclick =() =>{
//     console.log("second event")
// };
btn.addEventListener("click",()=>{
    console.log("First Event");
});
btn.addEventListener("click",()=>{
    console.log("second Event");
});

const inp = document.querySelector("#inp");

inp.addEventListener("keypress",(ev) =>{
    console.log(ev.key);
    console.log("key pressed");
});