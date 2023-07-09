<script setup>
import axios from 'axios'
axios.get('/api/todos')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
</script>
<template>
    <h3>Home</h3>
    <p>Cloudflare pages</p>
    <p>I am Staging</p>
</template>

<style scoped></style>