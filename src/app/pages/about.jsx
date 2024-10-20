// pages/about.js
export default function AboutPage() {
    return (
        <div className="w-full bg-gray-800 min-h-screen flex flex-col items-center justify-center p-12 text-left text-white">
            <h1 className="text-4xl font-bold mb-16">About Us</h1>
            <div className="flex flex-wrap justify-center gap-12 max-w-12xl">
                <div className="w-full md:w-1/4 p-4 bg-gray-700 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold mb-3">Team</h2>
                    <p className="text-lg">
                        Our team consists of dedicated professionals who are passionate about innovation and quality. We bring together diverse skills to create exceptional solutions.
                        Our team consists of dedicated professionals who are passionate about innovation and quality. We bring together diverse skills to create exceptional solutions.
                        Our team consists of dedicated professionals who are passionate about innovation and quality. We bring together diverse skills to create exceptional solutions.
                    </p>
                </div>
                <div className="w-full md:w-1/4 p-4 bg-gray-700 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold mb-3">Philosophy</h2>
                    <p className="text-lg">
                        We believe in sustainability, efficiency, and transparency. Our approach is to build products that not only meet but exceed our clients&apos; expectations.
                        We believe in sustainability, efficiency, and transparency. Our approach is to build products that not only meet but exceed our clients&apos; expectations.
                        We believe in sustainability, efficiency, and transparency. Our approach is to build products that not only meet but exceed our clients&apos; expectations.
                    </p>
                </div>
                <div className="w-full md:w-1/4 p-4 bg-gray-700 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold mb-3">Experience</h2>
                    <p className="text-lg">
                        With over a decade in the industry, we have a proven track record of success. Our experience spans various sectors, providing us with a unique perspective.
                        With over a decade in the industry, we have a proven track record of success. Our experience spans various sectors, providing us with a unique perspective.
                        With over a decade in the industry, we have a proven track record of success. Our experience spans various sectors, providing us with a unique perspective.
                    </p>
                </div>
            </div>
        </div>
    );
}