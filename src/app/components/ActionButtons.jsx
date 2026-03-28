const ActionButtons = () => {
  const actions = [
    { label: 'DESIGN', icon: '🎨', color: 'from-amber-500 to-amber-600' },
    { label: 'BUILD', icon: '🏗️', color: 'from-cyan-500 to-cyan-600' },
    { label: 'DELIVER', icon: '✨', color: 'from-amber-600 to-orange-600' }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {actions.map((action, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-r ${action.color} hover:shadow-2xl hover:shadow-amber-500/25 flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-xl ring-4 ring-gray-200 group-hover:ring-amber-500/30`}>
                <span className="text-3xl md:text-4xl text-white">{action.icon}</span>
              </div>
              <span className="mt-6 text-base md:text-lg font-bold text-gray-800 group-hover:text-amber-600 transition-colors tracking-wider">
                {action.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionButtons;