window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const navigation = document.querySelector('nav');
document.querySelector('.toggle').onclick = function(){
        this.classList.toggle('spin');  //adds a spin function after click
    setTimeout(() => {
          // this removes spin funciton
        this.classList.toggle('active');
        navigation.classList.toggle('active');
    }, 123);//this is the start of a delay 
    setTimeout(() => {
        this.classList.toggle('spin');
    },123)
};
