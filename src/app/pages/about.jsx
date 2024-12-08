import config from '@/app/utils/config.json';

export default function AboutPage() {
    return (
        <div className="w-full bg-gray-800 min-h-screen flex flex-col items-center justify-center p-12 text-left text-white">
            <h1 className="text-4xl font-bold mb-16">About Us</h1>
            <div className="flex flex-wrap justify-center gap-12 max-w-12xl">
                {
                    config.about.map(c => <div key={c.title} className="w-full md:w-1/4 p-4 bg-gray-700 shadow-lg rounded-lg">
                        <h2 className="text-3xl font-semibold mb-3">{c.title}</h2>
                        <p className="text-lg">
                            {c.content}
                        </p>
                    </div>)
                }
            </div>
        </div>
    );
}