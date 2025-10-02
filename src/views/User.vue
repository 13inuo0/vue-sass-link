<template>
  <div class="card">
    <h2>👩‍🦰유저 프로필</h2>
    <p>유저 이름 : {{ username }}</p>
    <p>자기 소개 : {{ userBio }}</p>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const username = route.params.name;
const users = {
  kim: { bio: "안녕하세요! 저는 김씨에요 😀" },
  ha: { bio: "저는 여행을 좋아하는 Ha에요 🌍" },
};
const userBio = users[username].bio;
</script>

<style lang="scss" scoped>
@use "../assets/styles/card" as *;
</style>