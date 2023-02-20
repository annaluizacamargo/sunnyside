import BoxDual from '../../components/box_dual';
import './style.css';

const ContainerImg = () => {
    return (
        <div className='container-img'>
            <BoxDual
                title='Graphic design'
                description='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
                color='cyan-dark'
                img='../../../images/desktop/image-graphic-design.jpg'
            />
            
            <BoxDual
                title='Graphic design'
                description='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
                color='blue-dark'
                img='../../../images/desktop/image-photography.jpg'
            />
        </div>
    );
};

export default ContainerImg;
