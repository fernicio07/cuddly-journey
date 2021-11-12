import { shallowMount } from "@vue/test-utils";
import ContactForm from "@/components/ContactForm.vue";

describe("ContactForm.vue", () => {
  it("renders contact form", () => {
    const wrapper = shallowMount(ContactForm);
    const button = wrapper.find("button");
    button.trigger("click");

    expect(wrapper.find("#error_name").exists()).toBeFalsy();
    expect(wrapper.find("#error_email").exists()).toBeFalsy();
  });
});
