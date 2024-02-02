import type { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import { VideoPlayerExample } from "./VideoPlayerExample";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Atoms/VideoPlayerExample",
  component: VideoPlayerExample,
  // tags: ["autodocs"],
} satisfies Meta<typeof VideoPlayerExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const videoContainer = await canvas.findByRole("region");
    expect(videoContainer).not.toBeNull();
    // const videoPlayer =
    //   videoContainer.querySelector("video.vjs-tech") || videoContainer;
    // expect(videoPlayer).not.toBeNull();
    // setTimeout(async () => {
    //   await waitFor(() => {
    //     userEvent.click(videoContainer);
    //   });
    // }, 5000);
  },
};
