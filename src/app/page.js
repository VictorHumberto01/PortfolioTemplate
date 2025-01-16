'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/ui/container";

const PortfolioPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCourseClick = () => {
    window.open('https://yourmarketplace.com', '_blank');
  };

  return (
    <div 
      className="min-h-screen bg-zinc-950 text-zinc-50 relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Primary mouse-following gradient */}
      <div 
        className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent transition-all duration-200 ease-out pointer-events-none"
        style={{
          backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
          backgroundSize: '100% 100%',
          opacity: isHovering ? 1 : 0.5,
        }}
      />
      
      {/* Secondary glow effect */}
      <div 
        className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900/40 to-zinc-950 transition-opacity duration-500"
        style={{
          backgroundPosition: `${100 - mousePosition.x}% ${100 - mousePosition.y}%`,
          backgroundSize: '120% 120%',
        }}
      />
      
      {/* Dynamic ambient orbs */}
      <div 
        className="fixed w-[800px] h-[800px] rounded-full blur-[120px] transition-all duration-300 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)`,
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          opacity: isHovering ? 1 : 0.5,
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(16 185 129 / 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(16 185 129 / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Main Content */}
      <div className="relative">
        <Container className="py-12 md:py-24">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 pb-12">
            {/* Left side - Text Content */}
            <div className="flex-1 space-y-6 text-left">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl mt-5 font-bold tracking-tight text-zinc-50 relative font-serif">
                  Dra. Amanda Melado
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 blur-sm -z-10"
                    style={{
                      transform: `translateX(${(mousePosition.x - 50) * 0.2}px)`,
                      transition: 'transform 0.3s ease-out'
                    }}
                  />
                </h1>
                <p className="text-lg text-zinc-400 max-w-[600px] font-light">
                  Médica Especialista em Engenharia Genética, dedicada à pesquisa e desenvolvimento de terapias genéticas inovadoras. 
                  Especializada em edição genômica CRISPR e terapias personalizadas.
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="flex gap-3 flex-wrap">
                {[
                  '10+ Anos de Experiência',
                  '50+ Pesquisas Publicadas',
                  'Consultoria Internacional'
                ].map((text) => (
                  <Badge 
                    key={text}
                    variant="outline" 
                    className="text-sm border-zinc-800/50 text-zinc-300 bg-zinc-900/50 backdrop-blur-sm relative overflow-hidden font-light hover:border-emerald-500/20 transition-colors duration-300"
                  >
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0"
                      style={{
                        transform: `translateX(${(mousePosition.x - 50) * 1}%)`,
                        transition: 'transform 0.3s ease-out'
                      }}
                    />
                    <span className="relative">{text}</span>
                  </Badge>
                ))}
              </div>
            </div>
            
            
            {/* Right side - Profile Image */}
            <div 
              className="w-64 h-64 md:w-80 md:h-80 relative group"
              style={{
                transform: `translate(${(mousePosition.x - 50) * 0.05}px, ${(mousePosition.y - 50) * 0.05}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              <img
                src="/images/profile.png"
                alt="Profile"
                className="w-full h-full object-cover mix-blend-luminosity z-10"
              />
            </div>
          </div>

          <Separator className="my-12 bg-zinc-800/30" />

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: 'Engenharia Genética',
                desc: 'Desenvolvimento de terapias genéticas personalizadas utilizando tecnologias de ponta em edição genômica.',
                image: '/images/genetic-lab.jpg'
              },
              {
                title: 'Pesquisa CRISPR',
                desc: 'Pesquisa avançada em técnicas CRISPR-Cas9 para tratamento de doenças genéticas raras.',
                image: '/images/crispr-research.jpg'
              },
              {
                title: 'Medicina Personalizada',
                desc: 'Abordagem individualizada para tratamentos genéticos, baseada no perfil genômico de cada paciente.',
                image: '/images/personalized-med.jpg'
              }
            ].map(({ title, desc, image }) => (
              <Card 
                key={title} 
                className="bg-zinc-900/20 border-zinc-800/30 backdrop-blur-sm relative group overflow-hidden"
              >
                <div 
                  className="absolute inset-0 opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative">
                  <h3 className="text-lg font-bold text-zinc-50">{title}</h3>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-sm text-zinc-400 font-light">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={handleCourseClick}
              className="px-8 bg-emerald-600 hover:bg-emerald-700 text-white relative overflow-hidden group font-light"
            >
              <span className="relative z-10">Agende uma Consulta</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioPage;