//  File: /route/book.js
//  Name: Wai Lim Leung
//  ID  : 301276989
//  Date: Feb 1, 2023

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect to our book model
let Book = require('../models/books');

// Get route for the book list page - Read operation
router.get('/', (req, res, next) => 
{
    Book.find((err,BookList) =>
    {
        if (err) 
        {
            return console.error(err);
        }
        else
        {
            // console.log(BookList);
            res.render('books', {title:'Book List', BookList:BookList});
        }
    }
    );
}
);

module.exports = router;
