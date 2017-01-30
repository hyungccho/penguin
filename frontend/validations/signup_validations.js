import { validate } from 'utils/form/validation'
import { required, email } from 'utils/form/validators'

const signUpValidations = [
  validate('email', 'email address', required, email),
  validate('full_name', 'full name', required),
  validate('password', 'password', required)
]

export default signUpValidations