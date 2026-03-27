import config from '@/app/utils/config.json';

export default function AboutPage() {
    return (
        <div className="w-full bg-gray-50">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">ABOUT US</h2>
                    <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Creating exceptional spaces that inspire and transform the way people experience your business
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {config.about.map((item, index) => (
                        <div 
                            key={item.title} 
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl text-amber-600">
                                    {index === 0 ? '🏆' : index === 1 ? '✨' : '🚀'}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}