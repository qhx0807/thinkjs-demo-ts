import { think } from 'thinkjs'

module.exports = class extends think.Controller {
  // constructor (...arg) {
  //   super(...arg)
  // }
  openAction () {
    console.log('ws open server')
    return this.success()
  }

  closeAction () {
    console.log('ws close server')
    return this.success()
  }
}