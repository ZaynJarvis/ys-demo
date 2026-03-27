import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <div className="w-full bg-white">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">CONTACT</h2>
                    <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to transform your space? Get in touch with us today for a consultation
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                        
                        <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                <FaEnvelope className="text-amber-600 w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Email</p>
                                <p className="text-gray-900 text-lg font-medium">sales@cubecon.sg</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                <FaPhone className="text-amber-600 w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Phone</p>
                                <p className="text-gray-900 text-lg font-medium">+65 8088 1055</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                <FaMapMarkerAlt className="text-amber-600 w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Address</p>
                                <p className="text-gray-900 text-lg font-medium">
                                    52 Telok Blangah Road,<br/>
                                    #02-11,<br/>
                                    Singapore 098829
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
                        <form className="space-y-6">
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <input 
                                    type="tel" 
                                    placeholder="Your Phone" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <textarea 
                                    placeholder="Tell us about your project..." 
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;