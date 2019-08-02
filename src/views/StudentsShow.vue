<template>
  <div class="students-show">
    <h1 id="student-name">{{student.first_name + student.last_name}}</h1>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {

  data: function() {
    return {
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
          }
  },

  created: function() {
    this.userId = localStorage.getItem("userId");
    axios.get("/api/students/" + this.$route.params.id )
      .then(response => {
      this.studefnt = response.data;
      axios.get("/api/students/" + this.$route.params.id)
      console.log(this.studefnt);

    });
  },

  methods: {}
};
</script>s