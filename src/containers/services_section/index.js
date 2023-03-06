import ContainerTextWithImageBackground from '../../components/box_txt_img_background';
import './style.css';

const ServicesSection = (props) => {
    const typeDisplay = props.typeDisplay;

    return (
        <div id='services' className='container-img'>
            <ContainerTextWithImageBackground
                title='Graphic Design'
                description='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
                color='var(--dark-desaturated-cyan)'
                img={`../../../images/${typeDisplay}/image-graphic-design.jpg`}
            />

            <ContainerTextWithImageBackground
                title='Photography'
                description='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
                color='var(--dark-blue)'
                img={`../../../images/${typeDisplay}/image-photography.jpg`}
            />
        </div>
    );
};

export default ServicesSection;
