import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import VueViewer from 'v-viewer'
import '@/styles/index.css'
import '@/styles/app.css'
import 'viewerjs/dist/viewer.css'

createApp(App)
  .use(router)
  .use(VueViewer)
  .use(createPinia())
  .mount('#app')

/* parallax */
let l1, l2, l3, l4, t1, t2, t3, t4;
window.addEventListener('DOMContentLoaded', (event) => {
  const dom = (str) => document.getElementById(str);
  l1 = dom('losange1');
  t1 = l1.offsetTop;
  l2 = dom('losange2');
  t2 = l2.offsetTop;
  l3 = dom('losange3');
  t3 = l3.offsetTop;
  l4 = dom('losange4');
  t4 = l4.offsetTop;
});

window.addEventListener("scroll", function () {
  if (!l1) {
    return;
  }
  const y = window.pageYOffset;
  l1.style.top = (t1 + y * 0.6) + "px";
  l2.style.top = (t2 + y * 0.6) + "px";
  l3.style.top = (t3 + y * 0.4) + "px";
  l4.style.top = (t4 + y * 0.4) + "px";
});