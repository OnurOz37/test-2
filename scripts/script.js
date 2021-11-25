var afficherCinquiemeCase = document.getElementById('sec-hidden');
var afficherAuteur = document.getElementById('hidden-auteur');
let cases= document.querySelectorAll('.active');
var afficherLeTri = document.getElementById('hidden');
var afficherProductor = document.getElementById('hidden-productor');
var afficherBeginner = document.getElementById('hidden-beginner');
var afficherTecnicien = document.getElementById('hidden-tecnicien');
var afficherLibrary = document.getElementById('hidden-library');
var afficherEditor = document.getElementById('hidden-editor');



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
        afficherAuteur.style.display='none'
    })
})



let liens = document.querySelectorAll('.lien');
[].forEach.call(liens, function(li){
    li.addEventListener('click', function(){
        liens.forEach(l => {
            l.classList.remove('lien')
            l.classList.add('inactive')
            // afficherLeTri.style.display='block';
            
            
        })
        li.classList.remove('inactive')
        li.classList.add('lien')
            // let auteur=li.classList.querySelectorAll('.auteur')
            
            // if(auteur==true){
                afficherLeTri.style.display='none'
                afficherAuteur.style.display='block'
                
            //return auteur; 
            
        
        // l.classList.remove('image')
        
        
    })
})

