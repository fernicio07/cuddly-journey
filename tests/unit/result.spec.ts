import { shallowMount } from "@vue/test-utils";
import Result from "@/views/Result.vue";

describe("Result.vue", () => {
  it("renders result enterend in contact form", () => {
    const wrapper = shallowMount(Result, {
      data: {
        name: "user",
        email: "user@gmail.com",
      },
    });

    expect(wrapper.find(".error").exists()).toBeFalsy();
  });
});
