import { Story, Meta } from "@storybook/react";
import { PaginationButtons } from "./PaginationButtons";

export default {
  title: "Components/PaginationButtons",
  component: PaginationButtons,
} as Meta;

const Template: Story = (args) => <PaginationButtons {...args} />;

export const Default = Template.bind({});
Default.args = {};
