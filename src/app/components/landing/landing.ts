import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full">
      
      <!-- HERO PART -->
      <section id="hero" class="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-amazon">
        <div class="absolute inset-0 z-0">
          <img 
            src="/portada.png" 
            alt="Hero Background" 
            class="w-full h-full object-cover transition-transform duration-1000"
            [style.transform]="'scale(' + (1 + progress * 0.2) + ') translateY(' + (progress * 10) + 'vh)'"
            [style.opacity]="0.6 - progress"
          >
          <div class="absolute inset-0 bg-gradient-to-b from-amazon/40 via-amazon/20 to-white"></div>
        </div>

        <div class="relative z-10 text-center flex flex-col items-center w-full px-6 transition-opacity duration-500 top-10 md:top-auto" [style.opacity]="1 - progress * 2">
          <div class="h-40 md:h-56 lg:h-72"></div>
          <p class="text-amazon font-sans font-medium text-base md:text-xl lg:text-2xl max-w-2xl mt-6 md:mt-10 animate-fade-in-up drop-shadow-sm" style="animation-delay: 0.4s;">
            <span class="px-3 py-1 md:px-4 md:py-1 bg-white/60 backdrop-blur-sm rounded-lg block md:inline text-center md:text-left">
              Diálogo de Saberes, Lenguas y Tradición Oral
            </span>
          </p>
          <div class="mt-10 md:mt-16 animate-fade-in-up" style="animation-delay: 0.6s;">
              <a href="#about" class="px-8 py-4 md:px-12 md:py-5 bg-amazon text-white rounded-full font-bold shadow-2xl shadow-amazon/40 transition-all hover:bg-terracotta hover:-translate-y-1 active:translate-y-0 text-sm md:text-base">Explorar Festival</a>
          </div>
        </div>
      </section>

      
      <!-- ABOUT PART (Esencia) -->
      <section id="about" class="relative py-24 md:py-40 lg:py-60 bg-white min-h-[80vh] flex flex-col lg:flex-row items-center overflow-hidden">
        
        <!-- MOBILE PINNED TITLE SLOT -->
        <div id="mobile-title-slot" class="w-full px-6 mb-12 flex justify-center pointer-events-none lg:hidden"
             [style.opacity]="(isPinned && !isDesktop) ? 1 : 0">
            <h1 class="font-display font-black text-amazon leading-[0.85] tracking-tighter text-center text-[2.2rem]">
              FESTIVAL DE MUJERES <br/> 
              ADULTAS MAYORES <br/> 
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-terracotta to-sunset">KICHWAS VERSIADORAS</span>
            </h1>
        </div>

        <div class="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <!-- Content Left -->
            <div class="space-y-8 md:space-y-10 transition-all duration-1000" [style.opacity]="progress" [style.transform]="'translateY(' + (1 - progress) * 50 + 'px)'">
              <div class="space-y-6 md:space-y-8 text-base md:text-lg lg:text-xl text-gray-600 font-light leading-relaxed">
                <p>
                  El Festival de Mujeres Adultas Mayores Kichwas Versiadoras del Cantón Tena es un proyecto ganador de la línea de fomento 
                  <b class="text-terracotta">“Festivales Emergentes”</b> impulsado por el Gobierno del Ecuador y el Instituto de Fomento a la Creatividad y la Innovación (IFAIC).
                </p>
                
                <button (click)="openAboutModal()" class="group flex items-center gap-4 text-amazon font-bold uppercase tracking-widest text-xs md:text-sm hover:text-terracotta transition-colors">
                    Saber Más 
                    <span class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-amazon group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-white flex items-center justify-center transition-all">
                        <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </span>
                </button>
              </div>
            </div>

            <!-- Desktop space for title -->
            <div class="hidden lg:block h-96"></div>
          </div>
        </div>

        <!-- SHARED TITLE (INTERNAL VERSION - DESKTOP SMOOTH) -->
        <div *ngIf="isPinned && isDesktop" class="absolute top-1/2 left-0 w-full -translate-y-1/2 hidden lg:flex pointer-events-none z-40">
           <div class="max-w-7xl mx-auto px-6 w-full flex justify-end">
             <div class="w-1/2 text-left">
                <h1 class="font-display font-black text-amazon leading-[0.85] tracking-tighter text-4xl lg:text-[4rem]">
                  FESTIVAL DE MUJERES <br/> 
                  ADULTAS MAYORES <br/> 
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-terracotta to-sunset">KICHWAS VERSIADORAS</span>
                </h1>
             </div>
           </div>
        </div>
      </section>

      <!-- SHARED TITLE (ANIMATED FIXED VERSION) -->
      <div 
        *ngIf="!isPinned"
        class="fixed top-0 left-0 w-full h-screen z-40 pointer-events-none flex flex-col transition-all duration-75 ease-out"
      >
        <div class="max-w-7xl mx-auto px-6 w-full h-full flex items-center" 
             [ngClass]="{'justify-center': progress < 0.3 || !isDesktop, 'justify-end': progress >= 0.3 && isDesktop}">
          
          <div class="transition-all duration-500" 
               [style.width]="(progress >= 0.3 && isDesktop) ? '50%' : '100%'"
               [style.textAlign]="(progress >= 0.3 && isDesktop) ? 'left' : 'center'">
            
            <h1 class="font-display font-black leading-[0.85] tracking-tighter transition-all duration-500"
                [style.fontSize]="titleFontSize"
                [ngClass]="{'text-white drop-shadow-2xl': progress < 0.3, 'text-amazon': progress >= 0.3}">
              FESTIVAL DE MUJERES <br/> 
              ADULTAS MAYORES <br/> 
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-sunset to-orange-300"
                    [ngClass]="{'from-terracotta to-sunset': progress >= 0.3}">KICHWAS VERSIADORAS</span>
            </h1>
          </div>
        </div>
      </div>

      <!-- ABOUT MODAL -->
      <dialog id="about-modal" class="m-auto backdrop:bg-amazon/90 backdrop:backdrop-blur-xl bg-transparent border-none p-0 w-[95%] max-w-6xl overflow-visible">
        <div class="bg-white rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]">
            <div class="w-full md:w-2/5 h-48 md:h-auto relative">
                <img src="/portada.png" class="w-full h-full object-cover" alt="Portada Festival">
                <div class="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
            <div class="p-8 md:p-16 flex-1 overflow-y-auto custom-scrollbar relative bg-white text-gray-600">
                <button (click)="closeAboutModal()" class="absolute top-4 right-4 md:top-8 md:right-8 p-2 md:p-3 bg-gray-100 hover:bg-terracotta hover:text-white rounded-full text-amazon transition-all">
                    <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <span class="text-terracotta font-bold uppercase tracking-[0.3em] text-[10px] mb-4 md:mb-6 block">Presentación Completa</span>
                <div class="space-y-4 md:space-y-6 text-sm md:text-lg font-light leading-relaxed">
                    <p>El Festival de Mujeres Adultas Mayores Kichwas Versiadoras del Cantón Tena es un proyecto ganador de la línea de fomento “Festivales Emergentes” de artes literarias, narrativas y producción editorial, impulsado gracias al apoyo del Gobierno del Ecuador, bajo el lema del Nuevo Ecuador, y del Instituto de Fomento a la Creatividad y la Innovación (IFAIC).</p>
                    <p>Esta iniciativa cultural nace desde el territorio con el propósito de revitalizar, preservar y poner en valor la oralidad, las lenguas y los saberes ancestrales de las comunidades kichwas del Cantón Tena.</p>
                </div>
            </div>
        </div>
      </dialog>

    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class LandingComponent implements OnInit {
  progress = 0;
  titleFontSize = '5rem';
  isPinned = false;
  isDesktop = true;

  @HostListener('window:scroll', [])
  @HostListener('window:resize', [])
  onUpdate() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    const sectionAbout = document.getElementById('about');

    this.isDesktop = viewportWidth >= 1024;
    this.progress = Math.max(0, Math.min(1, scrollY / (viewportHeight * 0.8)));

    if (sectionAbout) {
      const aboutRect = sectionAbout.getBoundingClientRect();

      // RESTORE SMOOTH LOGIC FOR DESKTOP
      if (this.isDesktop) {
        const aboutMiddle = aboutRect.top + (aboutRect.height / 2);
        this.isPinned = aboutMiddle <= viewportHeight / 2;
      } else {
        // MOBILE LOGIC: PIN EXACTLY WHEN SLOT CROSSES CENTER
        const mobileSlot = document.getElementById('mobile-title-slot');
        if (mobileSlot) {
          const slotRect = mobileSlot.getBoundingClientRect();
          const slotCenter = slotRect.top + (slotRect.height / 2);
          this.isPinned = slotCenter <= viewportHeight / 2;
        } else {
          this.isPinned = aboutRect.top <= 100;
        }
      }
    }

    let baseSize = this.isDesktop ? 5 : 2.2;
    let endSize = this.isDesktop ? 3.5 : 2.2;

    if (!this.isPinned) {
      const size = baseSize - (this.progress * (baseSize - endSize));
      this.titleFontSize = `${size}rem`;
    }
  }

  ngOnInit() {
    this.onUpdate();
  }

  openAboutModal() {
    const modal = document.getElementById('about-modal') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
      document.body.style.overflow = 'hidden';
    }
  }

  closeAboutModal() {
    const modal = document.getElementById('about-modal') as HTMLDialogElement;
    if (modal) {
      modal.close();
      document.body.style.overflow = '';
    }
  }
}
