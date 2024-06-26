import StoryItem from "@/modules/stories/story-item";
import { expect, test } from "@playwright/experimental-ct-react";

const TEST_VALUES = {
  by: "MichaelYuhe",
  descendants: 2,
  id: 40795689,
  kids: [40795928],
  score: 6,
  text: "Hey HN, I&#x27;ve made a Chrome extension called Artifacts for ChatGPT, which brings the Claude Artifacts feature to the official ChatGPT website.",
  time: 1719367051,
  title: "Show HN: Chrome extension that brings Claude Artifacts for ChatGPT",
  type: "story",
  url: "https://github.com/MichaelYuhe/Artifacts-for-ChatGPT",
  user: {
    created: 1687682829,
    id: "MichaelYuhe",
    karma: 10,
    submitted: [
      40796136, 40795689, 40522803, 39892210, 39468237, 38551660, 36902676,
      36902674, 36893580,
    ],
  },
};

test.describe("<StoryItem />", () => {
  test("should render correctly", async ({ mount }) => {
    const component = await mount(<StoryItem story={TEST_VALUES} />);
    await expect(component).toHaveScreenshot("story-item.png");
  });
  test("should render loading state", async ({ mount }) => {
    const component = await mount(<StoryItem story={TEST_VALUES} isLoading />);
    await expect(component).toHaveScreenshot("story-item-loading.png");
  });
  test("should render correct data", async ({ mount }) => {
    const component = await mount(<StoryItem story={TEST_VALUES} />);

    await expect(component).toContainText(TEST_VALUES.by);
    await expect(component).toContainText(TEST_VALUES.title);
  });
});
