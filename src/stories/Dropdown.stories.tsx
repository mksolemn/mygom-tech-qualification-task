import React from "react";
import {Dropdown} from "../components/Dropdown";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: "Dropdown",
    component: Dropdown,
    parameters: {
        label: "",
        value: [],
        options: [],
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    label: "Select",
    value: [0,1,2,3,4],
    options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Select",
    value: [],
    options: ["1", "2", "3", "4", "5"],
};
