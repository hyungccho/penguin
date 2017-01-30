import React from 'react'

class CheckboxComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      checked: this.props.defaultChecked ? true : false
    }
    
    this.handleChange = this.handleChange.bind(this)
  }
  
  renderParsedCheckboxIconLogic () {
		if (this.state.checked) {
			return <span className='fa fa-check-square'></span>
		} else {
			return <span className='fa fa-square'></span>
		}
	}
  
  handleChange (e) {
		e.preventDefault()
		this.setState({ checked: !this.state.checked })
    this.props.onChange(e)
  }
  
  render () {
    return (
      <label className="checkbox">
        <span className='icons'>
          { this.renderParsedCheckboxIconLogic() }
        </span>

        <input id={ this.props.name }
               type="checkbox"
               defaultChecked={ this.state.checked }
               onChange={ this.handleChange } />
        { this.props.labelText }
      </label>
    )
  }
}

export default CheckboxComponent