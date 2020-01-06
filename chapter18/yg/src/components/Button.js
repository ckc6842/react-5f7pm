// import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const propTypes = {
  color: PropTypes.string,
  theme: PropTypes.string,
  size: PropTypes.string,
}

const defaultProps = {
  color: 'white',
  theme: 'contained',
  size: 'md',
}

// Themes
const contained = css`
  border: 1px solid gray;
  background-color: green;
  color: white;
`
const outline = css`
  border: 1px solid gray;
  background-color: transparent;
`
const text = css`
  border: none;
  background-color: transparent;
`
const themes = {
  contained,
  outline,
  text,
}

// Sizes
// TODO: Implements
const lg = css`
  min-width: 120px;
  font-size: 16pt;
`
const md = css`
  min-width: 80px;
  font-size: 12pt;
`
const sm = css`
  min-width: 60px;
  font-size: 8pt;
`
const sizes = {
  lg, md, sm,
}

const Button = styled.button`
  outline: none;
  border-radius: 5px;
  font-weight: 600;
  padding: 5px 15px;
  width: auto;
  cursor: pointer;
  ${(props) => themes[props.theme] || 'contained'}
  ${(props) => sizes[props.size] || 'md'}
`

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
