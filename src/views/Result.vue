<template>
  <div>
    <h1>Submitted Contact Info</h1>

    <div>
      <Result />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Result from "@/components/Result.vue";

@Component({
  components: {
    Result,
  },
})
export default class Contact extends Vue {}
</script>
