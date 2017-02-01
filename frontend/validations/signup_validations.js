import { validate } from 'utils/form/validation'
import { required, email, minLength } from 'utils/form/validators'

const signUpValidations = [
  validate('email', 'email address', required, email),
  validate('full_name', 'full name', required),
  validate('password', 'password', required, minLength(6))
]

export default signUpValidations