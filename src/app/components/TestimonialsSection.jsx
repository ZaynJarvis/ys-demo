'use client';
import { useState } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      company: "The Coffee Corner",
      role: "Owner",
      quote: "Cube Construction transformed our small café into a stunning space that doubled our customer traffic. Their attention to detail and understanding of F&B requirements is unmatched.",
      rating: 5,
      image: "SC",
      projectType: "Café Renovation"
    },
    {
      id: 2,
      name: "Marcus Lim",
      company: "Dragon Palace Restaurant",
      role: "General Manager",
      quote: "From concept to completion, the team delivered beyond expectations. Our restaurant now has a modern yet authentic feel that our customers absolutely love.",
      rating: 5,
      image: "ML",
      projectType: "Restaurant Design"
    },
    {
      id: 3,
      name: "Jennifer Tan",
      company: "Sunrise Bistro",
      role: "Co-owner",
      quote: "The project was completed on time and within budget. The quality of workmanship is exceptional, and our new interior has increased our revenue by 35%.",
      rating: 5,
      image: "JT",
      projectType: "Bistro Renovation"
    },
    {
      id: 4,
      name: "David Wong",
      company: "Fusion Bar & Grill",
      role: "Owner",
      quote: "Cube Construction's innovative design solutions maximized our space efficiency while creating an atmosphere that keeps customers coming back. Highly recommended!",
      rating: 5,
      image: "DW",
      projectType: "Bar Design"
    },
    {
      id: 5,
      name: "Emily Rodriguez",
      company: "Green Garden Café",
      role: "Manager",
      quote: "Their sustainable design approach aligned perfectly with our eco-friendly brand. The result is a beautiful, functional space that reflects our values.",
      rating: 5,
      image: "ER",
      projectType: "Eco Café"
    },
    {
      id: 6,
      name: "Alex Kumar",
      company: "Spice Route Kitchen",
      role: "Head Chef & Owner",
      quote: "The kitchen design is both beautiful and highly functional. They understood our workflow needs and created a space that enhances our cooking operations.",
      rating: 5,
      image: "AK",
      projectType: "Kitchen Design"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-amber-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-amber-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">CLIENT TESTIMONIALS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hear what our satisfied clients say about their transformation journey with us
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 ring-1 ring-gray-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">
                    {testimonials[currentTestimonial].image}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                
                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic leading-relaxed">
                  &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                </blockquote>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-amber-600 font-medium">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].company}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 text-sm font-medium rounded-full">
                    {testimonials[currentTestimonial].projectType}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8 pt-8 border-t border-gray-200">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Grid of Additional Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1 ring-1 ring-gray-200 hover:ring-amber-500/30 cursor-pointer ${
                index === currentTestimonial ? 'ring-2 ring-amber-500 shadow-amber-500/20' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-sm font-bold text-white">
                    {testimonial.image}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-amber-600 text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-gray-700 text-sm leading-relaxed italic">
                &ldquo;{testimonial.quote.length > 120 ? testimonial.quote.substring(0, 120) + '...' : testimonial.quote}&rdquo;
              </blockquote>
              
              <span className="inline-block mt-3 px-2 py-1 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 text-xs font-medium rounded-full">
                {testimonial.projectType}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">50+</div>
            <div className="text-gray-700 font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">5★</div>
            <div className="text-gray-700 font-medium">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">100%</div>
            <div className="text-gray-700 font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">24/7</div>
            <div className="text-gray-700 font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;