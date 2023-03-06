import './style.css';

const ProjectsSection = (props) => {
    const typeDisplay = props.typeDisplay;

    return (
        <div className='box-images'>
            <img alt="image milkbottles" src={`../../../images/${typeDisplay}/image-gallery-milkbottles.jpg`}></img>
            <img alt="image orange" src={`../../../images/${typeDisplay}/image-gallery-orange.jpg`}></img>
            <img alt="image cone" src={`../../../images/${typeDisplay}/image-gallery-cone.jpg`}></img>
            <img alt="image sugarcubes" src={`../../../images/${typeDisplay}/image-gallery-sugarcubes.jpg`}></img>
        </div>
    );
};

export default ProjectsSection;
