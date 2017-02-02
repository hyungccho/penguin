import React from 'react'
import { withRouter } from 'react-router'

// Custom Bootstrap
import { Row, Column } from 'components/shared/bootstrap/index'

// Plugins
import { isEmpty, merge } from 'lodash'
import classNames from 'classnames'

// Validations
import { runValidators } from 'utils/form/validation'
import signUpValidations from 'validations/signup_validations'

// Components
import { Input, FormErrorBox } from 'components/shared/form/index'

class SignupForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      full_name: '',
      password: '',
      validationErrors: {},
      showErrors: false
    }
    
    // Run initial validations
    this.state.validationErrors = runValidators(this.state, signUpValidations)

    this.redirectToSignIn = this.redirectToSignIn.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  componentDidUpdate () {
		this.redirectIfLoggedIn()
	}
	
	redirectIfLoggedIn () {
		if (this.props.currentUser) {
			this.props.router.push('/dashboard')
		}
	}
  
  redirectToSignIn () {
    this.props.router.push({ pathname: '/login' })
  }
  
  update (field) {
		return e => {
      let newState = merge({}, this.state)
      newState[field] = e.currentTarget.value
      
      newState.validationErrors = runValidators(newState, signUpValidations)
      this.setState(newState)
    }
	}
  
  errorFor (field) {
    return this.state.validationErrors[field]
  }
  
  handleSubmit (e) {
		e.preventDefault()
    this.setState({ showErrors: true })
    
    if (!isEmpty(this.state.validationErrors)) {
      return
    }
    
    const user = this.state
    this.props.signup({
      user: {
        email: this.state.email,
        full_name: this.state.full_name,
        password: this.state.password
      }
    })
	}
  
  renderError () {
    if (this.props.signupError) {
      if (this.props.signupError.error == 'invalid_resource') {
        return (
          <FormErrorBox header='Hmm...'
                        message='This e-mail address already exists in Penguin. Need help getting back in?'
                        actionText='Penguin is here to help!' />
        )
      } else {
        return (
          <FormErrorBox header='Uh oh!'
                        message='Something unexpected happened'
                        actionText='Contact Penguin support' />
        )
      }
    }
  }
  
  renderEmailInput () {
		return (
      <Input name='email'
             labelText='Email Address'
             type='text'
             value={ this.state.email }
             onChange={ this.update('email') }
             autoComplete={ false }
             required={ true }
             showErrors={ this.state.showErrors }
             errorText={ this.errorFor('email') }/>
		)
	}
  
  renderFullNameInput () {
    return (
      <Input name='full-name'
             labelText='Full Name'
             type='text'
             value={ this.state.full_name }
             onChange={ this.update('full_name') }
             autoComplete={ false }
             required={ true }
             showErrors={ this.state.showErrors }
             errorText={ this.errorFor('full_name') }/>
		)
  }
  
  renderPasswordInput () {
		return (
      <Input name='password'
             type='password'
             value={ this.state.password }
             onChange={ this.update('password') }
             autoComplete={ false }
             required={ true }
             showErrors={ this.state.showErrors }
             errorText={ this.errorFor('password') }/>
		)
	}
  
  renderSubmitButton () {
		return (
			<div className='form-group button-group'>
				<button type='submit'
                className='btn btn-lg btn-fill btn-full btn-warning'>Create Account</button>
				<p className='tiny-font text-muted'>
					<i>
						By clicking Sign In, you agree to our&nbsp;
						<a>License Agreement</a> and <a>Privacy Statement</a>.
					</i>
				</p>
			</div>
		)
	}
  
  render () {
    return (
      <div className='wrapper'>
        <div className='signup-wrapper'>
          <Row className='logo-wrapper'>
            <Column className='col-xs-12 text-center'>
              <img src='assets/main-logo.png' />
            </Column>
          </Row>

          <Row>
            <Column className='col-xs-12 form-wrapper no-float'>
              <div className='card card-medium card-centered'>
                <Row>
                  <Column className='col-xs-8 form-main no-float'>
                    <form onSubmit={ this.handleSubmit }>
                      <div className='header'>
    										<h3 className='title muli-bold'>Create your account</h3>
                        <h4 className='title second-title muli-bold'>
                          Sign in to all Penguin platforms using this account.
                        </h4>
    									</div>
                      
                      <div className='content'>
                        { this.renderError() }
                        { this.renderEmailInput() }
                        { this.renderFullNameInput() }
                        { this.renderPasswordInput() }
                        { this.renderSubmitButton() }
                      </div>
                    </form>
                  </Column>
                  
                  <Column className='col-xs-4 lightest-gray-bg form-side no-float'>
                    <div className='sidebar-wrapper'>
                      <p className='muli-bold larger-font'>Have an account&#63;</p>
                      <p className='muli-bold smaller-font text-left'>
                        Sign in to work on your existing Penguin!
                      </p>

                      <button className='btn btn-fill btn-full btn-info'
                              onClick={ this.redirectToSignIn }>Sign In</button>
    
                      <p className='tiny-font'><a>I forgot my user ID or password</a></p>
                    </div>
                  </Column>
                </Row>
              </div>
            </Column>
          </Row>
        </div>
      </div>
    )
  }
}

export default withRouter(SignupForm)