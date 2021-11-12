<template>
  <div>
    <div v-if="isSubmitted && error_name()" class="danger" id="error_name">
      {{ error_name() }}
    </div>
    <div v-if="isSubmitted && error_email()" class="danger" id="error_email">
      {{ error_email() }}
    </div>
    <label>Name:</label>
    <input type="text" v-model="contact.name" />

    <label>Email:</label>
    <input type="email" v-model="contact.email" />

    <button @click="submit">Submit</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Contact } from "@/clients/types/Contact";
import { submitContactInformation } from "@/clients/ContactClient";
import { namespace } from "vuex-class";

const resultStore = namespace("result");

@Component
export default class ContactForm extends Vue {
  private contact: Contact = {
    name: "",
    email: "",
  };
  private isSubmitted: boolean = false;

  @resultStore.Mutation("addList")
  private addList!: (contact: Contact) => void;

  error_name() {
    return this.contact.name.trim().length == 0
      ? "Please enter a username"
      : "";
  }
  error_email() {
    return this.contact.email.trim().length == 0 ? "Please enter a email" : "";
  }

  async submit(): Promise<void> {
    try {
      this.isSubmitted = true;
      await submitContactInformation(this.contact);
      if (this.error_name() || this.error_email()) return;
      this.addList(this.contact);
    } catch (error) {
      console.log("error");
    }
  }
}
</script>
