import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD5WG6wfSxHFVbEf0twHBUl66Ry31TwXcw",
  authDomain: "test-33181.firebaseapp.com",
  projectId: "test-33181",
  storageBucket: "test-33181.appspot.com",
  messagingSenderId: "500703637841",
  appId: "1:500703637841:web:4b4d3dbfb4c21a93016370",
  measurementId: "G-YD6C1RP524"
};


firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
