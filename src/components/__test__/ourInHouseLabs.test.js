import { render, screen } from '@testing-library/react';
import OurInHouseLabs from '../OurInHouseLabs';

describe("Test the our in house lab component", () =>{
    test("render the images", async() =>{
        render(<OurInHouseLabs/>);
        const imageList = await screen.findAllByRole('img');
        expect(imageList).toHaveLength(8);
    })
})