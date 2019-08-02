<template>
  <div class="students-index">
    <h1>Meet The CHICAGO AT&T Girls Who Code</h1>
    <div>
      <form v-on:submit.prevent="submit()">
        <div class="students">
          Students: <select list="students">
            <option v-for="student in students" v-bind:value="student.id">{{ student.first_name }}</option>
            <h1>{{ student.first_name}}</h1>
          </select>
        </div>
      </form>
    </div>

    <div>
      <div v-for="student in students" >
        <router-link class="students-list" :to="'students/'">
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
      };
    },
    created: function() {
      axios.get("/api/students")
        .then(response => {
          console.log(response.data)
          // axios.get("/api/students")
          //   .then(response => {
          //     this.users = response.data
          //   });
        });
    },
    methods: {
      storeID: function(userID) {
        localStorage.setItem("inviteId", userID);
        console.log(userID)
      }
    }
  }
</script>