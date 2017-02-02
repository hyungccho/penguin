import React from 'react'

// Bootstrap Components
import { Row, Column } from 'components/shared/bootstrap/index'

// Components
import Header from 'components/app/layout/header/header'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <div className='main-panel'>
        <Header title='Dashboard' />

        <Row className='dashboard-wrapper'>
          <Column className='col-xs-5'>
            <div className='card card-1'>
              <div className='header'>
                <h3 className='title'>Welcome! This is Card 1</h3>
                <p className='category'>Some description would go here</p>
              </div>

              <div className='content'>
                
              </div>
            </div>
          </Column>
          
          <Column className='col-xs-7'>
            <div className='card card-2'>
              <div className='header text-center'>
                <h3 className='title'>Here's a CTA. <br /> And we want you to buy our stuff!</h3>
              </div>
              
              <div className='content text-center'>
                <button className='btn btn-fill btn-info btn-lg small-font'>Do something now!</button>
                <p className='smaller-font'>
                  By clicking on this button, you can also click <a>here</a> or <a>or even here</a>!
                </p>
              </div>
            </div>
          </Column>
        </Row>
      </div>
    )
  }
}

export default Dashboard