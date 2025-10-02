<template>
  <div>
    <h2>🏠 HOME</h2>
    <div class="container">
      <div class="section card">
        <h3>상품 페이지</h3>
        <router-link to="/product/1" class="btn">상품 1 보기</router-link><br />
        <router-link to="/product/2" class="btn">상품 2 보기</router-link>
      </div>
      <div class="section card">
        <h3>사용자 페이지</h3>
        <router-link to="/user/kim" class="btn">Kim profile</router-link><br />
        <router-link to="/user/ha" class="btn del">Ha profile</router-link>
      </div>
      <div class="section card">
        <h3>게시글 페이지</h3>
        <router-link to="/post/101" class="btn">게시글 101 보기</router-link><br />
        <router-link to="/post/202" class="btn del">게시글 202 보기</router-link>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
// @import "../assets/styles/btn"; //버튼 공통 스타일 불러오기
@use "../assets/styles/btn" as *; // 다른 연결 방법
@use "../assets/styles/variavles" as *;
.container{
    display: flex;
    padding: 20px;
    gap: 20px;
h3{
    color: $main-color;
    margin-bottom: 30px;
}
.section{
    padding: 20px;
    background-color: aliceblue;
}
}
//     h3{
//         color: $main-color;
//         margin-bottom: 30px;
//     }
//     .section{
//         padding: 20px;
//         background-color: aliceblue;
//     }
// }
</style>
