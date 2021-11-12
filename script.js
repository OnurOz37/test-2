var afficherCinquiemeCase = document.getElementById('sec-hidden');

let cases= document.querySelectorAll('.active');
var afficherLeTri = document.getElementById('hidden');
// .forEach(Case=>Case.addEventListener('click', myFunction));

//let liens = document.querySelectorAll('.lien');
// forEach(Lien=>Lien.addEventListener('click', style));

[].forEach.call(cases, function(ev){
    ev.addEventListener('click', function(elem){
        console.log(ev);
        cases.forEach( e  => {
            console.log(e)
            e.classList.remove('active')
            e.classList.add('inactive')

        } )
        ev.classList.remove('inactive')
        ev.classList.add('active')
        
        afficherCinquiemeCase.style.display='block'
        afficherLeTri.style.display='block'
    })
})

let liens = document.querySelectorAll('.lien');
// liens.forEach(lien=>lien.addEventListener('click',style));

//         function style(){

//                 this.nextElementSibling.style.background="grey";

            

//         }
// let afficherLeTri = document.getElementById('hidden');
let desactiverImage= document.getElementById('images');
let afficherAuteur = document.getElementById('hidden-auteur');

[].forEach.call(liens, function(li){
    li.addEventListener('click', function(){
        liens.forEach(l => {
            l.classList.remove('lien')
            l.classList.add('inactive')
            // afficherLeTri.style.display='block';

        })
        li.classList.remove('inactive')
        li.classList.add('lien')
        
        afficherLeTri.style.display='none'
        afficherAuteur.style.display='block'
        // l.classList.remove('image')
        
        
    })
})

// let liens = document.querySelectorAll('.lien');

// [].forEach.call(liens, function(list){
//     list.addEventListener('click', function(){
//         liens.forEach(lis => {
//             lis.classList.remove('image')
//         })
//     })
// })
