import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe("Render footer component",() =>{
    test("test image in footer",async() =>{
        render(<Footer/>);
        const imageList = await screen.findAllByRole('img');
        expect(imageList).toHaveLength(1)
    })
})