import { useState } from 'react';
import SliderCards from '../slider/slider-card/index';
import { Link } from 'react-router-dom';
import { SliderBox, SliderButton, SliderContent, MoreReviewsButton } from './components';

export default function Slider() {
    const [styledColorPreviousElement, setStyledColorPreviousElement] = useState('#A9A9A9');
    const [styledColorNextElement, setStyledColorNextElement] = useState('#EE685F');
    const [leftColorArrow, setLeftColorArrow] = useState();

    const sliderData = [
        { id: 1, content: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.', avatarSrc: 'slider_avatar_1.png' },
        { id: 2, content: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.', avatarSrc: 'slider_avatar_1.png' },
        { id: 3, content: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.', avatarSrc: 'slider_avatar_1.png' },
        { id: 4, content: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.', avatarSrc: 'slider_avatar_1.png' },
        { id: 5, content: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.', avatarSrc: 'slider_avatar_1.png' },
        { id: 6, content: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.', avatarSrc: 'slider_avatar_1.png' }
    ];



    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleSlides = 3;

    const previousElement = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 1) {
                setStyledColorPreviousElement('#A9A9A9');
                return prevIndex - 1;
            } if (prevIndex == 0) {
                return prevIndex;
            }
            setStyledColorNextElement('#EE685F');
            return prevIndex - 1;
        })
    }

    const nextElement = () => {
        setCurrentIndex((prevIndex) => {
            const lastElement = visibleSlides;
            if (lastElement + prevIndex === sliderData.length - 1) {
                setStyledColorNextElement('#A9A9A9');
                return prevIndex + 1;
            } if (prevIndex + visibleSlides < sliderData.length) {
                setStyledColorPreviousElement('#EE685F');
                setLeftColorArrow('');
                return prevIndex + 1;
            }
            return prevIndex;
        })

    }

    return (
        <SliderContent>
            <SliderBox>
                <SliderButton onClick={previousElement} style={{ backgroundColor: styledColorPreviousElement }}>
                    <figure>
                        <img src={new URL('../../img/left_arrow.svg', import.meta.url).href} style={{ color: leftColorArrow }} alt="Avatar" />
                    </figure>
                </SliderButton>
                {sliderData.slice(currentIndex, currentIndex + visibleSlides).map((item) => (
                    <SliderCards key={item.id} avatarSrc={item.avatarSrc} content={item.content} />
                ))}
                <SliderButton onClick={nextElement} style={{ backgroundColor: styledColorNextElement }}>
                    <figure>
                        <img src={new URL('../../img/right_arrow.svg', import.meta.url).href} alt="Avatar" />
                    </figure>
                </SliderButton>
            </SliderBox>
            <Link to="/reviews">
                <MoreReviewsButton>
                    More reviews
                </MoreReviewsButton>
            </Link>
        </SliderContent>
    );
}
