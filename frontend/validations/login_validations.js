import { validate } from 'utils/form/validation'
import { required, email } from 'utils/form/validators'

const logInValidations = [
  validate('email', 'email address', required, email),
  validate('password', 'password', required)
]

export default logInValidations