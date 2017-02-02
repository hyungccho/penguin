import React from 'react'
import { withRouter } from 'react-router'

// Components
import DashboardContainer from 'components/app/dashboard/dashboard_container'
import Sidebar from 'components/app/layout/sidebar/sidebar'

class Home extends React.Component {
  constructor (props) {
    super(props)
  }
  
  renderSidebar (sidebar) {
    if (sidebar) {
      return sidebar
    } else {
      return <Sidebar {...this.props}/>
    }
  }
  
  renderMain (main) {
    if (main) {
      return main
    } else {
      return <DashboardContainer {...this.props}/>
    }
  }
  
  render () {
    const { main, sidebar } = this.props

    return (
      <div className='wrapper'>
        { this.renderSidebar(sidebar) }
        { this.renderMain(main) }
      </div>
    )
  }
}

export default withRouter(Home)