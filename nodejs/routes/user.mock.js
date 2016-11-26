'use strict'

const express = require('express')
let router = express.Router()

router.route('/user')
  .get(JWTAuth, (req, res, next) => {
    res.json({
      results: [
        {
          name: 'Jhon Cena',
          username: 'jcena',
          birthDate: '01/01/1991'
        }
      ]
    })
  })

router.route('/user/:id')
  .get(JWTAuth, (req, res, next) => {
    res.json({
      name: 'Jhon Cena',
      username: 'jcena',
      birthDate: '01/01/1991'
    })
  })

module.exports = router
