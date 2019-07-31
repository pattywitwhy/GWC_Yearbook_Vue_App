<template>
  <div class="logout">
    <h1>{{ Bye }}</h1>
  </div>
</template>

<style>
  h1  {
    color: blue;
  }
</style>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    this.$router.push("/login");
  }
};
</script>