import ContainerTextWithImageBackground from '../../components/txt_img_background';
import './style.css';

const BoxServices = (props) => {
    const typeDisplay = props.typeDisplay;

    return (
        <div id='services' className='container-img'>
            <ContainerTextWithImageBackground
                title='Graphic design'
                description='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
                color='cyan-dark'
                backgroundColor='#8CD4C6'
                img={`../../../images/${typeDisplay}/image-graphic-design.jpg`}
            />

            <ContainerTextWithImageBackground
                title='Photography'
                description='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
                color='blue-dark'
                backgroundColor='#5CCAFF'
                img={`../../../images/${typeDisplay}/image-photography.jpg`}
            />
        </div>
    );
};

export default BoxServices;
