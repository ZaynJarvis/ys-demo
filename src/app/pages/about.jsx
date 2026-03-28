import config from '@/app/utils/config.json';

export default function AboutPage() {
    const icons = ['🏗️', '⚡', '🎯'];
    const iconBgs = ['from-amber-500 to-amber-600', 'from-cyan-500 to-cyan-600', 'from-orange-500 to-orange-600'];
    
    return (
        <div className="w-full bg-white">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">ABOUT US</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Creating exceptional commercial spaces that inspire success and transform business experiences
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {config.about.map((item, index) => (
                        <div 
                            key={item.title} 
                            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-2 ring-1 ring-gray-200 hover:ring-amber-500/30"
                        >
                            <div className={`w-20 h-20 bg-gradient-to-r ${iconBgs[index]} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                                <span className="text-3xl text-white">
                                    {icons[index]}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}