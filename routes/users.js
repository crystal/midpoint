'use strict';

const express = require('express');
const knex = require('../db/knex');
const router = express.Router();


router.route('/:user_id')
  .put((req, res) => {
    console.log(req.body);
  });

module.exports = router;
