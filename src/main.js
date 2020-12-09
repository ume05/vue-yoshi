import { createApp } from 'vue'
import App from './App.vue'
import VAnimateCss from 'animate.css'

const app = createApp(App)

// app.directive("border", function(el, binding){
//   el.style.borderWidth = binding.value.width
//   el.style.borderColor = binding.value.color
//   el.style.borderStyle = binding.arg
//   if(binding.modifiers.round) {
//     el.style.borderRadius = "0.5rem"
//   }
//   if(binding.modifiers.shadow) {
//     el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.26)"
//   }
// })

// app.mixin({
//   created() {
//     console.log("global mixin")
//   }
// })

app.use(VAnimateCss)

app.mount('#app')
