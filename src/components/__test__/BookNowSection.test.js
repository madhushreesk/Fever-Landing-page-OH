import { render, screen } from '@testing-library/react';
import BookNowSection from '../BookNowSection';


describe("Test the BookNowSection component", () =>{
    test("render book now with a button", async() =>{
        render(<BookNowSection/>);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(1);
    })
});