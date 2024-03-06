const nameInput = document.getElementById("namei");
const textarea = document.getElementById("recommend");
const form = document.getElementById("form");
const recommendation = document.querySelector('.dis');
console.log(textarea)
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const art = document.createElement("article")
    art.textContent = textarea.value ;
    recommendation.appendChild(art)
    const pop = document.createElement('div');
    pop.innerText  =  'Thank you for submitting a recommendation!'
    pop.setAttribute('class','alert')
        recommendation.appendChild(pop)
    recommendation.classList.add('showalert')
    setTimeout(()=>{
     recommendation.removeChild(pop)
     recommendation.classList.remove('showalert')
    },3000)

    textarea.value = ''
   
});

function scrollup (){
    
}

