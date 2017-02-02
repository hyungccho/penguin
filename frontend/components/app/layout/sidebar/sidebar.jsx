import React from 'react'
import { withRouter } from 'react-router'

// Plugins
import { findIndex } from 'lodash'

// Components
import SidebarOption from 'components/app/layout/sidebar/sidebar_option'

const sidebarOptions = [
  { label: 'Dashboard', icon: 'fa fa-tachometer', location: '/dashboard' },
  { label: 'Businesses', icon: 'fa fa-flag-o', location: '/businesses' },
  { label: 'Table List', icon: 'ti-view-list-alt' },
  { label: 'Typography', icon: 'ti-text' },
  { label: 'Icons', icon: 'ti-pencil-alt2' },
  { label: 'Maps', icon: 'ti-map' }
]

class Sidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeSidebarIndex: this.parseIndexLocation()
    }
    
    this.changeActiveState = this.changeActiveState.bind(this)
  }
  
  parseIndexLocation () {
    return findIndex(sidebarOptions, (opt) => (opt.location == this.props.location.pathname ))
  }
  
  changeActiveState (index) {
    return () => {
      this.setState({ activeSidebarIndex: index })
      this.props.router.push({ pathname: sidebarOptions[index].location })
    }
  }

  render () {
    return (
      <div className='sidebar' data-background-color='white' data-active-color='primary'>
        <div className='sidebar-wrapper'>
          <div className='logo'>
            <img src='assets/main-logo' />
          </div>

          <ul className='nav'>
            {
              sidebarOptions.map((option, index) => (
                <SidebarOption {...option}
                               key={ index }
                               sidebarIndex={ index }
                               activeSidebarIndex={ this.state.activeSidebarIndex }
                               onClick={ this.changeActiveState(index) } />
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(Sidebar)