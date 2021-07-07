//console.log(movie)
//Y Exibe as categorias disponiveis e pergunta qual categoria deseja
//N Exibe a lista de filmes disponiveis em ordem crescente de duracao

const movies = require('./dataBase')

const readline = require('readline-sync')

const inputStart = readline.question('Do you want to fetch a book?Y/N')

if (inputStart.toLocaleUpperCase() === 'Y') {
	console.log('Available categories: ')
	console.log('Fiction', '/Horror', '/Drama')

	const inputCategory = readline.question('what your choice?')

	const returnCategory = movies.filter(film => film.genre === inputCategory)

	console.table(returnCategory)
} else {
	const movieSequence = movies.sort((x, y) => x.duration - y.duration)
	console.log('All available movies:')
	console.table(movieSequence)
}

