import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-900 text-white p-8">
            <div className="bg-gray-800 rounded-xl shadow-lg p-10 max-w-md w-full flex flex-col gap-6">
                <h1 className="text-3xl font-bold mb-2 text-center">Contact Us</h1>
                <p className="text-gray-400 text-center mb-6">We&apos;d love to hear from you. Reach out to us using the information below.</p>
                <div className="flex items-center gap-4">
                    <FaEnvelope className="text-blue-400 w-6 h-6" />
                    <span className="text-gray-200 text-lg">sales@cubecon.sg</span>
                </div>
                <div className="flex items-center gap-4">
                    <FaPhone className="text-green-400 w-6 h-6" />
                    <span className="text-gray-200 text-lg">+65 8088 1055</span>
                </div>
                <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-yellow-400 w-6 h-6 mt-1" />
                    <span className="text-gray-200 text-lg">52 Telok Blangah Road,<br/>#02-11,<br/>Singapore 098829</span>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;