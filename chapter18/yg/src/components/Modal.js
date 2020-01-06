import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button } from './'

const propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

class Modal extends Component {
  render () {
    const { isOpened, onClose, children } = this.props
    if (!isOpened) return <></>
    return (
      <ModalWrapper>
        <ModalContainer>
          <Button onClick={ onClose } theme="text">X</Button>
          { children }
        </ModalContainer>
      </ModalWrapper>
    )
  }
}

Modal.propTypes = propTypes

export default Modal

const ModalWrapper = styled.div`
  display: flex;
  padding-top: 64px;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
`

// TODO: size props 받아서 width, min-height 조정
const ModalContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 70%;
  min-height: 50%;
  max-height: 80%;
  height: fit-content;
  outline 4px solid black;
  background-color: white;
  padding: 8px 10px;
  > ${Button} {
    float: right;
    font-size: 16pt;
    opacity: 0.4;
    padding: 0;
    min-width: 0;
    :hover {
      font-weight: bold;
      opacity: 0.7;
    }
  }
`
