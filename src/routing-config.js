import React from 'react'
import { Redirect } from 'react-router'
import { Test,Calculater } from './Components'


const routes = [
  {
    'path':'/',
    'component': Test,
    'exact': true
  },
  {
    'path': '/Calculater',
    'component': Calculater
  },
  // {
  //   'path': '/Fetch',
  //   'component': FetchPage
  // }
];

export default routes;