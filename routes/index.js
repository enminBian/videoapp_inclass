var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // do an SQL query to get all of the movies, including genre
  connect.query(`SELECT * FROM tbl_movies m, tbl_genre g, tbl_mov_genre mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id`, (error, rows)=> {
    if (error) {
      throw error;
    } else {
      res.render('home', {
        defaultMovie : rows[Math.floor(Math.random() * rows.length)],
        data : JSON.stringify(rows)
      });
    }
  })
});

router.get('/movies/:id/:vidsrc',(reg, res) => {
  console.log(req.params.id, req.params.vidsrc);
  connect.query('SELECT * tbl_comments WHERE comments_movies = $(req.params.id)',(err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.render('movie', {
        movie : req.params.id,
        tralier : req.params.vidsrc,
        data : JSOB.stringify(row),
        mainpage : false,
        videopage : true
      });
    }
  })
});

module.exports = router;
