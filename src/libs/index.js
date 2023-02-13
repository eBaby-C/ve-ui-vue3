import Stars  from "./components/Stars";

let VeUI = {}

let componentsPool = [
  Stars
]

VeUI.install = (Vue) => componentsPool.forEach(component => Vue.component(component.name, component))

export default VeUI