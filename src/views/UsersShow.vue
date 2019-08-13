<template>
  <div class="users-show">
    <h1 id="user-name">{{ user.first_name + " " + user.last_name }}</h1>
      <div>
        {{ user.birthday }}
        <br>
        {{ user.age }}
        <br>
        {{ user.school }}
        <br>
        {{ user.grade }}
        <br>
        {{ user.college }}
        <br>
        {{ user.major }}
        <br>
        {{ user.bio }}
        <br>
        {{ user.final_project }}
        <br>
      </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {

  data: function() {
    return {
            user: {
                      first_name: "",
                      last_name: "",
                      birthday: "",
                      age: "",
                      school: "",
                      grade: "",
                      college: "",
                      major: "",
                      bio: "",
                      final_project: ""
            }
          }
  },

  created: function() {
    this.userId = localStorage.getItem("userId");
    axios.get("/api/users/" + this.$route.params.id )
      .then(response => {
      this.user = response.data;
      axios.get("/api/users/" + this.$route.params.id)
      console.log(this.user);
    });
  },

  methods: {}
};
</script>s