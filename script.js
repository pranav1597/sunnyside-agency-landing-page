const hamLink = document.getElementsByClassName("hamburger-link")[0];
const hamList = document.getElementsByClassName("hamburger-list")[0];

hamLink.addEventListener('click',() =>  {

    hamList.classList.toggle('active');
}
)