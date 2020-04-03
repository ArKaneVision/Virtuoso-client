'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('Signing up')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('Signing in')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('Change password')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('Sign out')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onIndexPractices = function (event) {
  event.preventDefault()
  api.indexPractices()
    .then(ui.indexPracticesSuccess)
    .catch(ui.indexPracticesFailure)
}

const onCreatePractice = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.createPractice(data)
    .then(ui.createPracticeSuccess)
    .catch(ui.createPracticeFailure)
}

const onUpdatePractice = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.updateId = data.updateId
  api.updatePractice(data)
    .then(ui.updatePracticeSuccess)
    .catch(ui.updatePracticeFailure)
}

const onDeletePractice = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.deleteId = data.deleteId
  api.deletePractice(data)
    .then(ui.deletePracticeSuccess)
    .catch(ui.deletePracticeFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onIndexPractices,
  onCreatePractice,
  onUpdatePractice,
  onDeletePractice
}
