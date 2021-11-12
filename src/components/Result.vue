<template>
  <div>
    <table class="table">
      <tr v-for="(value, id) in lists" v-bind:key="id">
        <td>{{ value.name }}</td>
        <td>{{ value.email }}</td>
        <td><router-link :to="`/user/${id}`">See User</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Contact } from "@/clients/types/Contact";

const resultStore = namespace("result");

@Component
export default class Result extends Vue {
  @resultStore.Getter("getList")
  private lists!: () => Array<Contact>;
}
</script>

<style scoped>
.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
}

td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}
</style>
