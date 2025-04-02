<!-- DefaultHeader.vue -->
<template>
    <nav class="container justify-content-center nav"> <!-- App.vue에 있던 <nav>부분 전체 잘라내기 후 붙여넣기. -->
    <router-link class="nav-link" to="/">Home</router-link> |
    <router-link class="nav-link " :to="{name : 'custList'}">전체조회</router-link> |
    <router-link class="nav-link" :to="{name : 'custAdd'}">등록</router-link> |
  </nav>
</template>