const match = function(message){

	let answer

	let helloBase = {0:"coucou", 1:"bonjour", 2:"salut"}

	Object.values(helloBase).forEach(val=>{

		if (message === val) {
			answer = 'salut !'
		}

	})

	return answer

}

const answer = function(message){
	let answer = match(message)
	if (answer) {
		return answer
	}else{
		return "Pas compris !"
	}
}

exports.answer = answer







/*

exports.getAnswer = getAnswer


const match = function(message){
	if (message === 'coucou') {
		return 'Salut'
	}
}

const getAnswer = function(message){

	let answer = match(message)

	if (answer) {
		return answer
	}else{
		return 'Pas compris'
	}
}
*/