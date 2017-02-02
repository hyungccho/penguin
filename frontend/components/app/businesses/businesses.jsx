import React from 'react'

// Bootstrap Components
import { Row, Column } from 'components/shared/bootstrap/index'

// Components
import Header from 'components/app/layout/header/header'

class Businesses extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <div className='main-panel'>
        <Header title='Businesses' />

        <Row className='businesses-wrapper'>
          
        </Row>
      </div>
    )
  }
}

export default Businesses