import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer id="contact" class="relative bg-charcoal pt-20 md:pt-32 pb-12 overflow-hidden text-white/60">
      <div class="absolute inset-0 bg-gradient-to-t from-black to-amazon/20 opacity-50"></div>
      
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 md:gap-16 pb-16 md:pb-20 border-b border-white/10">
          
          <!-- Column 1: Branding -->
          <div class="md:col-span-4 space-y-6 md:space-y-8">
            <div class="flex items-center gap-4 md:gap-6">
               <!-- <span class="text-2xl md:text-3xl font-display font-black text-white tracking-tighter uppercase">Kichwa <br/> Festival</span> -->
               <img src="/Recurso3.svg" alt="Logo" class="h-12">
               <div class="h-10 md:h-12 w-px bg-white/20"></div>
               <span class="text-[10px] font-bold tracking-widest text-white/40 uppercase">IFAIC <br/> 2026</span>
            </div>
            <p class="text-xs md:text-sm font-light leading-relaxed max-w-xs">
              Revitalizando la oralidad, las lenguas y los saberes ancestrales de las comunidades kichwas del Cantón Tena.
            </p>
            <div class="flex gap-4">
              <a href="https://www.instagram.com/verseadoras_kichwas?igsh=Z29rc2Z0OGcxZXpv" target="_blank" class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-terracotta hover:text-white transition-all">
                <i class="pi pi-instagram text-sm md:text-base"></i>
              </a>
              <a href="https://www.facebook.com/share/14bnpaLg1as/" target="_blank" class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-terracotta hover:text-white transition-all">
                <i class="pi pi-facebook text-sm md:text-base"></i>
              </a>
              <!-- <a href="#" class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-terracotta hover:text-white transition-all">
                <i class="pi pi-youtube text-sm md:text-base"></i>
              </a> -->
            </div>
          </div>

          <!-- Column 2: Links 1 -->
          <div class="md:col-span-2 space-y-4 md:space-y-6">
            <h4 class="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Explorar</h4>
            <ul class="space-y-3 md:space-y-4 text-xs md:text-sm font-light">
              <li><a href="#hero" class="hover:text-terracotta transition-colors">Inicio</a></li>
              <li><a href="#about" class="hover:text-terracotta transition-colors">Nosotros</a></li>
              <li><a href="#news" class="hover:text-terracotta transition-colors">Noticias</a></li>
            </ul>
          </div>

          <!-- Column 3: Links 2 -->
          <div class="md:col-span-3 space-y-4 md:space-y-6">
            <!-- <h4 class="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Institucional</h4>
            <ul class="space-y-3 md:space-y-4 text-xs md:text-sm font-light">
              <li><a href="#" class="hover:text-terracotta transition-colors">IFAIC Ecuador</a></li>
              <li><a href="#" class="hover:text-terracotta transition-colors">Gobierno del Ecuador</a></li>
              <li><a href="#" class="hover:text-terracotta transition-colors">Políticas de Privacidad</a></li>
            </ul> -->
          </div>

          <!-- Column 4: Contact -->
          <div class="md:col-span-3 space-y-4 md:space-y-6">
            <h4 class="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Contacto</h4>
            <div class="space-y-3 md:space-y-4 text-xs md:text-sm font-light">
              <p class="flex items-center gap-3">
                <i class="pi pi-envelope text-terracotta"></i>
                renanquilumba&#64;hotmail.com
              </p>
              <p class="flex items-center gap-3">
                <i class="pi pi-phone text-terracotta"></i>
                0995362579
              </p>
              <p class="flex items-center gap-3 italic">
                Tena, Amazonía - Ecuador
              </p>
            </div>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="pt-10 md:pt-12 flex flex-col sm:flex-row justify-between items-center gap-6 md:gap-8 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-center sm:text-left">
          <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p>© 2026 Festival de Mujeres Kichwas</p>
            <a href="#" class="hover:text-white transition-colors">Términos de Uso</a>
          </div>
          <div class="flex items-center gap-4">
             <span class="text-white/20">Amazonía - Ecuador</span>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent { }
