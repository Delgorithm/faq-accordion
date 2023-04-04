const dropDown = document.getElementsByClassName('faq');

for (let i = 0; i < dropDown.length; i++) {
    dropDown[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
};
