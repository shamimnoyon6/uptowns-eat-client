import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.png'
import img4 from '../../../assets/home/04.jpg'
import img5 from '../../../assets/home/05.png'
import img6 from '../../../assets/home/06.png'

const Banner = () => {
    return (
        <AwesomeSlider cssModule={AwesomeSliderStyles}>
        <div data-src={img1} />
        <div data-src={img2} />
        <div data-src={img3} />
        <div data-src={img4} />
        <div data-src={img5} />
        <div data-src={img6} />
      </AwesomeSlider>
    );
};

export default Banner;