import React from 'react'

// Plugins
import classNames from 'classnames'

class SidebarOption extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    let activeClassName = classNames('sidebar-option', {
      active: this.props.sidebarIndex == this.props.activeSidebarIndex
    })

    return (
      <li className={ activeClassName } onClick={ this.props.onClick }>
        <a>
          <i className={ this.props.icon }></i>
          <p>{ this.props.label }</p>
        </a>
      </li>
    )
  }
}

export default SidebarOption