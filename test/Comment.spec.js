import { shallowMount } from "@vue/test-utils";
import Comment from "@/components/Comment.vue";

describe("Comment.vue", () => {
  it("displays comments correctly", () => {
    const comments = [
      { id: 1, username: "user1", comment: "comment1" },
      { id: 2, username: "user2", comment: "comment2" },
      { id: 3, username: "user3", comment: "comment3" },
    ];
    const wrapper = shallowMount(Comment, {
      propsData: {
        comments: comments,
      },
    });
    const commentElements = wrapper.findAll(".p-5");
    expect(commentElements.length).toBe(comments.length);
    comments.forEach((comment, index) => {
      expect(commentElements.at(index).text()).toContain(comment.username);
      expect(commentElements.at(index).text()).toContain(comment.comment);
    });
  });
});
