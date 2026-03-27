const ActionButtons = () => {
  const actions = [
    { label: 'DESIGN', icon: '✏️' },
    { label: 'BUILD', icon: '🔨' },
    { label: 'LIVE', icon: '🏡' }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {actions.map((action, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-amber-600 hover:bg-amber-700 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg">
                <span className="text-2xl md:text-3xl text-white">{action.icon}</span>
              </div>
              <span className="mt-4 text-sm md:text-base font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">
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