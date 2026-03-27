import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <div className="w-full bg-slate-800">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">CONTACT</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Ready to transform your commercial space? Get in touch with Singapore&apos;s premier construction team
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-slate-50 mb-6">Get in Touch</h3>
                        
                        <div className="flex items-center space-x-4 p-6 bg-slate-700 rounded-xl ring-1 ring-slate-600 hover:ring-amber-500/30 transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                                <FaEnvelope className="text-slate-900 w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm font-medium">Email</p>
                                <p className="text-slate-50 text-lg font-semibold">sales@cubecon.sg</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 p-6 bg-slate-700 rounded-xl ring-1 ring-slate-600 hover:ring-amber-500/30 transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                                <FaPhone className="text-slate-900 w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm font-medium">Phone</p>
                                <p className="text-slate-50 text-lg font-semibold">+65 8088 1055</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 p-6 bg-slate-700 rounded-xl ring-1 ring-slate-600 hover:ring-amber-500/30 transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                                <FaMapMarkerAlt className="text-slate-900 w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm font-medium">Address</p>
                                <p className="text-slate-50 text-lg font-semibold">
                                    52 Telok Blangah Road,<br/>
                                    #02-11,<br/>
                                    Singapore 098829
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-700 rounded-2xl p-8 ring-1 ring-slate-600">
                        <h3 className="text-2xl font-bold text-slate-50 mb-6">Request a Quote</h3>
                        <form className="space-y-6">
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-50 placeholder-slate-400"
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-50 placeholder-slate-400"
                                />
                            </div>
                            <div>
                                <input 
                                    type="tel" 
                                    placeholder="Your Phone" 
                                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-50 placeholder-slate-400"
                                />
                            </div>
                            <div>
                                <textarea 
                                    placeholder="Tell us about your project..." 
                                    rows={4}
                                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-50 placeholder-slate-400"
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 py-3 px-6 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
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