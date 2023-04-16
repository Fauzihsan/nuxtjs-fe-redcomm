import { mount } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar.vue";

describe("SearchBar", () => {
  test("emits 'search' event when input changes", async () => {
    const wrapper = mount(SearchBar);
    const input = wrapper.find("input");
    await input.setValue("test");
    expect(wrapper.emitted().search[0][0]).toBe("test");
  });
});
