//constantes
const bToss = document.getElementById("toss")
const enderecos = ["IMGs/face_22.png","IMGs/face_13.png", 'moeda', 'vote_22', 'vote_13']
const posiImg = document.getElementById("box")

// evento
bToss.addEventListener("click", jogarMoeda)


// funções especificas
const setInv = id => 
	document.getElementById(id).classList.add("inv")
const setVis = id => 
	document.getElementById(id).classList.remove("inv")

function removeMoeda(){
	let moeda = document.getElementById("moeda")
	try{
		moeda.remove()
	} catch (error){ 
		console.error(error)
	}

}

const randomInt = max => Math.floor(Math.random() * max)
const luOuBo = num => (num % 2) == 0 ? 0 : 1 // 0 = bolso / 1 = lula

// funções do resultado

function mostrarVencedor(id){
	let imgOut = document.createElement("img")

	imgOut.setAttribute('src', enderecos[id])
	imgOut.setAttribute('id', enderecos[2])
	imgOut.setAttribute('alt', enderecos[id + 3])
	
	posiImg.appendChild(imgOut)
}

function vencedor() {
	setInv("flip")
	mostrarVencedor(luOuBo(randomInt(1000)))
}


function jogarMoeda(){
	removeMoeda()
	setVis("flip") 
	bToss.classList.add("disabled")
	setTimeout(vencedor, 4000)
	setTimeout(function(){bToss.classList.remove("disabled")},4500)
}

