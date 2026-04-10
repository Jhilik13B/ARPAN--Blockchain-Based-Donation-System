import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 hero-gradient -z-10 opacity-30"></div>
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] -z-10"></div>
                
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-inter tracking-tight bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                        About ARPAN
                    </h1>
                    <p className="section-subtitle max-w-2xl mx-auto font-medium text-lg md:text-xl">
                        A Transparent Blockchain-Based Donation Platform
                    </p>
                </div>
            </section>

            {/* What is ARPAN? Section */}
            <section className="py-20 px-6 relative">
                <div className="max-w-4xl mx-auto">
                    <div className="card-hover p-10 md:p-16 text-center relative overflow-hidden group">
                        {/* Decorative Network Icon Background */}
                        <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity">
                            <svg className="w-64 h-64 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                            </svg>
                        </div>
                        
                        <div className="relative z-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-primary/20 border border-brand-primary/30 mb-8 transform group-hover:rotate-12 transition-transform">
                                <svg className="w-8 h-8 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                </svg>
                            </div>
                            
                            <h2 className="section-title mb-6 !text-3xl md:!text-4xl">What is ARPAN?</h2>
                            <p className="text-lg md:text-xl text-brand-muted leading-relaxed font-inter">
                                ARPAN is a <span className="text-brand-secondary font-bold">decentralized donation platform</span> that connects donors with verified NGOs using <span className="text-brand-accent font-bold">blockchain</span> technology. It ensures that every transaction is <span className="text-brand-success font-bold">secure</span>, <span className="text-brand-success font-bold">transparent</span>, and directly traceable without any middleman.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem & Solution Section */}
            <section className="py-20 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Problem We Solve</h2>
                        <p className="section-subtitle">Bridging the trust gap in charitable giving.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Problems Card */}
                        <div className="bg-rose-500/5 backdrop-blur-xl border border-rose-500/20 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group hover:bg-rose-500/10 transition-colors duration-500">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-rose-500/10 rounded-full blur-[60px] -z-10 group-hover:scale-150 transition-transform duration-700"></div>
                            
                            <h3 className="text-2xl font-bold text-rose-500 mb-8 flex items-center gap-3">
                                <span>⚠️</span> The Problem
                            </h3>
                            
                            <ul className="space-y-4">
                                {[
                                    { icon: "📉", text: "Lack of trust in NGOs" },
                                    { icon: "🕵️‍♂️", text: "No transparency in donations" },
                                    { icon: "💸", text: "Misuse of funds" },
                                    { icon: "📍", text: "No proper tracking" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-rose-500/30 transition-all hover:translate-x-2 duration-300">
                                        <span className="text-2xl mt-1">{item.icon}</span>
                                        <p className="text-lg text-gray-300 font-medium">{item.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Solution Card */}
                        <div className="bg-brand-primary/5 backdrop-blur-xl border border-brand-primary/20 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group flex flex-col justify-center hover:bg-brand-primary/10 transition-colors duration-500">
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-primary/20 rounded-full blur-[80px] -z-10 group-hover:scale-150 transition-transform duration-700"></div>
                            
                            <div className="w-16 h-16 bg-brand-primary/20 rounded-2xl flex items-center justify-center mb-8 border border-brand-primary/30 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-4xl">🛡️</span>
                            </div>
                            
                            <h3 className="text-3xl font-bold text-brand-secondary mb-6">Our Solution</h3>
                            <p className="text-xl text-gray-200 leading-relaxed font-inter mb-8">
                                Traditional donation systems lack transparency and trust. <span className="text-brand-accent font-bold">ARPAN</span> solves this by recording every transaction on the <span className="text-white font-bold underline decoration-brand-secondary underline-offset-4">blockchain</span>, making all donations publicly verifiable.
                            </p>
                            
                            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                                <div className="flex -space-x-2">
                                    {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-dark bg-gray-500"></div>)}
                                </div>
                                <p className="text-sm text-brand-secondary font-semibold">Join thousands of trusted donors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security & Trust Section */}
            <section className="py-20 px-6 relative overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-success/20 to-brand-primary/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        
                        <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 p-10 md:p-16 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-12 hover:border-brand-success/30 transition-colors duration-500">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-brand-success/10 rounded-full flex items-center justify-center border border-brand-success/20 relative">
                                <span className="text-5xl md:text-6xl animate-pulse">🛡️</span>
                                <div className="absolute inset-0 bg-brand-success/10 rounded-full blur-xl"></div>
                            </div>
                            
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold text-white mb-6">Security & Trust</h2>
                                <ul className="space-y-4">
                                    {[
                                        "Funds are managed by smart contracts, not humans",
                                        "Reentrancy protection ensures safe transactions",
                                        "Immutable blockchain records prevent fraud"
                                    ].map((point, i) => (
                                        <li key={i} className="flex items-start gap-4 text-gray-300 group/item">
                                            <svg className="w-6 h-6 text-brand-success mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                            </svg>
                                            <span className="text-lg font-medium">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* Mission */}
                        <div className="card-hover p-8 group">
                            <div className="w-14 h-14 bg-brand-primary/20 rounded-2xl flex items-center justify-center mb-6 border border-brand-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all">
                                <span className="text-3xl">🎯</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                            <p className="text-brand-muted leading-relaxed">
                                To revolutionize the donation ecosystem by bridging the gap between donors and NGOs through blockchain technology. We aim to ensure that every penny donated is tracked and utilized for its intended purpose.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="card-hover p-8 group">
                            <div className="w-14 h-14 bg-brand-primary/20 rounded-2xl flex items-center justify-center mb-6 border border-brand-primary/30 group-hover:scale-110 group-hover:-rotate-6 transition-all">
                                <span className="text-3xl">👁️</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                            <p className="text-brand-muted leading-relaxed">
                                A world where charitable giving is 100% transparent, where donors can see the real-time impact of their contributions, and where trust is built into the very code of the platform.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 px-6">
                        <h2 className="section-title">Key Features</h2>
                        <p className="section-subtitle max-w-2xl mx-auto">
                            Innovative tools designed to make decentralized giving effortless and trustworthy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {[
                            { title: "Wallet Integration", desc: "Seamlessly connect with MetaMask to manage your donations in a single click.", icon: "🦊" },
                            { title: "Smart Contracts", desc: "Powered by robust Solidity contracts that automate trust and security.", icon: "📜" },
                            { title: "Transparent Transactions", desc: "Every transaction is public on the ledger for total accountability.", icon: "🔎" },
                            { title: "Secure Payments", desc: "Cryptographic security ensures your funds are never compromised.", icon: "🛡️" },
                            { title: "Direct Messaging", desc: "Communicate directly with NGOs through our on-chain Inbox feature.", icon: "💬" },
                            { title: "Real-time Tracking", desc: "Monitor the impact of your contributions with live verification.", icon: "📊" }
                        ].map((feature, i) => (
                            <div key={i} className="card-hover p-8 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/10 rounded-full blur-[40px] -z-10 group-hover:bg-brand-secondary/20 transition-all duration-500"></div>
                                
                                <div className="w-14 h-14 bg-brand-primary/20 rounded-2xl flex items-center justify-center mb-6 border border-brand-primary/30 group-hover:scale-110 group-hover:bg-brand-primary/40 transition-all duration-300">
                                    <span className="text-3xl">{feature.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-secondary transition-colors">{feature.title}</h3>
                                <p className="text-brand-muted leading-relaxed text-sm">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Highlighted Feature Banner */}
                    <div className="mb-24">
                        <div className="max-w-5xl mx-auto p-[2px] rounded-[2.5rem] bg-gradient-to-r from-brand-secondary/50 via-brand-primary/50 to-brand-accent/50 shadow-[0_0_50px_-12px_rgba(42,77,62,0.5)] transform hover:scale-[1.01] transition-transform duration-500">
                            <div className="bg-[#0B0F19] rounded-[2.45rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-primary/20 rounded-3xl flex items-center justify-center border border-brand-primary/30 flex-shrink-0 animate-pulse">
                                    <span className="text-4xl">💬</span>
                                </div>
                                <div className="text-center md:text-left relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-3">Seamless Communication</h3>
                                    <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
                                        ARPAN also enables <span className="text-brand-secondary font-bold">direct communication</span> between donors and NGOs through a wallet-linked messaging system, increasing trust and engagement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack Section */}
                    <div className="px-6 text-center">
                        <h2 className="text-3xl font-bold text-white mb-12 uppercase tracking-widest opacity-80">Our Tech Stack</h2>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                            {[
                                { name: "HTML/CSS/JS", icon: "🌐" },
                                { name: "Ethereum", icon: "⧫" },
                                { name: "Solidity", icon: "💠" },
                                { name: "MetaMask", icon: "🦊" },
                                { name: "Hardhat", icon: "👷" }
                            ].map((tech, i) => (
                                <div key={i} className="flex flex-col items-center gap-3 group">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl md:text-4xl group-hover:bg-brand-primary/20 group-hover:border-brand-primary group-hover:scale-110 transition-all duration-300 shadow-lg cursor-default">
                                        {tech.icon}
                                    </div>
                                    <span className="text-[10px] md:text-xs font-bold text-brand-muted uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="py-20 px-6 relative bg-white/[0.01]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="section-title">How It Works</h2>
                        <p className="section-subtitle max-w-2xl mx-auto text-lg">
                            Users connect their crypto wallet, choose an NGO, and donate securely. Smart contracts automatically manage the transaction and ensure funds reach the intended recipient.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                            {[
                                { step: "01", title: "Connect Wallet", desc: "Link your MetaMask or preferred Web3 wallet.", icon: "🦊" },
                                { step: "02", title: "Browse NGOs", desc: "Discover verified organizations and causes.", icon: "🔎" },
                                { step: "03", title: "Donate ETH", desc: "Enter amount and confirm the transaction.", icon: "💎" },
                                { step: "04", title: "Blockchain Record", desc: "Data is permanently stored on the ledger.", icon: "🔗" },
                                { step: "05", title: "NGO Receives", desc: "Funds are released directly to the NGO.", icon: "🙌" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center group">
                                    <div className="w-20 h-20 rounded-2xl bg-[#0B0F19] border border-white/10 flex items-center justify-center text-3xl mb-6 group-hover:border-brand-secondary group-hover:scale-110 transition-all duration-300 relative hero-gradient shadow-2xl">
                                        {item.icon}
                                        <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-primary text-xs flex items-center justify-center font-bold text-white border border-white/20">
                                            {item.step}
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2 text-center group-hover:text-brand-secondary transition-colors">{item.title}</h4>
                                    <p className="text-sm text-brand-muted text-center leading-relaxed px-4 opacity-80">
                                        {item.desc}
                                    </p>
                                    
                                    {/* Arrow for Mobile/Tablet (Except last) */}
                                    {i < 4 && (
                                        <div className="lg:hidden mt-8 text-brand-primary animate-bounce">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Future Scope Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Future Scope</h2>
                        <p className="section-subtitle max-w-2xl mx-auto">
                            We are constantly evolving. Here's what's on the horizon for ARPAN.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Multi-Chain", desc: "Expanding support to Polygon, Arbitrum, and more.", icon: "🌐" },
                            { title: "Verification 2.0", desc: "Advanced vetting system for global NGOs.", icon: "⚡" },
                            { title: "Mobile App", desc: "Native iOS and Android apps for on-the-go giving.", icon: "📱" },
                            { title: "AI Detection", desc: "AI-powered monitoring to flag suspicious activity.", icon: "🤖" }
                        ].map((item, i) => (
                            <div key={i} className="card-hover p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-brand-primary/40 transition-all group flex flex-col items-center text-center">
                                <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{item.icon}</div>
                                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-sm text-brand-muted leading-relaxed opacity-80">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-brand-primary/20 via-brand-dark to-brand-primary/10 border border-brand-primary/30 text-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-[100px] -z-10 group-hover:scale-110 transition-transform duration-1000"></div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to make a difference?</h2>
                        <p className="text-xl text-brand-muted mb-10 max-w-2xl mx-auto">
                            Join ARPAN today and be part of the most transparent donation network in the world.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <Link to="/" className="btn-primary min-w-[200px]">Browse NGOs</Link>
                            <Link to="/create" className="btn-secondary !text-white !border-white/20 hover:!bg-white/10 min-w-[200px]">Register NGO</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
