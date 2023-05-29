import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookNowSection from '../BookNowSection';


describe("Test the BookNowSection component", () =>{
    test("render book now with a button", async() =>{
        render(<BookNowSection/>);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(1);
    })

    test("email input field should accept email",()=>{
        render(<BookNowSection/>);
        const email = screen.getByPlaceholderText("Enter your full name");
        userEvent.type(email,"msk");
        expect(email.value).not.toMatch("msk@gmail.com");
    })

    test("phone number field must contain numbers",()=>{
        render(<BookNowSection/>);
        const number = screen.getByPlaceholderText("Enter your phone number");
        userEvent.type(number,"123");
        expect(number.value).not.toMatch("1234");
    })
});

