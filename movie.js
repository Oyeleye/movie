
var movies = [
	{
	title: "Eran Iya Oshogbo",
	hasWatched: true,
	rating: 5
    },
   
	{
    title: "Bitin l'aye",
    hasWatched: false,
	rating: 4.5
	},

	{
    title: "Aso laye",
    hasWatched: false,
	rating: 3.5
	}
   ]


movies.forEach(function(movie){
alert (buildString (movie));
});



function buildString (movie) {
var result = "You have ";
if(movie.hasWatched) {
	result += "watched ";
} else {
	result += "not seen ";
}

result += "\"" + movie.title + "\" - ";
result += movie.rating + " stars";
 return result;
}
