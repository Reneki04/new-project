let nama= document.getElementById("name")
let password= document.getElementById("password")
let container= document.getElementById("badan")
let textName= document.getElementById("user")
let textPass= document.getElementById("pass")
let pertama = document.getElementById("all")
let conten = document.getElementById("content")
let openNameL= document.getElementById("userOpenL")
let openNameR= document.getElementById("userOpenR")
let openPassL= document.getElementById("passOpenL")
let openPassR= document.getElementById("passOpenR")
let repoCard= document.getElementById("repoCard")
let londry= document.getElementById("londry")
let gaming= document.getElementById("gaming")
let infoLondry= document.getElementById("infoLondry")
let infoGaming= document.getElementById("infoGaming")
let footer= document.getElementById("footer")
let body= document.getElementById("body")
conten.style.display = "none"
footer.style.display = "none"

function buka(){
  container.classList.toggle("buka");
}
function up(pilih){
  if(pilih == 'name'){
    nama.classList.toggle("transition");
    textName.classList.toggle("text2")
  }
  if(pilih == 'password'){
    password.classList.toggle("transition");
    textPass.classList.toggle("text2");
  }

}


function login(){
  if(nama.value == 'repo' && password.value == 'repo123' ){
 let loding=document.getElementById("loding")
 loding.textContent="Loading"
 loding.style.fontSize="50px"
 loding.style.color="white"
 
 let loading= setInterval(()=> {
   loding.textContent=loding.textContent + "."
 },1000)

    pertama.style.filter="blur(8px)"
  setTimeout(() => {
    clearInterval(loading)
    loding.style.display="none"
    pertama.style.display = "none"
    conten.style.display = "flex"
    footer.style.display = "block"}, [4000])
  }
  }

function split(action){
  if(action == 'name'){
    openNameL.classList.toggle("left")
    openNameR.classList.toggle("right")
  }
  else if (action == 'pass'){
    openPassL.classList.toggle("left")
    openPassR.classList.toggle("right")
  }
}
                  // LOGIN END //
                  
                //CONTENT//
function popUp(turn){
  repoCard.style.display="flex"
  content.style.filter="blur(8px)"
    setTimeout(() =>{
  content.style.filter="blur(0px)",
    repoCard.style.display="none"},[3000]);
    
}

infoLondry.style.display="none"
infoGaming.style.display="none"

function turn(choise){
  if(choise=='londry'){
    londry.style.color="#00CED1"
    londry.style.backgroundColor="#666"
    infoLondry.style.display="block"
    infoLondry.style.backgroundColor="#666"
    gaming.style.color="#666"
    gaming.style.backgroundColor="transparent"
    infoGaming.style.display="none"
  }else 
  if(choise=='gaming'){
    gaming.style.color="#00CED1"
    gaming.style.backgroundColor="#666"
    infoGaming.style.display="block"
    infoGaming.style.backgroundColor="#666"
    londry.style.color="#666"
    londry.style.backgroundColor="transparent"
    infoLondry.style.display="none"
  }
}

                
                //CONTENT END//