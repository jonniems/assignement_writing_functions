const favouriteMovie = {
    title: 'I Love You, Man',
    duration: 110,
    stars: ['Paul Rudd', 'Jason Segel', 'Rashida Jones']
}

//"Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

const printMovie = function (movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes.');
    let starsString = 'Stars: ';
    for (let i = 0; i < movie.stars.length; i++) {
        starsString += movie.stars[i];
        if (i !== movie.stars.length - 1) {
            starsString += ', ';
        }
    }
    console.log(starsString);
}

printMovie(favouriteMovie);