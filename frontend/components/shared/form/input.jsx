import React from 'react'

// Plugins
import classNames from 'classnames'

class InputComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.value || '',
      showErrors: this.props.showErrors,
      errorText: this.props.errorText
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
  }
  
  componentWillReceiveProps (newProps) {
    let updatingProps = {
      errorText: newProps.errorText
    }
    
    if (!this.state.showErrors) {
      // Only update showErrors sent down from form if component hasn't triggered
      // it already.
      updatingProps.showErrors = newProps.showErrors
    } else {
      updatingProps.showErrors = this.state.showErrors
    }
    
    this.setState({ showErrors: updatingProps.showErrors, errorText: updatingProps.errorText})
  }
  
  defaultLabelText () {
    return `${this.props.name.slice(0, 1).toUpperCase()}${this.props.name.slice(1).toLowerCase()}`
  }
  
  parseAutoComplete () {
    if (this.props.autoComplete) {
      return 'on'
    } else {
      return 'off'
    }
  }
  
  handleChange (e) {
    this.setState({ value: e.target.value })
    this.props.onChange(e)
  }
  
  handleFocus (e) {
    this.setState({ showErrors: false })
  }
  
  handleBlur (e) {
    this.setState({ showErrors: true })
  }

  errorText () {
    if (this.state.showErrors && this.state.errorText != '') {
      return (
        <label className='error tiny-font' htmlFor={ this.props.name }>
          { this.props.errorText }
        </label>
      )
    }
  }
  
  lowerCaseText (text) {
    return text.toLowerCase()
  }
  
  render () {
    const formGroupClass = classNames('form-group', `${this.props.name}-group`)
    const inputClass = classNames('form-control', {
      error: this.state.showErrors && this.state.errorText
    })

    return (
      <div className={ formGroupClass }>
        <label className='control-label'>{ this.props.labelText || this.defaultLabelText() }</label>
        <input className={ inputClass }
							 name={ this.props.name }
							 type={ this.props.type }
							 value={ this.state.value }
							 onChange={ this.handleChange }
               onFocus={ this.handleFocus }
               onBlur={ this.handleBlur }
               autoComplete={ this.parseAutoComplete() }/>
        { this.errorText() }
      </div>
    )
  }
}

export default InputComponent