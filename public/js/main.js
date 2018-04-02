var myApp = {
  // some code that wouldn't necessarily go inside a viewmodel here
  movieGenres(data, genres) {
    //filter the dataset and create an array of genres => one object for each genre
    genres.forEach((genre, index) => myApp.vm.genres.push({name : genre, movies : data.filter(movie => movie.genre_name === genre) }));
  },

  vm : new Vue({
    delimiters : ["${","}"],

    el : "#app",

    data : {
      message : "welcome to Vue! and my Netflix ripoff",

      genres : []
    },

    methods : {
      // nothin here yet
    }
  })
}

myApp.movieGenres(appData.movies, ["Family", "Drama","Action", "Comedy", "Adventure", "Crime"]);
