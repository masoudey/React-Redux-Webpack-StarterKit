import Express from 'express'
import qs from 'qs'

import webpack from 'webpack'
import webpackConfig from './webpack.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'


