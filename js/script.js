// burger

let navigation = document.getElementById('navigation');
let burgerIcon = document.getElementById('burger');

burgerIcon.addEventListener('click', function(){
    navigation.classList.toggle('click');
})