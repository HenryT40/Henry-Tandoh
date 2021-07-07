import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC6r0PvstT8bceyBsGT7JAbc9sAsDlxoWM",
  authDomain: "webapp4040-32bad.firebaseapp.com",
  projectId: "webapp4040-32bad",
  storageBucket: "webapp4040-32bad.appspot.com",
  messagingSenderId: "79552318472",
  appId: "1:79552318472:web:b59ec63ef6ca93656dd5bd",
  measurementId: "G-QZ9MXNH8GM"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
