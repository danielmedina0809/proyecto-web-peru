const langButtons = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");
console.log(textsToChange);

langButtons.forEach((button) => {
    button.addEventListener("click",()=>{
        fetch(`../languages/${button.dataset.language}.json`)
        .then(res => res.json())
        .then(data => {
            textsToChange.forEach((el) =>{
                const section = e1.dataset.section;
                const value = e1.dataset.value;

                e1.innerHTML = data[section][value];
            })
        })
    })
})