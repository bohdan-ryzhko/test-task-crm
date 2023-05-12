import { Story } from "@storybook/react";
import { CustomersTable } from "./CustomersTable";
import { CustomersTableProps } from "../../interfaces/CustomersTableProps";
import { customersTitles } from "../../data/customersTitles";
import { customers } from "../../data/customers";

export default {
  title: "Components/CustomersTable",
  component: CustomersTable,
};

const Template: Story<CustomersTableProps> = (args) => <CustomersTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  customersTitles: customersTitles,
  customers: customers,
};
