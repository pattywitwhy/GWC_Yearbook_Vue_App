<template>
  <div class="users-index">
    <h1>Meet The CHICAGO AT&T Girls Who Code</h1>
    <div id="students">
      <b-card-group deck>
        <div class="girls" v-for="user in users" >
          <router-link v-bind:to="'users/' + user.id">
              <b-card img-src="/Iry.JPG" tag="article" style="max-width: 20rem;" img-top>
                <div>
                  {{ user.image }}
                  <b-card-text>
                    {{ user.first_name + " " + user.last_name }}
                  </b-card-text>
                  <b-card-text>
                    {{ user.grade }}
                  </b-card-text>
                  <b-card-text>
                    {{ user.school }}
                  </b-card-text>
                  <b-card-text>
                    {{ user.bio }}
                  </b-card-text>
                </div>
              </b-card>
          </router-link>
        </div>
      </b-card-group>
    </div>
  </div>
</template>

<style>
.card-deck {
  justify-content: center;
}

</style>

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
        });
    },
    methods: {
      submit: function() {
        console.log("Showing users")
        var params = {
                      first_name: user.first_name,
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