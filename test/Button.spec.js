import { mount } from "@vue/test-utils";
import Button from "@/components/Button.vue";

describe("Button.vue", () => {
  it("displays 'LOAD MORE' text", () => {
    const wrapper = mount(Button);
    expect(wrapper.text()).toContain("LOAD MORE");
  });

  it("calls the 'showMore' method when clicked", async () => {
    const showMore = jest.fn();
    const wrapper = mount(Button, {
      propsData: { loading: false, keywords: "", hasMore: true, showMore },
    });
    await wrapper.trigger("click");
    expect(showMore).toHaveBeenCalled();
  });
});
