import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header id="hero" class="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-gray-50">
      <div class="absolute inset-0 z-0">
        <img 
          src="/portada.png" 
          alt="Hero Background" 
          loading="lazy"
          class="w-full h-full object-cover opacity-80"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>

      <div class="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center">
        <span class="text-terracotta font-sans font-bold tracking-[0.2em] uppercase text-xs mb-6 animate-fade-in-up">Segunda Edición 2026</span>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-display font-black text-amazon leading-[1.1] mb-8 tracking-tighter animate-fade-in-up" style="animation-delay: 0.2s;">
          FESTIVAL DE MUJERES ADULTAS MAYORES <br/> 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-terracotta to-sunset">KICHWAS VERSIADORAS</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl font-sans font-light leading-relaxed animate-fade-in-up" style="animation-delay: 0.4s;">
          Diálogo de Saberes, Lenguas y Tradición Oral del Cantón Tena
        </p>
        <div class="mt-12 flex gap-6 animate-fade-in-up" style="animation-delay: 0.6s;">
            <a href="#about" class="px-10 py-4 bg-terracotta text-white rounded-full font-bold hover:bg-sunset transition-all duration-300 shadow-xl shadow-terracotta/30">Conocer Más</a>
            <a href="#news" class="px-10 py-4 border-2 border-amazon/10 text-amazon rounded-full font-bold hover:bg-amazon/5 transition-all duration-300">Explorar Noticias</a>
        </div>
      </div>
    </header>
  `
})
export class HeroComponent {}
