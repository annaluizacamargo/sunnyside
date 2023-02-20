import Person from '../../components/person';
import './style.css';

const BoxTestimonials = () => {
    console.log('BoxTestimonials');

    return (
        <div className='box-testimonials'>
            <Person
                img=''
                text='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
                name='Emily R.'
                function='Marketing Director'
            />
            <Person
                img=''
                text='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
                name='Thomas S.'
                function='Chief Operating Officer'
            />
            <Person
                img=''
                text='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
                name='Jennie F.'
                function='Business Owner'
            />
        </div>

    )
};

export default BoxTestimonials;
