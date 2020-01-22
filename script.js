const select=(element)=>document.querySelector(element);


const header = select('header');
const main = select('main');
select('.hamburger').addEventListener('click',()=>{
    
    
    header.classList.toggle('active');
    main.classList.toggle('active');

});


/////clicking close close sidebar 
window.onclick = (e)=>{
    if(e.target.matches('.active')){
        if(header.classList.contains('active')){
                 header.classList.remove('active');
                 main.classList.remove('active');       

        }
    }
};