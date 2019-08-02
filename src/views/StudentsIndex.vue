<template>
  <div class="students-index">
    <h1>Meet The CHICAGO AT&T Girls Who Code</h1>
    <div>
      <div v-for="student in students" >
        <router-link v-bind:to="'students/' + student.id">
          {{ student.first_name + student.last_name }} 
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
        students: [],
        student: {
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
      axios.get("/api/students")
        .then(response => {
          console.log(response.data)
          this.students = response.data;

          // axios.get("/api/students")
          //   .then(response => {
          //     this.users = response.data
          //   });
        });
    },
    methods: {
      submit: function() {
        console.log("Showing students")
        var params = {
                      first_name: this.student.first_name,
                      last_name: this.student.last_name,
                      birthday: this.student.birthday,
                      age: this.student.age,
                      school: this.student.school,
                      grade: this.student.grade,
                      college: this.student.college,
                      major: this.student.major,
                      bio: this.student.bio,
                      final_project: this.student.final_project
                      };                  

          axios.post("api/students", params)
            .then(response => {
              this.$router.push("/students");
            });
      },
      storeID: function(userID) {
        localStorage.setItem("inviteId", userID);
        console.log(userID)
      }
    }
  }
</script>