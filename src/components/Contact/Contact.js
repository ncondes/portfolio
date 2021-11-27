import emailjs from 'emailjs-com'
import { forwardRef, useRef } from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2'


export const Contact = forwardRef( ( props, contact ) => {

    const form = useRef();

    const [ formValues, handleInputChange, reset ] = useForm({
        form_name: '',
        form_email: '',
        form_subject: '',
        message: '',
    })

    const { form_name, form_email, form_subject, message } = formValues;

    const handleSubmit = ( e ) => {

        e.preventDefault()
        emailjs.sendForm( 'service_z2eubla', 'template_71k0asg', form.current, 'user_O70I4YwWi68ZaKnSg5fSP')
            .then( result => {
                Swal.fire({
                    title: 'Message sent!',
                    text: 'Your message has been sent successfully',
                    icon: 'success'
                })
                reset();
                
            }, ( error ) => {
                console.log( error.text );
                reset();
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong',
                  })
            })
    }

    return (
        <section
            ref={ contact }
            id='contact'
            className='contact pt-14 animate__animated animate__fadeInUp'
        >
            <div className='container mx-auto px-5 sm:px-10 md:px-20 lg:px-40'>
                <SectionTitle
                    title='CONTACT'
                />
                <div>
                    <div>
                        <p className='text-center text-secondary-font-color mb-5'>Contact me if you want us to work together, I'll be happy to reply.</p>
                    </div>
                    <div>
                        <form
                            ref={ form }
                            className='flex flex-col items-center'
                            onSubmit={ handleSubmit }
                        >`
                            <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 gap-x-5'>
                                <input
                                    className='shadow-sm focus:ring focus:ring-blue-color focus:ring-opacity-60'
                                    type='text'
                                    placeholder='Your Name'
                                    autoComplete='off'
                                    required
                                    name='form_name'
                                    onChange={ handleInputChange }
                                    value={ form_name }
                                />
                                <input
                                    className='shadow-sm focus:ring focus:ring-blue-color focus:ring-opacity-60'
                                    type='email'
                                    placeholder='Your Email'
                                    autoComplete='off'
                                    required
                                    name='form_email'
                                    onChange={ handleInputChange }
                                    value={ form_email }
                                />
                            </div>
                            <input
                                className='shadow-sm focus:ring focus:ring-blue-color focus:ring-opacity-60'
                                type='text'
                                placeholder='Subject'
                                autoComplete='off'
                                required
                                name='form_subject'
                                onChange={ handleInputChange }
                                value={ form_subject }
                            />
                            <textarea
                                className='shadow-sm focus:ring focus:ring-blue-color focus:ring-opacity-60'
                                placeholder='Message'
                                required
                                name='message'
                                onChange={ handleInputChange }
                                value={ message }
                            />
                            <button
                                className='text-md text-secondary-font-color w-56 py-3 px-9 bg-nav-item-color rounded-md transition hover:bg-blue-color hover:text-nav-item-color'
                                type='submit'
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
)
