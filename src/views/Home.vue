<template>
  <v-container fill-height fluid style="padding: 0; margin: 0">
    <v-row style="height: 100%">
      
      <v-col cols="12" md="7" v-bind="colProps" class="py-3 px-8">
       
        <v-row>
          
          <v-col cols="12" sm="8" class="mx-auto"
            ><v-card flat color="transparent">
               <v-toolbar color="transparent" class="mb-12" flat>
                <v-spacer></v-spacer>

                {{ isLogin ? "Not a member" : "Already a member" }}? &nbsp;
                <a href="#" @click.prevent="toggleForm">
                  {{ tooltipMsg }}
                </a>
              </v-toolbar>
              <h1 class="px-7">{{ isLogin ? "Log in" : "Register" }}</h1>
              <v-card-text>
                <v-container>
                  <Login v-if="isLogin" />
                  <Register v-else />
                </v-container>
              </v-card-text> </v-card
          ></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";

export default {
  name: "Home",
  components: {
    Login,
    Register,
  },

  data: () => ({
    isLogin: true,

    colProps: {
      style: "height: 100%; padding: 0; margin: 0",
    },
  }),

  methods: {
    toggleForm() {
      this.isLogin = !this.isLogin;
    },
  },

  computed: {
    tooltipMsg() {
      return this.isLogin ? "Register now" : "Log in now";
    },
  },
};
</script>
