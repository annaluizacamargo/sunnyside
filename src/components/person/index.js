import './style.css';

const Person = (props) => {
    const imgPerson = props.img;
    const textPerson = props.text;
    const namePerson = props.name;
    const functionPerson = props.function;

    return (
        <div className='person'>
            <img></img>
            <h4>{textPerson}</h4>
            <h3>{namePerson}</h3>
            <p>{functionPerson}</p>
        </div>
    )
};

export default Person;
