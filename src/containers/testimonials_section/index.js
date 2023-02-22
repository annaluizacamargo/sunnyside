import Person from '../../components/person';
import './style.css';

const TestimonialsSection = () => {
    return (
        <div id='projects' className='box-testimonials'>
            <h5>Client testimonials</h5>
            <div>
                <Person
                    img='../../../images/image-emily.jpg'
                    text='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
                    name='Emily R.'
                    function='Marketing Director'
                />

                <Person
                    img='../../../images/image-thomas.jpg'
                    text='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
                    name='Thomas S.'
                    function='Chief Operating Officer'
                />

                <Person
                    img='../../../images/image-jennie.jpg'
                    text='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
                    name='Jennie F.'
                    function='Business Owner'
                />

            </div>
        </div>
    );
};

export default TestimonialsSection;
