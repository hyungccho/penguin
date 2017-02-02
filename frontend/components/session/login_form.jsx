import React from 'react'
import { Link, withRouter } from 'react-router'

// Components
import { Checkbox, Input, FormErrorBox } from 'components/shared/form/index'

// Custom Bootstrap
import { Row, Column } from 'components/shared/bootstrap/index'

// Validations
import { runValidators } from 'utils/form/validation'
import logInValidations from 'validations/login_validations'

// Plugins
import { isEmpty, merge } from 'lodash'
import classNames from 'classnames'

class LoginForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			rememberMe: true,
			validationErrors: {},
			showErrors: false
		}
		
		// Run initial validations
    this.state.validationErrors = runValidators(this.state, logInValidations)

		this.handleSubmit = this.handleSubmit.bind(this)
		this.redirectToSignUp = this.redirectToSignUp.bind(this)
	}
	
	componentDidUpdate () {
		this.redirectIfLoggedIn()
	}
	
	redirectIfLoggedIn () {
		if (this.props.currentUser) {
			this.props.router.push('/dashboard')
		}
	}
	
	redirectToSignUp () {
		this.props.router.push({ pathname: '/signup' })
	}

	update (field) {
		return e => {
      let newState = merge({}, this.state)
      newState[field] = e.currentTarget.value
      
      newState.validationErrors = runValidators(newState, logInValidations)
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
		this.props.login({
			user: { email: this.state.email, password: this.state.password }
		})
	}
	
	renderError () {
		if (this.props.loginError) {
			return (
				<FormErrorBox header="Oops, that didn't work"
										  message='Need help getting back in?'
											actionText='Penguin is here to help!' />
			)
		}
	}
	
	renderEmailInput () {
		return (
			<Input name='email'
						 labelText='Email Address'
						 type='text'
						 value={ this.state.email }
						 onChange={ this.update('email') }
						 showErrors={ this.state.showErrors }
             errorText={ this.errorFor('email') }/>
		)
	}
	
	renderPasswordInput () {
		return (
			<Input name='password'
						 type='password'
						 value={ this.state.password }
						 onChange={ this.update('password') }
						 showErrors={ this.state.showErrors }
             errorText={ this.errorFor('password') } />
		)
	}
	
	renderSubmitButton () {
		return (
			<div className='form-group button-group'>
				<button type='submit'
								className='btn btn-fill btn-full btn-info'>Sign In</button>
				<p className='text-center tiny-font text-muted'>
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
				<div className='login-wrapper'>
					<Row className='logo-wrapper'>
						<Column className='col-xs-12 text-center'>
							<img src='assets/main-logo.png' />
						</Column>
					</Row>

					<Row>
						<Column className='col-xs-12 form-wrapper no-float'>
							<div className='card card-small card-centered'>
								<form onSubmit={ this.handleSubmit }>
									<div className='header'>
										<h3 className='title'>Sign In</h3>
									</div>

									<div className='content'>
										{ this.renderError() }
										{ this.renderEmailInput() }
										{ this.renderPasswordInput() }
										{ this.renderSubmitButton() }
									</div>
									
									<div className='card-footer text-center'>
										<hr></hr>
										<p className='smaller-font'><a>I forgot my user ID or password</a></p>
										<p className='smaller-font'>New to Penguin&#63;&nbsp;
											<a onClick={ this.redirectToSignUp }>Create an account</a>.
										</p>
									</div>
								</form>
							</div>
						</Column>
					</Row>
				</div>
			</div>
		)
	}

}

export default withRouter(LoginForm)