import React from 'react'

class Header extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand'>{ this.props.title }</a>
          </div>
          
          <div className='collapse navbar-collapse'>
            <ul className='nav navbar-nav navbar-right'>
              <li className='dropdown'>
                <a className='dropdown-toggle' data-toggle='dropdown'>
                  <i className='fa fa-list'></i>
                  <b className='caret custom-caret'></b>
                </a>
                
                <ul className='dropdown-menu'>
                  <li>
                    <a><i className='fa fa-plus'></i>Add Business</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className='btn-rotate'><i className='fa fa-cog larger-font'></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header