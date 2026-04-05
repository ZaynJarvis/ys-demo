'use client';

import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaExclamationTriangle } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<{[key: string]: boolean}>({});

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return undefined;
      
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        const phoneRegex = /^[\+]?[0-9\-\(\)\s]+$/;
        if (!phoneRegex.test(value)) return 'Please enter a valid phone number';
        if (value.replace(/[^0-9]/g, '').length < 8) return 'Phone number must be at least 8 digits';
        return undefined;
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return undefined;
      
      default:
        return undefined;
    }
  };

  const validateForm = (): ValidationErrors => {
    const newErrors: ValidationErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) {
        newErrors[key as keyof ValidationErrors] = error;
      }
    });
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation for touched fields
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true
    });

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const text = `Hi, I'd like to request a quote.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const waUrl = `https://wa.me/6589729228?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');

    setFormData({ name: '', email: '', phone: '', message: '' });
    setTouched({});
    setErrors({});
  };

  const inputClasses = (fieldName: keyof FormData) => {
    const baseClasses = "w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-200";
    const hasError = errors[fieldName];
    
    if (hasError) {
      return `${baseClasses} border-red-300 focus:ring-red-500 bg-red-50`;
    }
    
    if (touched[fieldName] && !hasError) {
      return `${baseClasses} border-green-300 focus:ring-green-500 bg-green-50`;
    }
    
    return `${baseClasses} border-gray-300 focus:ring-amber-500 hover:border-gray-400`;
  };

  return (
    <div className="w-full bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">CONTACT</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Ready to transform your commercial space? Get in touch with Singapore&apos;s premier construction team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            
            <div className="flex items-center space-x-4 p-6 bg-white rounded-xl ring-1 ring-gray-200 hover:ring-amber-500/30 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaEnvelope className="text-white w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Email</p>
                <p className="text-gray-900 text-lg font-semibold">sales@cubecon.sg</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-white rounded-xl ring-1 ring-gray-200 hover:ring-amber-500/30 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaPhone className="text-white w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Phone</p>
                <p className="text-gray-900 text-lg font-semibold">+65 8972 9228</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl ring-1 ring-gray-200 hover:ring-amber-500/30 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaMapMarkerAlt className="text-white w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Address</p>
                <p className="text-gray-900 text-lg font-semibold">
                  Blk 1093 Lower Delta Road,<br/>
                  #01-01,<br/>
                  Singapore 169204
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-2xl p-8 ring-1 ring-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClasses('name')}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                    <FaExclamationTriangle className="w-3 h-3" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClasses('email')}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                    <FaExclamationTriangle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClasses('phone')}
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                    <FaExclamationTriangle className="w-3 h-3" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project... *"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClasses('message')}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                    <FaExclamationTriangle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-500/50 shadow-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 hover:shadow-amber-500/25 active:scale-95"
              >
                Send via WhatsApp
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Required fields
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;