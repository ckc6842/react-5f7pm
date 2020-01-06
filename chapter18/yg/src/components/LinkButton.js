// import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from './'

export default Button.withComponent(
  styled(Link)`
    text-decoration: none;
  `
)