import { Clock, Users, DollarSign } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 bg-[#B5EAD7]/30 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-neutral-800 font-['Playfair_Display']">Cultural Events</h3>
                    <p className="mt-2 text-neutral-600 font-['Montserrat']">Dance, music, and theatrical performances</p>
                  </div>
                  <div className="h-48 bg-[#BCC1BA]/30 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-neutral-800 font-['Playfair_Display']">Technical Events</h3>
                    <p className="mt-2 text-neutral-600 font-['Montserrat']">Hackathons, robotics, and coding competitions</p>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-48 bg-[#AEC6CF]/30 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-neutral-800 font-['Playfair_Display']">Sports Events</h3>
                    <p className="mt-2 text-neutral-600 font-['Montserrat']">Tournaments and athletic competitions</p>
                  </div>
                  <div className="h-48 bg-[#B5EAD7]/30 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-neutral-800 font-['Playfair_Display']">Literary Events</h3>
                    <p className="mt-2 text-neutral-600 font-['Montserrat']">Debates, quizzes, and writing competitions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate__animated animate__fadeInRight">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6 font-['Playfair_Display']">
              About UniverCity Fest
            </h2>
            <p className="text-lg text-neutral-600 mb-6 font-['Montserrat']">
              UniverCity Fest is the annual cultural and technical festival that brings together talented students from across the nation. Experience three days of innovation, creativity, and celebration.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#B5EAD7]/30 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-neutral-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 font-['Playfair_Display']">3 Days of Events</h3>
                  <p className="text-neutral-600 font-['Montserrat']">Packed schedule of competitions and shows</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#BCC1BA]/30 flex items-center justify-center">
                  <Users className="h-6 w-6 text-neutral-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 font-['Playfair_Display']">50+ Participating Colleges</h3>
                  <p className="text-neutral-600 font-['Montserrat']">National level participation</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#AEC6CF]/30 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-neutral-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 font-['Playfair_Display']">₹5L+ Prize Pool</h3>
                  <p className="text-neutral-600 font-['Montserrat']">Exciting rewards for winners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
