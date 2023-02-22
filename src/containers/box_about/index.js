import BoxLogo from '../../components/box_logo';
import BoxTxtImg from '../../components/box_txt_img';

function BoxAbout(props) {
    const typeDisplay = props.typeDisplay;

    return (
        <div className="BoxAbout">
            <BoxLogo typeDisplay={typeDisplay} />

            <BoxTxtImg
                typeDisplay={typeDisplay}
                flex='row'
                title='Transform your brand'
                description='We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
                color='yellow'
                img={`../../../images/${typeDisplay}/image-transform.jpg`}
            />

            <BoxTxtImg
                typeDisplay={typeDisplay}
                flex='row-reverse'
                title='Stand out to the right audience'
                description='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
                color='red'
                img={`../../../images/${typeDisplay}/image-stand-out.jpg`}
            />
        </div>
    );
};

export default BoxAbout;
