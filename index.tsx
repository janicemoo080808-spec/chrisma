import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Sparkles, Gift, Snowflake, Zap, TrendingUp, Copy, Menu, X, Twitter, Send } from 'lucide-react';

// --- Components ---

const SnowOverlay = () => {
  // Create a fixed number of snowflakes with random properties
  const snowflakes = Array.from({ length: 50 }).map((_, i) => {
    const style = {
      left: `${Math.random() * 100}vw`,
      animationName: 'fall, sway',
      animationDuration: `${Math.random() * 5 + 5}s, ${Math.random() * 3 + 2}s`,
      animationTimingFunction: 'linear, ease-in-out',
      animationIterationCount: 'infinite, infinite',
      animationDelay: `${Math.random() * 5}s, ${Math.random() * 2}s`,
      opacity: Math.random() * 0.5 + 0.3,
      fontSize: `${Math.random() * 10 + 10}px`,
    } as React.CSSProperties;

    return (
      <div key={i} className="snowflake" style={style}>
        ❄
      </div>
    );
  });

  return <div className="fixed inset-0 pointer-events-none z-0">{snowflakes}</div>;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-christmas-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-christmas-red rounded-full flex items-center justify-center text-2xl animate-bounce-slow">
              🎅
            </div>
            <span className="font-christmas text-2xl text-christmas-cream font-bold tracking-wider">
              JingleCoin
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-christmas-cream hover:text-christmas-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#tokenomics" className="text-christmas-cream hover:text-christmas-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">Tokenomics</a>
              <a href="#roadmap" className="text-christmas-cream hover:text-christmas-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">Santa's Map</a>
              <button className="bg-christmas-red hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-500/30">
                Buy $ELF
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-christmas-cream p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-christmas-dark border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#tokenomics" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Tokenomics</a>
            <a href="#roadmap" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Roadmap</a>
            <button className="w-full mt-4 bg-christmas-red text-white px-6 py-3 rounded-lg font-bold">
              Buy $ELF
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0xH0H0H0...XMAS1225";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block animate-bounce-slow mb-6">
          <span className="bg-christmas-green/20 text-christmas-green border border-christmas-green/50 rounded-full px-4 py-1 text-sm font-bold uppercase tracking-wider">
            🎄 Official Currency of the North Pole 🎄
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-christmas font-bold text-transparent bg-clip-text bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-green mb-6 drop-shadow-sm">
          JingleCoin
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-gray-300 mb-10">
          The only memecoin powered by <span className="text-christmas-gold font-bold">Holiday Spirit</span> and <span className="text-christmas-red font-bold">Reindeer Proof-of-Work</span>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="bg-christmas-gold hover:bg-yellow-400 text-christmas-dark text-lg px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-2">
            <Gift size={24} />
            Claim Airdrop
          </button>
          <button className="bg-christmas-green hover:bg-green-700 text-white text-lg px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-green-500/20 flex items-center justify-center gap-2">
            <TrendingUp size={24} />
            View Chart
          </button>
        </div>

        <div className="max-w-md mx-auto bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 flex items-center justify-between gap-4 group hover:border-christmas-gold/50 transition-colors cursor-pointer" onClick={copyToClipboard}>
          <div className="text-left overflow-hidden">
            <div className="text-xs text-gray-400 uppercase tracking-widest">Contract Address</div>
            <div className="text-christmas-cream font-mono truncate group-hover:text-christmas-gold transition-colors">{contractAddress}</div>
          </div>
          <div className="text-gray-400 p-2 hover:bg-white/10 rounded-lg transition-colors">
            {copied ? <span className="text-green-400 text-xs font-bold">COPIED!</span> : <Copy size={20} />}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) => (
  <div className={`bg-christmas-dark/50 p-8 rounded-2xl border border-white/5 hover:border-${color} transition-all duration-300 hover:-translate-y-2`}>
    <div className={`w-14 h-14 rounded-xl bg-${color}/20 flex items-center justify-center mb-6 text-${color}`}>
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-christmas font-bold text-christmas-cream mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <div id="about" className="py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-christmas font-bold text-christmas-cream mb-4">
            Why Choose $ELF?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Unlike coal in your stocking, JingleCoin is designed to go to the moon (stopping at the North Pole first).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Zap}
            title="Hyper-Deflationary"
            desc="Every time a bell rings, 1% of the transaction is burned. The supply melts faster than a snowman in July."
            color="christmas-red"
          />
          <FeatureCard 
            icon={Gift}
            title="Naughty & Nice Rewards"
            desc="Holders on the Nice List receive 5% redistribution. Sellers go straight to the Naughty List (higher tax)."
            color="christmas-gold"
          />
          <FeatureCard 
            icon={Snowflake}
            title="Cold Storage"
            desc="Liquidity is frozen for 100 years in the Arctic Circle. Rug-pull proof, guaranteed by Krampus."
            color="christmas-green"
          />
        </div>
      </div>
    </div>
  );
};

const Tokenomics = () => {
  return (
    <div id="tokenomics" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-christmas-green/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-christmas font-bold text-christmas-cream mb-8">
              Elf-nomics
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="flex justify-between mb-2">
                  <span className="text-christmas-cream font-bold">Total Supply</span>
                  <span className="text-christmas-gold font-mono">1,000,000,000 $ELF</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-christmas-gold h-2 rounded-full w-full"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-christmas-red" />
                  <span className="text-gray-300 flex-1">Presale (The Sleigh Launch)</span>
                  <span className="text-christmas-cream font-bold">40%</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-christmas-green" />
                  <span className="text-gray-300 flex-1">Liquidity Pool (Frozen)</span>
                  <span className="text-christmas-cream font-bold">30%</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-christmas-gold" />
                  <span className="text-gray-300 flex-1">Marketing (Reindeer Food)</span>
                  <span className="text-christmas-cream font-bold">20%</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-blue-400" />
                  <span className="text-gray-300 flex-1">Charity (Toys for Tots)</span>
                  <span className="text-christmas-cream font-bold">10%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-christmas-gold/20 blur-3xl rounded-full animate-pulse" />
            <img 
              src="https://www.svgrepo.com/show/427722/christmas-claus-santa.svg" 
              alt="Mascot" 
              className="relative w-full max-w-md mx-auto animate-wiggle drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Roadmap = () => {
  const phases = [
    {
      title: "Phase 1: The Workshop",
      items: ["Website Launch", "Contract Audit by Elves", "Community Building", "Hot Cocoa Airdrop"],
      date: "December 1st"
    },
    {
      title: "Phase 2: The Sleigh Ride",
      items: ["CEX Listings", "CoinGecko & CMC", "10,000 Holders", "Santa Influencer Partnerships"],
      date: "December 15th"
    },
    {
      title: "Phase 3: The Chimney Drop",
      items: ["NFT Collection: Bored Reindeers", "P2E Game: Delivery Dash", "Global Billboard Campaign", "Charity Donation"],
      date: "Christmas Eve"
    }
  ];

  return (
    <div id="roadmap" className="py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-christmas font-bold text-center text-christmas-cream mb-16">
          Road to Christmas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, i) => (
            <div key={i} className="relative">
              <div className="bg-christmas-dark border border-white/10 p-8 rounded-2xl h-full relative z-10 hover:border-christmas-red transition-colors">
                <div className="text-christmas-gold font-bold text-sm uppercase tracking-wider mb-2">{phase.date}</div>
                <h3 className="text-2xl font-christmas font-bold text-white mb-6">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-400">
                      <span className="text-christmas-green mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Decorative connector line */}
              {i < phases.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-white/10 z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-christmas-red rounded-full flex items-center justify-center text-xl">
                🎅
              </div>
              <span className="font-christmas text-2xl text-christmas-cream font-bold">
                JingleCoin
              </span>
            </div>
            <p className="text-gray-500 max-w-sm">
              The first decentralized cryptocurrency designed to spread joy, holiday spirit, and financial freedom. Don't be a Grinch, join the movement.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-christmas-gold transition-colors">Buy $ELF</a></li>
              <li><a href="#" className="hover:text-christmas-gold transition-colors">Chart</a></li>
              <li><a href="#" className="hover:text-christmas-gold transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-christmas-gold transition-colors">Audit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Socials</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:bg-christmas-red hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all">
                <Send size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
          <p>© 2024 JingleCoin. All rights reserved. Not financial advice, just holiday spirit.</p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen text-slate-200 bg-christmas-dark font-body selection:bg-christmas-red selection:text-white">
      <SnowOverlay />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Tokenomics />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
