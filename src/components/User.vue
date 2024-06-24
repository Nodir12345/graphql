<script setup>
  import { useQuery } from "@vue/apollo-composable";
  import gql from "graphql-tag";
  import { computed } from "vue";

  const { result } = useQuery(gql`
  query {
    users {
      data {
        id
        name
        email
        address {
          city
        }
      }
    }
  }
  `
  );

  const users = computed(() => result.value?.users.data);
</script>

<template>
  <div class="wrapper">
    <div v-for="user in users" :key="user.id">
      <span>{{ user.id }}</span>
      <h2>{{ user.name }}</h2>
      <p>Email: {{ user.email }}</p>
      <p>Location: {{ user.address.city }}</p>
    </div>
  </div>
</template>

<style>
.wrapper{
  display: flex; flex-wrap: wrap; gap: 20px
}
</style>