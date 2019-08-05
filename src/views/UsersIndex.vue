<template>
  <div class="users-index">
    <h1>Meet The CHICAGO AT&T Girls Who Code</h1>
    <div>
      <div v-for="user in users" >
        <router-link v-bind:to="'users/' + user.id">
          {{ user.image }}
          {{ user.first_name + " " + user.last_name }} 
          {{ user.grade }}
          {{ user.school }}
        </router-link>
      </div>
    </div>


  </div>
</template>

<style></style>

<script>
  var axios = require('axios');

  export default {
    data: function() {
      return {
        users: [],
        user: {
                  image: "",
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
      };
    },
    created: function() {
      axios.get("/api/users")
        .then(response => {
          console.log(response.data)
          this.users = response.data;

          // axios.get("/api/users")
          //   .then(response => {
          //     this.users = response.data
          //   });
        });
    },
    methods: {
      submit: function() {
        console.log("Showing users")
        var params = {
                      first_name: this.user.first_name,
                      last_name: this.user.last_name,
                      birthday: this.user.birthday,
                      age: this.user.age,
                      school: this.user.school,
                      grade: this.user.grade,
                      college: this.user.college,
                      major: this.user.major,
                      bio: this.user.bio,
                      final_project: this.user.final_project
                      };                  

          axios.post("api/users", params)
            .then(response => {
              this.$router.push("/users");
            });
      },
      storeID: function(userID) {
        localStorage.setItem("inviteId", userID);
        console.log(userID)
      }
    }
  }
</script>