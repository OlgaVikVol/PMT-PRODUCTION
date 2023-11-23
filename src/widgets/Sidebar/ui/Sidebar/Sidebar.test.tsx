import {  fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { 
	renderWithTranslation 
} from "../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe ('Sidebat test', () => {
	test('sidebar', () => {
		renderWithTranslation(<Sidebar/>)
		expect(screen.queryByTestId('sidebar')).toBeInTheDocument()
	});

	test('test toggle', () => {
		renderWithTranslation(<Sidebar/>);
		const toggleBtn = screen.getByTestId('sidebar-toggle');
		expect(screen.queryByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
})
