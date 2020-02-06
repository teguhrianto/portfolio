<template>
  <b-container>
    <img alt="Vue logo" src="./assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App Teguh"/>
    <font-awesome-icon :icon="['fas', 'user-secret']" />
  </b-container>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>