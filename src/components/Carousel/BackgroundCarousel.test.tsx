import { act, render, screen } from '@testing-library/react';
import BackgroundCarousel from './BackgroundCarousel';

describe('Carousel', () => {

    test('Number of Images in Carousel', () => {
        const { container } = render(<BackgroundCarousel />);
        const CarouselItems = container.getElementsByClassName('c-image');
        expect(CarouselItems.length).toBe(3);
    });

    test('Check for forward Button present or not', () => {
        let container: any;
        const dispatchCarsByType = jest.fn();
        act(() => {
            render(<BackgroundCarousel carTypeIndex={0} dispatchCarsByType={dispatchCarsByType} />, container);
        });
        const nextCarouselSlideButton = screen.getByTestId("next");
        expect(nextCarouselSlideButton).toBeInTheDocument();
    });

    test('Check for previous Button present or not', () => {
        let container: any;
        const dispatchCarsByType = jest.fn();
        act(() => {
            render(<BackgroundCarousel carTypeIndex={0} dispatchCarsByType={dispatchCarsByType} />, container);
        });
        const prevCarouselSlideButton = screen.getByTestId("prev");
        expect(prevCarouselSlideButton).toBeInTheDocument();
    });

    test('Check for button click for previous Button', () => {
        let container: any;
        const dispatchCarsByType = jest.fn();
        act(() => {
            render(<BackgroundCarousel carTypeIndex={0} dispatchCarsByType={dispatchCarsByType} />, container);
        });
        expect(dispatchCarsByType).toHaveBeenCalledTimes(0);
        const prevCarouselSlideButton = screen.getByTestId("prev");
        act(() => {
            prevCarouselSlideButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(dispatchCarsByType).toHaveBeenCalledTimes(1);
    });

    test('Check for button click for next Button', () => {
        let container: any;
        const dispatchCarsByType = jest.fn();
        act(() => {
            render(<BackgroundCarousel carTypeIndex={0} dispatchCarsByType={dispatchCarsByType} />, container);
        });
        expect(dispatchCarsByType).toHaveBeenCalledTimes(0);
        const nextCarouselSlideButton = screen.getByTestId("next");
        act(() => {
            nextCarouselSlideButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(dispatchCarsByType).toHaveBeenCalledTimes(1);
    });

});