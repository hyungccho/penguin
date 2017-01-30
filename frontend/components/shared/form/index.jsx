import React from 'react'
import InputComponent from './input'
import CheckboxComponent from './checkbox'
import FormErrorBoxComponent from './error_box'

export class Input extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return <InputComponent {...this.props} />
  }
}

export class Checkbox extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return <CheckboxComponent {...this.props} />
  }
}

export class FormErrorBox extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render () {
    return <FormErrorBoxComponent {...this.props} />
  }
}