import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="relative py-60 overflow-hidden bg-white">
      <!-- Parallax Background Element -->
      <div 
        class="absolute -right-20 top-0 w-[800px] h-[800px] bg-amazon/5 rounded-full blur-3xl opacity-30 pointer-events-none"
        [style.transform]="'translateY(' + scrollOffset * 0.2 + 'px)'"
      ></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <!-- Content Left -->
          <div 
            class="space-y-8 order-2 lg:order-1 transition-all duration-1000 delay-300"
            [ngClass]="{'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-10': !isVisible}"
          >
            <div class="space-y-8 text-xl text-gray-600 font-light leading-relaxed">
              <p>
                El Festival de Mujeres Adultas Mayores Kichwas Versiadoras del Cantón Tena es un espacio de 
                <b class="text-terracotta">resistencia y celebración cultural</b>. 
              </p>
              <p>
                Reconocemos a las mujeres adultas mayores como portadoras vivas de la memoria, 
                quienes transmiten visiones del mundo heredadas por generaciones en las comunidades de 
                <span class="text-amazon font-bold">Alto Pano, Shandía, Venecia y Atacapi</span>.
              </p>
              <div class="p-8 border-l-4 border-sunset bg-gray-50 rounded-r-3xl italic text-amazon text-2xl font-display">
                "Nuestras lenguas son el puente entre el pasado y el futuro."
              </div>
            </div>
          </div>

          <!-- Title Right with SHRINK & MOVE Animation -->
          <div class="order-1 lg:order-2 flex justify-end">
            <div 
              class="relative inline-block transition-all duration-75 ease-out"
              [style.transform]="titleTransform"
              [style.opacity]="titleOpacity"
            >
              <span class="text-sunset font-bold uppercase tracking-[0.4em] text-[12px] block mb-4">El Legado de la Voz</span>
              <h2 class="text-6xl md:text-8xl lg:text-9xl font-display font-black text-amazon leading-[0.85] tracking-tighter">
                ESENCIA <br/> DEL <br/> FESTIVAL
              </h2>
              <div class="absolute -bottom-10 -right-10 w-32 h-32 border-r-8 border-b-8 border-terracotta/10 rounded-br-3xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class AboutComponent implements OnInit {
  isVisible = false;
  scrollOffset = 0;
  titleTransform = 'scale(1.5) translateX(-50%)';
  titleOpacity = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const section = document.getElementById('about');
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Calculate how much of the section is visible (0 to 1)
    const distanceToTop = rect.top;
    const progress = Math.max(0, Math.min(1, (viewportHeight - distanceToTop) / viewportHeight));

    this.scrollOffset = window.scrollY;

    if (progress > 0.1) {
      this.isVisible = true;
      
      // Animation: Start large/centered, shrink and move to final position
      // Scale from 1.5 to 1
      const scale = 1.5 - (progress * 0.5);
      // Horizontal movement: from left/center to final right position
      const translateX = (1 - progress) * -30; // Starts at -30% translate
      
      this.titleTransform = `scale(${scale}) translateX(${translateX}%)`;
      this.titleOpacity = progress * 1.5; // Quick fade in
    } else {
      this.isVisible = false;
      this.titleOpacity = 0;
    }
  }

  ngOnInit() {
    // Initial check
    this.onWindowScroll();
  }
}
