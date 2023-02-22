import BoxDual from '../../components/box_dual';
import './style.css';

const ContainerImg = (props) => {
    const typeDisplay = props.typeDisplay;

    return (
        <div className='container-img'>
            <BoxDual
                title='Graphic design'
                description='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
                color='cyan-dark'
                backgroundColor='#8CD4C6'
                img={`../../../images/${typeDisplay}/image-graphic-design.jpg`}
            />

            <BoxDual
                title='Photography'
                description='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
                color='blue-dark'
                backgroundColor='#5CCAFF'
                img={`../../../images/${typeDisplay}/image-photography.jpg`}
            />
        </div>
    );
};

export default ContainerImg;
