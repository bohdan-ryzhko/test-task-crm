import { render, fireEvent } from "@testing-library/react";
import { ContentWrapper } from "./ContentWrapper";

describe("ContentWrapper", () => {
	it("should render children", () => {
		const { getByText } = render(
			<ContentWrapper setToggleMenu={() => {}}>
			<div>Child Content</div>
			</ContentWrapper>
		);

		expect(getByText("Child Content")).toBeInTheDocument();
	});

	it("should call setToggleMenu when button is clicked", () => {
		const setToggleMenu = jest.fn();
		const { getByRole } = render(
			<ContentWrapper setToggleMenu={setToggleMenu}>
			<div>Child Content</div>
			</ContentWrapper>
		);

		const button = getByRole("button");
		fireEvent.click(button);

		expect(setToggleMenu).toHaveBeenCalled();
	});
});
