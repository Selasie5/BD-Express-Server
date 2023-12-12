let menuOpen = document.getElementById('menuOpen');
let menuClose = document.getElementById('menuClose');
let transparentBackground = document.getElementById('transparentBackground');

menuOpen.addEventListener('click',()=>
{
    transparentBackground.style.display = 'block';
    transparentBackground.style.opacity ='1';
})
menuClose.addEventListener('click', () =>
{
    transparentBackground.style.display = 'none';
    transparentBackground.style.opacity ='0';
})
 //Declaring vaiables for the links 
let largeLink=document.getElementById('largeLink');
let smallLink=document.getElementById('smallLink');
let exclusiveLink=document.getElementById('exclusiveLink');
let popularLink=document.getElementById('popularLink');
 //Declating variables for the various car collection
 let largeCars=document.getElementById('large-cars');
let smallCars=document.getElementById('small-cars');
let exclusiveCars=document.getElementById('exclusive-cars');
let popularCars=document.getElementById('popular-cars');

//Adding Event Listeners to the links
largeLink.addEventListener('click',()=>
{
    largeCars.style.display="grid";
    popularCars.style.display="none";
    exclusiveCars.style.display="none";
    smallCars.style.display="none";
});
smallLink.addEventListener('click',()=>
{
    smallCars.style.display="grid";
    popularCars.style.display="none";
    largeCars.style.display="none";
    exclusiveCars.style.display="none";
});
exclusiveLink.addEventListener('click',()=>
{
    exclusiveCars.style.display="grid";
    popularCars.style.display="none";
    largeCars.style.display="none";
    smallCars.style.display="none";
});
popularLink.addEventListener('click',()=>
{
    popularCars.style.display="grid";
    exclusiveCars.style.display="none";
    largeCars.style.display="none";
    smallCars.style.display="none";
})