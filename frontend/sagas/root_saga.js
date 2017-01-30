// Sagas
import { watchLoginAsync, watchSignupAsync } from 'sagas/sessions_saga'

export default function* rootSaga () {
  yield [
    watchLoginAsync(),
    watchSignupAsync()
  ]
}