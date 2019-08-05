<template>
  <div class="home">
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <h1>ABOUT ME</h1>

    <div id="container">
      <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label>Image</label> 
          <input type="text" class="form-control" v-model="user.image">
        </div>
        <div class="form-group">
          <label>First Name</label> 
          <input type="text" class="form-control" v-model="user.first_name">
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input type="last_name" class="form-control" v-model="user.last_name">
        </div>
        <div class="form-group">
          <label>Birthday</label>
          <input type="birthday" class="form-control" v-model="user.birthday">
        </div>
        <div class="form-group">
          <label>Age</label>
          <input type="age" class="form-control" v-model="user.age">
        </div>
        <div class="form-group">
          <label>School</label>
          <input type="school" class="form-control" v-model="user.school">
        </div>
        <div class="form-group">
          <label>Grade</label>
          <input type="grade" class="form-control" v-model="user.grade">
        </div>
        <div class="form-group">
          <label>College</label>
          <input type="college" class="form-control" v-model="user.college">
        </div>
        <div class="form-group">
          <label>Major</label>
          <input type="major" class="form-control" v-model="user.major">
        </div>
        <div class="form-group">
          <label>Bio</label>
          <input type="bio" class="form-control" v-model="user.bio">
        </div>
        <div class="form-group">
          <label>Final Project</label>
          <input type="final_project" class="form-control" v-model="user.final_project">
        </div>
        <input type="submit" class="btn btn-primary" value="Save">
      </form>
    </div>
    
    <button class="btn" v-on:click="homepage()">Homepage</button>

  </div>

</template>

<style>
  #container {
    align-content: center;
    height: 250px;
    width: 250px;
    margin-left: 5px;
    margin-right: 5px;
  }

  .btn {
    margin: 30px 0;
    border-radius: 5%;
    padding: 10px 25px;
    float: center;
    font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
    color: white;
    text-transform: uppercase;
    font-weight: 900;
    background-color: #868e96;
    border-color: #868e96;
  }

  .btn:hover {
    background-color: #ffffff;
    color: #fff;
  }

</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      user: {
            id: "",
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
      },
      errors: [] 
    };
  },

  created: function () {
    var userId = localStorage.getItem("userId");
    axios.get("/api/users/" + userId)
      .then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  },

  methods: {
    submit: function() {
      var params = {
                    id: this.user.id,
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
      }

      axios.patch("/api/users/" + this.user.id, params)
        .then(response => {
          this.user = response.data;
          this.$router.push("/users");
        }).catch(error => {
          console.log(error.response.data.errors);
          this.user.push(response.data);
          this.$router.push("/home")
        });
    },

    homepage: function() {
      axios.get("/api/users/")
        .then(response => {
          this.$router.push("/users")
        });
    }
  }
};
</script>