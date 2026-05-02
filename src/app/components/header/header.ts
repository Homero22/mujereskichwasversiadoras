import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-amazon font-display font-black text-lg md:text-xl tracking-tighter uppercase">Kichwa Festival</span>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-8 lg:gap-10">
          <a href="#hero" class="text-[10px] md:text-xs font-bold uppercase tracking-widest text-charcoal/60 hover:text-terracotta transition-colors">Inicio</a>
          <a href="#about" class="text-[10px] md:text-xs font-bold uppercase tracking-widest text-charcoal/60 hover:text-terracotta transition-colors">Nosotros</a>
          <a href="#news" class="text-[10px] md:text-xs font-bold uppercase tracking-widest text-charcoal/60 hover:text-terracotta transition-colors">Noticias</a>
          <a href="#contact" class="text-[10px] md:text-xs font-bold uppercase tracking-widest text-charcoal/60 hover:text-terracotta transition-colors">Contacto</a>
        </div>

        <!-- Mobile Menu Toggle -->
        <div class="lg:hidden flex items-center">
          <button (click)="isMenuOpen = !isMenuOpen" class="p-2 text-amazon">
            <svg *ngIf="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            <svg *ngIf="isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <div *ngIf="isMenuOpen" class="lg:hidden bg-white border-b border-gray-100 animate-fade-in">
        <div class="flex flex-col p-6 gap-6">
          <a href="#hero" (click)="isMenuOpen = false" class="text-xs font-bold uppercase tracking-widest text-charcoal/60">Inicio</a>
          <a href="#about" (click)="isMenuOpen = false" class="text-xs font-bold uppercase tracking-widest text-charcoal/60">Nosotros</a>
          <a href="#news" (click)="isMenuOpen = false" class="text-xs font-bold uppercase tracking-widest text-charcoal/60">Noticias</a>
          <a href="#contact" (click)="isMenuOpen = false" class="text-xs font-bold uppercase tracking-widest text-charcoal/60">Contacto</a>
        </div>
      </div>
    </nav>
  `
})
export class HeaderComponent {
  isMenuOpen = false;
}
