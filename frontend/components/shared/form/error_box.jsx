import React from 'react'

class FormErrorBoxComponent extends React.Component {
  constructor (props) {
    super(props)
    
    this.handleCallToAction = this.handleCallToAction.bind(this)
  }
  
  handleCallToAction (e) {
    e.preventDefault()
    if (this.props.onClick) {
      this.props.onClick(e)
    } else {
      console.log('Error Box onClick callback not implemented!')
    }
  }
  
  renderActionText () {
    if (this.props.actionText) {
      return (
        <p className='tiny-font'>
          <a onClick={ this.handleCallToAction }>
            { this.props.actionText }
          </a>
        </p>
      )
    }
  }
  
  render () {
    return (
      <div className='error-box text-center'>
        <p className='larger-font muli-bold'>{ this.props.header }</p>
        <p className='tiny-font'>{ this.props.message }</p>
        { this.renderActionText() }
      </div>
    )
  }
}

export default FormErrorBoxComponent