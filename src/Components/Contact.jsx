import React from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) =>{
   e.preventDefault();
     emailjs.sendForm(
      'service_vn6vami',     
      'template_5568ku4',    
      e.target,
      'lEh6w_9brNzqP5Lju'
    )
    .then((result) => {
      console.log(result.text);
      setSubmitted(true); 
    }, (error) => {
      console.error(error.text);
    });
    e.target.reset();
  };

  return (
    <section id='contact' data-aos='fade-down' data-aos-delay='300' className='min-h-[600px] relative pt-14 pb-10 overflow-hidden flex items-center justify-center'>

      <article className='shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative'>
        
        <aside className='w-full md:w-1/2 relative flex justify-center'>
        <div className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[bb61c5] shadow-[0_0_70px_rgba(182,0,182,0.7)]'></div>
        <img src="./Contact.png" alt="" className='h-[250px] w-[250px] md:h-[320px] md:w-[320px] sm:h-[320px] sm:w-[320px] rounded-full object-cover relative top-0 md:top-18'/>
        </aside>

        {submitted ? (
          <p className="text-green-300 font-semibold text-lg pt-20 w-full text-center md:w-1/2">
            Thank You Sir/Mam, I will be replying soon... !!
          </p>
        ) : ( <>
          {/* form  -------------------------------*/}
        <section className='p-10 w-full md:w-1/2'>
         <header className='md-6'>
          <h2 className='text-4xl font-bold text-center text-white pt-12 sm:pt-0'>Contact Us</h2>
         </header>
         <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor="name" className='block text-gray-300 font-medium mb-2'>Name</label>
            <input type="text" name='name' id='name' placeholder='Your name' required className='w-full px-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none' />
          </div>
          <div>
            <label htmlFor="email" className='block text-gray-300 font-medium mb-2'>E-mail</label>
            <input type="email" required name='email' id='email' placeholder='Your email' className='w-full px-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none' />
          </div>
          <div>
            <label htmlFor="message" className='block text-gray-300 font-medium mb-2'>Message</label>
            <textarea name="message" id="message" placeholder='Your message...' className='w-full px-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none'></textarea>
          </div>
          <button className='w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadaw-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg cursor-pointer' type='submit'>Send message</button>
        </form>
        </section>
        </>
        )}
      </article>
    </section>
  )
}

export default Contact
