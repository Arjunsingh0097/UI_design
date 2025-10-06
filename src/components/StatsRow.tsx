export default function StatsRow() {
  return (
    <section className=" py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Countries card */}
          <div className="relative overflow-hidden rounded-2xl bg-[#2a2a2c] border border-white/10" style={{height: '180px'}}>
            {/* Concentric pattern */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-25">
              <div className="absolute top-1/2 right-10 -translate-y-1/2">
                <div className="w-[190px] h-[190px] rounded-full border border-white/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full border border-white/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] rounded-full border border-white/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full border border-white/20" />
              </div>
            </div>
            {/* Content */}
            <div className="h-full flex items-start">
              <div className="p-6">
                <div className="text-white font-extrabold text-[44px] leading-none">85+</div>
                <div className="mt-4 text-white/80 text-sm tracking-wider">COUNTRIES</div>
              </div>
            </div>
            {/* Scattered flags */}
            <div className="absolute inset-0">
              <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="absolute top-4 right-24 w-8 h-8 rounded-full border border-white/40" />
              <img src="https://flagcdn.com/w40/rs.png" alt="Serbia" className="absolute top-10 right-8 w-8 h-8 rounded-full border border-white/40" />
              <img src="https://flagcdn.com/w40/de.png" alt="Germany" className="absolute bottom-6 right-28 w-8 h-8 rounded-full border border-white/40" />
              <img src="https://flagcdn.com/w40/us.png" alt="USA" className="absolute bottom-5 right-10 w-8 h-8 rounded-full border border-white/40" />
            </div>
          </div>

          {/* Team members card */}
          <div className="relative overflow-hidden rounded-2xl bg-[#2a2a2c] border border-white/10" style={{height: '180px'}}>
            {/* Concentric pattern */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-25">
              <div className="absolute top-1/2 right-10 -translate-y-1/2">
                <div className="w-[190px] h-[190px] rounded-full border border-white/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full border border-white/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] rounded-full border border-white/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full border border-white/20" />
              </div>
            </div>
            {/* Content */}
            <div className="h-full flex items-start">
              <div className="p-6">
                <div className="text-white font-extrabold text-[44px] leading-none">300+</div>
                <div className="mt-4 text-white/80 text-sm tracking-wider">TEAM MEMBERS</div>
              </div>
            </div>
            {/* Scattered avatars */}
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=60" alt="Member" className="absolute top-4 right-24 w-8 h-8 rounded-full border border-white/40 object-cover" />
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=60" alt="Member" className="absolute top-8 right-8 w-8 h-8 rounded-full border border-white/40 object-cover" />
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=80&q=60" alt="Member" className="absolute bottom-6 right-28 w-8 h-8 rounded-full border border-white/40 object-cover" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=60" alt="Member" className="absolute bottom-5 right-10 w-8 h-8 rounded-full border border-white/40 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
