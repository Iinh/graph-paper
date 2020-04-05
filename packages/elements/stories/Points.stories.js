import {
  withKnobs,
  select,
  number,
  boolean,
  text,
} from "@storybook/addon-knobs";
import ClickToAddPointStory from "./Points/ClickToAddPoint.svelte";
import AddPointStory from "./Points/AddPoint.svelte";
import AddPointCloudStory from "./Points/AddPointCloud.svelte";

export default {
  title: "Point",
  decorators: [withKnobs],
};

export const ClickToAddAPoint = () => ({
  Component: ClickToAddPointStory,
  props: {
    size: number("size", 3),
    alpha: number("alpha", 1),
    color: text("color", "red"),
    colorAlpha: number("colorAlpha", 1),
    stroke: text("stroke", "transparent"),
    strokeAlpha: number("strokeAlpha", 0),
    strokeWidth: number("strokeWidth", 1),
  },
});

export const AddIndividualPointsOverTime = () => ({
  Component: AddPointStory,
  props: {
    size: number("size", 3),
    alpha: number("alpha", 1),
    color: text("color", "red"),
    colorAlpha: number("colorAlpha", 1),
    stroke: text("stroke", "transparent"),
    strokeAlpha: number("strokeAlpha", 0),
    strokeWidth: number("strokeWidth", 1),
  },
});

export const AddPointCloudsOverTime = () => ({
  Component: AddPointCloudStory,
});
