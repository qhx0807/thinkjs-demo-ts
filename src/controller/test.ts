import Base from './base'
import { think } from 'thinkjs'

export default class extends Base {
  indexAction () {
    const a = think.uuid()
    this.success({saa: a})
  }
  testAction () {
    this.fail("12")
  }
}