const hidenPart = document.getElementById("myDropdown");
const chevronUpIcon = document.getElementById("close-up-icon");
const chevronDownIcon = document.getElementById('drop-down-btn');

//OPEN DropDown
document.getElementById('drop-down-btn').addEventListener('click', () => {
  hidenPart.classList.add("show");//add show class to change display by default which is none
  chevronUpIcon.classList.remove("fa-chevron-up-none");//remove this class which gives display none by default
  chevronDownIcon.classList.toggle("fa-chevron-up-none");
})

// CLOSE DropDown
document.getElementById("close-up-icon").addEventListener('click', () => {
  hidenPart.classList.remove("show");
  chevronUpIcon.classList.add("fa-chevron-up-none");
  chevronDownIcon.classList.toggle("fa-chevron-up-none");
})


//OPEN DropDown
  document.getElementById('drop-down-btn').addEventListener('click', () => {
    const hidenPart = document.getElementById("myDropdown");
    const chevronUpIcon = document.getElementById("close-up-icon");
    const chevronDownIcon = document.getElementById('drop-down-btn');  
        hidenPart.classList.add("show");//add show class to change display by default which is none
        chevronUpIcon.classList.remove("fa-chevron-up-NO");//remove this class which gives display none by default
        chevronDownIcon.classList.toggle("fa-chevron-up-NO");
  })
// CLOSE DropDown
 document.getElementById("close-up-icon").addEventListener('click', () => {
   const hidenPart = document.getElementById("myDropdown");
   const chevronUpIcon = document.getElementById("close-up-icon");
   const chevronDownIcon = document.getElementById('drop-down-btn');
        hidenPart.classList.remove("show");
        chevronUpIcon.classList.add("fa-chevron-up-NO");
        chevronDownIcon.classList.toggle("fa-chevron-up-NO");
 })
