import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';

const testimonials = [
  {
    text: 'Exceptional experience! Our guests have raved since the event on the location, food and decor. All we had to do was show up. We couldn\'t have been more pleased!',
    author: 'BRANDI WILKERSON',
    source: 'Perfect Wedding Guide',
    color: '#bd574e',
  },
  {
    text: 'What truly made our wedding absolutely perfect was how easy planning and day of went. Our wedding coordinator...was nothing short of incredible. She communicated every detail along the way and day of, was on top of EVERYTHING. I honestly was shocked at how perfect everything was, and it gave me and my husband the opportunity to be present and truly enjoy our day.',
    author: 'NEYSHA H.',
    source: 'Google Reviews',
    color: '#bd574e',
  },
  {
    text: 'If you are considering Infinity for an event, I can truly say that they care about your experience and partner with you to make it a success.',
    author: 'LIBBY A.',
    source: 'Facebook',
    color: '#bd574e',
  },
  {
    text: 'We recently hosted a Rehearsal Dinner at the Bridge Building and our entire experience with the Infinity team was exceptional. From our first meeting with Bubba, to our Event Specialist, Kristina, to the Catering Manager, Haven Brown and all of the many folks that served the night of the party, I applaud your professionalism and friendliness. Kristina was efficient, courteous, timely, friendly and never missed a beat.',
    author: 'INDIA W.',
    source: 'Google Reviews',
    color: '#bd574e',
  },
  {
    text: 'The staff was so accommodating and friendly. I felt like they were having a good time with us which was just great.',
    author: 'SIERRA',
    source: 'Wedding Wire',
    color: '#bd574e',
  },
  {
    text: 'Infinity was able to give my husband and I the wedding of our dreams! They did an amazing job and I would highly recommend them to anyone!...My husband and I could not be happier with how our big day turned out and are so glad we were able to enjoy it with our family and friends!',
    author: 'JENNA',
    source: 'WeddingWire',
    color: '#bd574e',
  },
  {
    text: 'The service and attention to detail was impeccable. Thanks for making my dream wedding come true!',
    author: 'JESS W.',
    source: 'Google',
    color: '#bd574e',
  },
  {
    text: 'Our rep...was top notch and made the entire process very simple. She provided valuable consultation to help us stay on budget, while making sure we created and delivered an event that our guests loved. The staff was very responsive, friendly and professional.',
    author: 'JENNIFER F.',
    source: 'Google',
    color: '#bd574e',
  },
  {
    text: 'The staff, the venue, the whole process for planning and having my wedding and reception was absolutely amazing! Everything turned out beautifully, it was even better than I imagined.',
    author: 'HILLARY B.',
    source: 'Google',
    color: '#bd574e',
  },
  {
    text: 'The staff was incredible and the evening was simply magical! Our event coordinator made it exactly how we wanted, and we could not have had a more wonderful experience. I was so relaxed and confident in my coordinator and our choices. This was huge in that I planned everything from out of town.',
    author: 'BETH L.',
    source: 'Facebook',
    color: '#bd574e',
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <section className="fw-main-row-custom fw-section-no-padding fw-section-image auto fw-section-position-back tf-sh-3cf0cfa5b294c210b67083ab614adf5b lazy" style={{ backgroundColor: '#efefef', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'auto', backgroundImage: 'url(https://infinityhospitalitygroup.com/wp-content/uploads/2016/06/quotes.png)' }}>
      <div className="fw-container">
        <div className="fw-row">
          <div id="column-66a47994bc443" className="fw-col-sm-12 tf-sh-eccabab2de2817ed49a0528ffb2bd1f7 fw-animated-element" data-animation-type="fadeInUp" data-animation-delay="300">
            <div className="fw-wrap-col-inner clearfix">
              <div className="fw-col-inner">
                <div className="fw-divider-space fw-custom-space clearfix" style={{ height: '170px' }}></div>
                <div className="fw-heading fw-heading-center fw-heading-with-subtitle tf-sh-55247b0dcc85b17ec994e8c97c7c7294">
                  <div className="fw-special-subtitle">TESTIMONIALS FROM OUR</div>
                </div>
                <div className="fw-testimonials fw-testimonials-1 tf-sh-69fd8bd191c8e4442e72a4a84e9bfe7c hide-slider">
                  <h1 className="fw-testimonials-title">HAPPY CLIENTS</h1>
                  <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="fw-testimonials-item clearfix">
                        <div className="fw-testimonials-text">
                          <p>{testimonial.text}</p>
                        </div>
                        <div className="fw-testimonials-meta">
                          <div className="fw-testimonials-author">
                            <span className="author-name">{testimonial.author}</span>
                            <em className="author-job">review from <span style={{ color: testimonial.color }}>{testimonial.source}</span></em>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="fw-divider-space fw-custom-space clearfix" style={{ height: '140px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
