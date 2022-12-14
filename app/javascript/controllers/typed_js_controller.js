import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["SANTIAGO MICOLINI", "FULLSTACK DEVELOPER", "BASED IN BARCELONA - SPAIN"],
      cursorChar: '_',
      typeSpeed: 60,
      backSpeed: 0,
      autoInsertCss: true,
      loop: false
    })
  }
}
