import React, { useState } from 'react';
import { Music, Code, Trophy,Aperture, CreditCard, Book, Mic, Camera, Brush, ChefHat, Gamepad, Brain, Target, Users, Rocket, Zap, Palette, Theater } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { colors } = useTheme();

  const events = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Solo Singing",
      description: "A cappella, backing track (karaoke),or live instrument.Karaoke tracks must be submitted 10 days prior (via email or USB).No auto-tune or voice modulation effects allowed.",
      category: "Cultural",
      color: "rgba(203, 181, 234, 0.2)",
      textColor: "#CBB5EA"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Card Making",
      description: "🎨✨ Craft, Create, Compete—Showcase your artistry at Tarangini 2K25 Card Making Contest! 🖌️🎭",
      category: "Technical",
      color: "rgba(188, 193, 186, 0.2)",
      textColor: "#BCC1BA"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Talent Show",
      description: "🎭🎤 Showcase your talent, captivate the crowd—Tarangini 2K25 Talent Show awaits your magic! ✨🔥",
      category: "Sports",
      color: "rgba(174, 198, 207, 0.2)",
      textColor: "#AEC6CF"
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Maze of Deception",
      description: "Think. Solve. Conquer. 🌀 Maze of Deception – Only the smartest survive!",
      category: "Literary",
      color: "rgba(203, 181, 234, 0.2)",
      textColor: "#CBB5EA"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Anchoring",
      description: "🎤 Own the stage with confidence and charisma—Tarangini 2K25 Anchoring Contest awaits you! ✨",
      category: "Cultural",
      color: "rgba(203, 181, 234, 0.2)",
      textColor: "#CBB5EA"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography contest",
      description: "📸 Capture the moment, unleash creativity—Tarangini 2K25 Photography Contest awaits your vision! 🌟",
      category: "Arts",
      color: "rgba(203, 181, 234, 0.2)",
      textColor: "#CBB5EA"
    },
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Art & Draw",
      description: "🎭🎨 Act, Draw, and Express—Tarangini 2K25 challenges your creativity like never before! ✨",
      category: "Arts",
      color: "rgba(188, 193, 186, 0.2)",
      textColor: "#BCC1BA"
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Mystry Box Cooking Challenge",
      description: "🍽️ Unbox, Cook, Conquer—Tarangini 2K25 Mystery Box Challenge tests your culinary creativity! 🔥👩‍🍳",
      category: "Cultural",
      color: "rgba(174, 198, 207, 0.2)",
      textColor: "#AEC6CF"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Duet Singing",
      description: "🎶🎤 Two voices, one harmony—Sing your heart out at Tarangini 2K25 Duet Singing Competition! 🎼✨",
      category: "Technical",
      color: "rgba(203, 181, 234, 0.2)",
      textColor: "#CBB5EA"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Memory Vault",
      description: "🧠🔍 *Test your memory at Tarangini 2K25 Memory Vault—watch, recall, and conquer the challenge!* 🎥✍️",
      category: "Literary",
      color: "rgba(203, 181, 234, 0.2)",
      textColor: "#CBB5EA"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Treasure Hunt",
      description: "Decode. Discover. Dominate. 🏆 The ultimate Treasure Hunt awaits!",
      category: "Adventure",
      color: "rgba(188, 193, 186, 0.2)",
      textColor: "#BCC1BA"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Dance",
      description: "Groove. Shine. Conquer. 💃🕺 The stage is yours at Tarangini 2K25!",
      category: "Cultural",
      color: "rgba(174, 198, 207, 0.2)",
      textColor: "#AEC6CF"
    },
    {
      icon: <Aperture className="w-8 h-8" />,
      title: "Rangoli Making",
      description: "🎨✨ *Unleash your creativity at Tarangini 2K25 Rangoli Competition—design, color, and impress with your artistic flair!* 🏵️🌸",
      category: "Technical",
      color: "rgba(203, 181, 234, 0.2)",
      textColor: "#CBB5EA"
    },
    {
      icon: <Theater className="w-8 h-8" />,
      title: "Solo Dance",
      description: "💃🔥 *Dance your heart out at Tarangini 2K25 Solo Dance Competition—grace, energy, and creativity take center stage!* 🎶✨",
      category: "Technical",
      color: "rgba(203, 181, 234, 0.2)",
      textColor: "#CBB5EA"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Face Painting",
      description: "🎭✨ *Unleash your creativity at Tarangini 2K25 Face Painting Competition—where art meets expression!* 🎨🎶",
      category: "Arts",
      color: "rgba(188, 193, 186, 0.2)",
      textColor: "#BCC1BA"
    },
    {
      icon: <Theater className="w-8 h-8" />,
      title: "Fashion Show",
      description: "Strut with Pride. Flaunt the Culture. 🌍✨ Tarangini 2K25 Fashion Show – Where Tradition Meets the Ramp",
      category: "Cultural",
      color: "rgba(174, 198, 207, 0.2)",
      textColor: "#AEC6CF"
    }
  ];

  const categories = ['all', ...new Set(events.map(event => event.category))].sort();
  
  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className={`min-h-screen ${colors.background} pt-24 pb-20`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-[#CBB5EA] mb-6 font-['Playfair_Display']">
            Festival Events
          </h1>
          <p className="text-xl text-[#BCC1BA] max-w-3xl mx-auto font-['Montserrat']">
            Discover our diverse range of events spanning cultural, technical, sports, and literary domains
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-['Montserrat'] transition-all ${
                selectedCategory === category
                  ? 'bg-[#CBB5EA] text-neutral-900'
                  : 'bg-neutral-800 text-[#CBB5EA] hover:bg-neutral-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEvents.map((event, index) => (
            <div
              key={`${event.title}-${index}`}
              className="group relative backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: event.color }}
            >
              <div className="p-6">
                <div className="mb-4" style={{ color: event.textColor }}>
                  {event.icon}
                </div>
                <h3 
                  className="text-xl font-bold mb-2 font-['Playfair_Display']" 
                  style={{ color: event.textColor }}
                >
                  {event.title}
                </h3>
                <p className="text-white/80 mb-4 font-['Montserrat']">
                  {event.description}
                </p>
                <span 
                  className="inline-block px-3 py-1 rounded-full text-sm font-['Montserrat']"
                  style={{
                    backgroundColor: `${event.textColor}20`,
                    color: event.textColor
                  }}
                >
                  {event.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;