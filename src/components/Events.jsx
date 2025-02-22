import { Music, Code, Trophy, ArrowRight } from 'lucide-react';

const Events = () => {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#B5EAD7] mb-6 font-['Playfair_Display']">Featured Events</h2>
          <p className="text-lg text-[#BCC1BA] max-w-2xl mx-auto font-['Montserrat']">Discover our exciting lineup of events and competitions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cultural Events Card */}
          <div className="bg-neutral-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp">
            <div className="h-48 bg-[#B5EAD7]/20 rounded-xl mb-6 flex items-center justify-center">
              <Music className="w-16 h-16 text-[#B5EAD7]" />
            </div>
            <h3 className="text-2xl font-bold text-[#B5EAD7] mb-3 font-['Playfair_Display']">Cultural Events</h3>
            <p className="text-[#BCC1BA] mb-4 font-['Montserrat']">Showcase your artistic talents through dance, music, and drama</p>
            <ul className="text-white space-y-2 mb-6 font-['Montserrat']">
              <li>• Dance Competition</li>
              <li>• Battle of Bands</li>
              <li>• Theater Performance</li>
            </ul>
            <button className="w-full bg-[#B5EAD7] text-neutral-900 py-3 rounded-xl hover:bg-[#BCC1BA] transition-colors duration-300 font-bold font-['Montserrat']">Register Now</button>
          </div>

          {/* Technical Events Card */}
          <div className="bg-neutral-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="h-48 bg-[#BCC1BA]/20 rounded-xl mb-6 flex items-center justify-center">
              <Code className="w-16 h-16 text-[#BCC1BA]" />
            </div>
            <h3 className="text-2xl font-bold text-[#BCC1BA] mb-3 font-['Playfair_Display']">Technical Events</h3>
            <p className="text-[#BCC1BA] mb-4 font-['Montserrat']">Test your technical skills in various competitions</p>
            <ul className="text-white space-y-2 mb-6 font-['Montserrat']">
              <li>• Hackathon</li>
              <li>• Robotics Challenge</li>
              <li>• Coding Competition</li>
            </ul>
            <button className="w-full bg-[#BCC1BA] text-neutral-900 py-3 rounded-xl hover:bg-[#B5EAD7] transition-colors duration-300 font-bold font-['Montserrat']">Register Now</button>
          </div>

          {/* Sports Events Card */}
          <div className="bg-neutral-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="h-48 bg-[#AEC6CF]/20 rounded-xl mb-6 flex items-center justify-center">
              <Trophy className="w-16 h-16 text-[#AEC6CF]" />
            </div>
            <h3 className="text-2xl font-bold text-[#AEC6CF] mb-3 font-['Playfair_Display']">Sports Events</h3>
            <p className="text-[#BCC1BA] mb-4 font-['Montserrat']">Compete in various sports tournaments</p>
            <ul className="text-white space-y-2 mb-6 font-['Montserrat']">
              <li>• Cricket Tournament</li>
              <li>• Basketball Championship</li>
              <li>• Football League</li>
            </ul>
            <button className="w-full bg-[#AEC6CF] text-neutral-900 py-3 rounded-xl hover:bg-[#B5EAD7] transition-colors duration-300 font-bold font-['Montserrat']">Register Now</button>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-transparent border-2 border-[#B5EAD7] text-[#B5EAD7] px-8 py-3 rounded-full hover:bg-[#B5EAD7] hover:text-neutral-900 transition-colors duration-300 font-['Montserrat']">
            View All Events
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
