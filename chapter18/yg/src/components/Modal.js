import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
  children: PropTypes.node.isRequired,
  setVisibility: PropTypes.func.isRequired,
}

class Modal extends Component {
  render () {
    return (
      <ModalWrapper>
        <ModalContainer>
          <CloseButton onClick={ () => this.setVisibility(false) } />
          { this.props.children }
        </ModalContainer>
      </ModalWrapper>
    )
  }
}

Modal.propTypes = propTypes

export default Modal

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
`

// TODO: size props 받아서 width, min-height 조정
const ModalContainer = styled.div`
  margin: 64px 15%;
  width: 70%;
  min-height: 50%;
  outline 4px solid black;
  background-color: white;
`

const CloseButton = styled.span`
  content: X;
`