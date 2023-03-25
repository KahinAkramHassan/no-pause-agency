import { Parallax } from 'react-parallax';

import imageOne from '../../assets/img/no-pause-agency-img1.jpg';

const ImageOne = () => (
    <Parallax className='background-img' blur={0} bgImage={imageOne} bgImageAlt="the cat" strength={200} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'> 
            <span className='img-text'>
            <h1 >Unlock your growth potential with NoPause Agency's high-quality User Generated Content.</h1>
            </span>
        </div> 
    </Parallax>
);

export default ImageOne;

