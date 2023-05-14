import { Story } from "@storybook/react";
import { MainTitle } from "./MainTitle";

export default {
	title: "Components/MainTitle",
	component: MainTitle,
};

const Template: Story = () => <MainTitle />;

export const Default = Template.bind({});
