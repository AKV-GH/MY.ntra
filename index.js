// dropdown menu bigger
let x= function(){
    let b=document.getElementsByClassName("dropdown")[0];
    b.classList.remove("hidden");
}
let y= function(){
    document.getElementsByClassName("dropdown")[0].classList.add("hidden");
}
for(let i=0;i<6;i++){
    let a =document.getElementsByClassName("nav-item")[i];
    a.addEventListener("mouseover",x);
    
}
for(let i=0;i<1;i++){
    let a =document.getElementsByClassName("dropdown")[i];
    a.addEventListener("mouseover",x);
    
}
for(let i=0;i<6;i++){
    let a =document.getElementsByClassName("nav-item")[i];
    a.addEventListener("mouseout",y);
}
for(let i=0;i<1;i++){
    let a =document.getElementsByClassName("dropdown")[i];
    a.addEventListener("mouseout",y);
}

// dropdown menu smaller
let p= function(){
    let b=document.getElementsByClassName("dropdown1")[0];
    b.classList.remove("hidden");
}
let q= function(){
    document.getElementsByClassName("dropdown1")[0].classList.add("hidden");
}
for(let i=0;i<1;i++){
    let a =document.getElementsByClassName("img-info")[i];
    a.addEventListener("mouseover",p);
    
}
for(let i=0;i<1;i++){
    let a =document.getElementsByClassName("dropdown1")[i];
    a.addEventListener("mouseover",p);
    
}
for(let i=0;i<1;i++){
    let c =document.getElementsByClassName("img-info")[i];
    c.addEventListener("mouseout",q);
}
for(let i=0;i<1;i++){
    let c =document.getElementsByClassName("dropdown1")[i];
    c.addEventListener("mouseout",q);
}

// hamburger menu

    let r=document.getElementsByClassName("burger")[0];
    r.addEventListener("click",function(){
        let a1=document.getElementsByClassName("hamburger")[0];
    if(a1.classList.contains("hidden")){
        a1.classList.remove("hidden");
    }else{
        a1.classList.add("hidden");
    }
    });

// sliding carousel
let slide=document.querySelectorAll(".slides");
let counter=0;
slide.forEach(
    (slides,index) => {
        slides.style.left=`${index*100}%`;
    }
)

let slideImage=()=>{
    slide.forEach(
        (slides)=>{
            if(counter==slide.length){
                counter=0;
            }
            
            slides.style.transform=`translateX(-${counter*100}%)`;
        }
    )
}
function goPrev(){
    if(counter==0){
        counter=slide.length;
    }
    counter--;
    slideImage();
}
function goNext(){
    counter++;
    slideImage();
}

document.getElementsByClassName("btn-down")[0].addEventListener("click",function(){
    alert("YOU HAVE BEEN SUCCESSFULLY SIGNED UP")
})