import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Noticia {
  id: string;
  tag: string;
  titulo: string;
  extracto: string;
  contenido: string;
  media: { type: 'image' | 'video', id: string }[];
  featured?: boolean;
  alone?: boolean;
}

const NOTICIAS_DATA: Noticia[] = [
  {
    id: '1',
    tag: 'Invitación',
    titulo: 'SEGUNDO FESTIVAL DE MUJERES ADULTAS MAYORES KICHWAS VERSIADORAS DEL CANTÓN TENA',
    extracto: 'La palabra ancestral vuelve a florecer en nuestras comunidades.',
    contenido: 'Te invitamos a ser parte de este encuentro cultural donde las mujeres sabias de nuestras comunidades compartirán versos, cantos y saberes de la tradición oral kichwa. Espéralo pronto.',
    media: [{ type: 'image', id: '/noticia1.jpg' }],
    featured: true
  },
  {
    id: '2',
    tag: 'Proyecto',
    titulo: 'Diálogo de Saberes, Lenguas y Tradición Oral',
    extracto: 'Socialización con las comunidades de Alto Pano, Shandia, Venecia y Atacapi.',
    contenido: 'SEn el marco del proyecto “Festival de Mujeres Adultas Mayores Kichwas Versiadoras del Cantón Tena: Diálogo de Saberes, Lenguas y Tradición Oral” – Segunda Edición, durante la tercera semana de octubre de 2025 se socializó el proyecto ganador con las comunidades kichwas seleccionadas. Junto a los presidentes comunitarios, se compartieron los objetivos, actividades y metodología del festival en las comunidades de Alto Pano, Shandia, Venecia y Atacapi, fortaleciendo la participación y el compromiso territorial. Este proceso marca el inicio de un recorrido colectivo que honra la sabiduría ancestral de nuestras madres y abuelas versiadoras.',
    media: [
      { type: 'image', id: '/noticia2.1.png' },
      { type: 'image', id: '/noticia2.2.JPG' },
      { type: 'image', id: '/noticia2.3.JPG' },
      { type: 'image', id: '/noticia2.4.png' },
      { type: 'image', id: '/noticia2.5.png' },
      { type: 'image', id: '/noticia2.6.png' },
      { type: 'image', id: '/noticia2.7.png' },
      { type: 'image', id: '/noticia2.8.png' },
    ]
  },
  {
    id: '3',
    tag: 'Prensa',
    titulo: 'Reglamento Oficial Presentado',
    extracto: 'Rueda de prensa en el Tena socializó el reglamento de participación.',
    contenido: `La segunda semana de noviembre de 2025, se realizó con éxito la rueda de prensa en la ciudad del Tena para socializar el reglamento de participación de la II Edición del Festival “Mujeres Kichwas Versiadoras del Cantón Tena” 2026. El evento se llevó a cabo en La casa de la cultura núcleo de napo, Institución provincial, que brindó el espacio, mobiliario y cobertura técnica para garantizar una presentación adecuada. El director del proyecto, Renán Quilumba, compartió los principales aspectos del reglamento, resaltando su construcción colectiva junto a actores comunitarios kichwas, como reflejo del espíritu participativo e intercultural del festival. \n
    ¡Seguimos avanzando con fuerza comunitaria!`,
    media: [
      { type: 'image', id: '/noticia3.1.png' },
      { type: 'image', id: '/noticia3.2.png' },
      { type: 'image', id: '/noticia3.3.png' },
      { type: 'image', id: '/noticia3.4.png' }
    ]
  },
  {
    id: '4',
    tag: 'Promoción',
    titulo: 'Spots Promocionales en Radio',
    extracto: 'Dos spots producidos en kichwa y castellano resuenan en el territorio.',
    contenido: `Durante el mes de octubre de 2026, cumpliendo la metodología de comunicación se realizaron 2 spots promocionales para difundir la II Edición del Festival “Mujeres Kichwas Versiadoras del Cantón Tena” 2026. Estos mensajes fueron transmitidos por radios comunitarias kichwas y compartidos en redes sociales, en formatos accesibles tanto en kichwa como en castellano, fortaleciendo la inclusión y la comprensión intercultural de los contenidos visuales y orales. La palabra de nuestras madres y abuelas versiadoras empieza a resonar en todo el territorio.`,
    media: [
      { type: 'video', id: '/noticia4.1.mp4' }
    ],
    featured: true,
    alone: true

  },
  {
    id: '5',
    tag: 'Promoción',
    titulo: 'Proceso de calificación y selección',
    extracto: 'Las postulantes compartieron su arte en entrevistas personales y presentaciones orales en kichwa.',
    contenido: `En el marco del Festival “Mujeres Kichwas Versiadoras del Cantón Tena” 2026 (II Edición). La tercera semana de diciembre de 2025 Se llevó a cabo Proceso de calificación y selección de las mujeres kichwas versiadoras que participarán en la II Edición del Festival 2026. Las postulantes compartieron su arte en entrevistas personales y presentaciones orales en kichwa, expresando versos, cantos y relatos cargados de sabiduría, memoria y amor por su cultura. Las mujeres seleccionadas fueron: Grefa Rivadeneyra Cleidy; Grefa Andi Noemi Rosalina; Huatatoca Pauchi Celina Esther; Cerda Grefa Jazmín Rosa; Grefa Tapuy Graciela Noemi; Cefda Andy Rosa Leticia; Calapucha mamallacta Marina Martha; Andy Aguinda Rosa Mariela. Cada palabra fue una muestra viva de la tradición oral kichwa que este festival celebra y visibiliza.`,
    media: [
      { type: 'image', id: '/noticia5.png' }
    ],
    alone: true

  },
  {
    id: '6',
    tag: 'Comunicación',
    titulo: 'Promoción y difusión de la agenda de los procesos',
    extracto: 'Se difundió la agenda de los procesos a través de medios locales',
    contenido: `Como parte de la promoción y difusión de la agenda de los procesos formativos y diálogos de saberes de la II Edición del Festival 2026, se realizaron acciones de comunicación para llegar a toda la ciudadanía: Se transmitieron entrevistas con el director del proyecto en emisoras locales, compartiendo la importancia de estos espacios y motivando la participación de la comunidad. Además, se realizaron recorridos con altoparlantes por barrios y comunidades rurales del Cantón Tena, difundiendo mensajes en kichwa y castellano, anunciando fechas, sedes y objetivos de los talleres. ¡Porque la palabra ancestral también se mueve y resuena en el territorio!`,
    media: [
      { type: 'image', id: '/noticia6.1.jpg' },
      { type: 'image', id: '/noticia6.2.jpg' },
      { type: 'image', id: '/noticia6.3.jpg' },
      { type: 'image', id: '/noticia6.4.jpg' },
      { type: 'image', id: '/noticia6.5.jpg' },
      { type: 'image', id: '/noticia6.6.jpg' }
    ]
  },
  {
    id: '7',
    tag: 'Talleres',
    titulo: 'Talleres Formativos y Diálogo de Saberes',
    extracto: 'Procesos de formación dirigidos a grupos en situación de vulnerabilidad del Cantón Tena.',
    contenido: `En el marco de la II Edición del Festival 2025, se llevaron a cabo talleres formativos, procesos de diálogo de saberes y formación de públicos dirigidos a grupos en situación de vulnerabilidad del Cantón Tena, En la Comunidad Kichwa de alto Pano, Shandia, Venecia, Atacapi, en el Centro de atención integral Sumak Yanapak Wasi, Centro gerontológico del hospital del IESS, U.E. Bilingüe de De Chambira Tena, U. E. de Ongota y U.E. Bilingüe E. Ccecco del Pano. \n
    Las mujeres versiadoras seleccionadas lideraron estos espacios, compartiendo su conocimiento ancestral mediante la oralidad, poesía y actividades participativas, adaptadas al contexto y necesidades de cada grupo. \n
    Se aplicaron técnicas pedagógicas lúdicas para niños, adultos mayores, personas con discapacidad y mujeres embarazadas, usando juegos orales, materiales visuales y dinámicas comunitarias que fortalecieron la comprensión y la participación activa. \n
    🧶 Al finalizar cada encuentro, se entregaron materiales simbólicos como: tejidos con símbolos kichwas, adicional se entregaron certificados de participación como testimonio de este hermoso camino compartido.`,
    media: [
      { type: 'image', id: '/noticia7.1.jpg' },
      { type: 'image', id: '/noticia7.2.jpg' }
    ]
  },
  {
    id: '8',
    tag: 'Festival',
    titulo: 'Celebración de la I Edición del Festival en Shiripuno',
    extracto: 'Ocho mujeres sabias compartieron sus versos y cantos en una jornada llena de identidad.',
    contenido: `🌺 El pasado 15 de marzo de 2026, se celebró con profunda emoción la I Edición del Festival "Mujeres Kichwas Versiadoras del Cantón Tena", en el Centro Comunitario de Shiripuno. \n
    🌿 La jornada incluyó actos de bienvenida, presentaciones de las mujeres versiadoras, intervenciones musicales, rituales simbólicos y espacios de diálogo intercultural que conectaron generaciones y saberes. \n
    🎤 Las 8 mujeres seleccionadas: Lourdes Janeth Rivadeneyra Grefa, Martha Rigoberta Alvarado Cerda, Mamallacta Silvia Jacinta, Marlene Josefina Andy Grefa, Huatatoca Pisango Evelinda Daniela, María Estela Alvarado Shiguango, Catalina Antonia María Shiguango Chimbo, Ana Elsa Salazar Alvarado compartieron sus versos, cantos y narraciones ancestrales, convirtiéndose en las verdaderas protagonistas del evento. \n
    Gracias a todas las comunidades que hicieron de este festival una celebración de identidad, memoria y resistencia cultural.`,
    media: [
      { type: 'image', id: '/noticia8.1.jpg' },
      { type: 'image', id: '/noticia8.2.jpg' }
    ]
  },
  {
    id: '9',
    tag: 'Relato',
    titulo: 'Ana Salazar: Pasu Chibliam Mama',
    extracto: 'Relato ancestral sobre el pájaro de mal agüero en la cosmovisión kichwa.',
    contenido: `🎥 Como parte de la II Edición del Festival “Mujeres Kichwas Versiadoras del Cantón Tena” 2025, se produjo una serie de 8 videos breves, cada uno dedicado a una de nuestras sabias protagonistas. \n
    🌺 En cada pieza audiovisual podrás conocer su presentación oral, el contexto comunitario desde donde viene y los temas que abordaron: memoria, naturaleza, espiritualidad y sabiduría ancestral. \n
    En esta ocasión, Ana Salazar nos presenta el tema "Pasu Chibliam Mama" (Madre del Demonio). Se trata de un pájaro de mal agüero, temido dentro de la cosmovisión kichwa. Según la tradición oral, cuando se escucha su canto, trae consigo un presagio de muerte. No importa cuán fuerte sea la persona, ni cuántas curaciones se realicen con el shamán —si el ave canta, la vida se apaga. \n
    🌿 Un relato ancestral cargado de simbolismo, espiritualidad y conexión profunda con la naturaleza.`,
    media: [
      { type: 'video', id: '/noticia9.mp4' }
    ],
    alone: true
  },
  {
    id: '10',
    tag: 'Canto',
    titulo: 'Catalina Shiguango: Piyun Sisa Warmi',
    extracto: 'Canto simbólico sobre la fuerza y el enraizamiento de la mujer flor de pitón.',
    contenido: `Como parte de la I Edición del Festival “Mujeres Kichwas Versiadoras del Cantón Tena” 2025, se produjo una serie de 8 videos breves, cada uno dedicado a una de nuestras sabias protagonistas. \n
    🌺 En esta ocasión, Catalina Shiguango nos presenta el tema "Piyun Sisa Warmi" (Mujer flor de pitón). Este canto profundo y simbólico expresa el deseo de ser como el árbol de pitón: fuerte, resistente y enraizado en la tierra. Catalina canta que quiere caminar con ashanga y machete, cruzar ríos y llegar hasta el cerro, alimentándose de la corteza del árbol para tener fuerza. \n
    🌿 Es una metáfora poderosa sobre la transmisión de saberes ancestrales a hijas y nietas, mientras se contempla el florecer de los animales, las plantas y la vida que habita la selva.`,
    media: [
      { type: 'video', id: '/noticia10.mp4' }
    ],
    alone: true
  },
  {
    id: '11',
    tag: 'Relato',
    titulo: 'Evelinda Huatatoca: Mundo Puma',
    extracto: 'La leyenda del puma gigante y los espíritus protectores Kuillur.',
    contenido: `Como parte de la I Edición del Festival “Mujeres Kichwas Versiadoras del Cantón Tena” 2025, se produjo una serie de 8 videos breves, cada uno dedicado a una de nuestras sabias protagonistas. \n
    🐾 En esta ocasión, Evelinda Huatatoca nos presenta el tema "Mundo Puma" (Animal Mítico). Desde la cosmovisión kichwa, se cuenta que en lo más alto del cerro habita un puma gigante, un ser temido por su poder, que alguna vez devoraba a los hombres. Los espíritus Kuillur, hermanos protectores, lograron encerrarlo... pero se dice que en el fin del mundo, el gran puma regresará. \n
    🌊 De las faldas del cerro —también llamado Galeras— brota un río sagrado, símbolo de vida y advertencia. Evelinda nos recuerda: “Cuidado, el puma puede despertar”.`,
    media: [
      { type: 'video', id: '/noticia11.mp4' }
    ],
    alone: true
  },
  {
    id: '12',
    tag: 'Canto',
    titulo: 'Lourdes Rivadeneyra: Ñuka Mamita Wualla',
    extracto: 'Un homenaje al vínculo sagrado y solidario entre madre e hija.',
    contenido: `Como parte de la I Edición del Festival “Mujeres Kichwas Versiadoras del Cantón Tena” 2025, se produjo una serie de 8 videos breves, cada uno dedicado a una de nuestras sabias protagonistas. \n
    💧 En esta ocasión, Lourdes Rivadeneyra nos presenta el tema "Ñuka Mamita Wualla" (Mi querida mamita). Este canto es una expresión profunda del amor filial y la conexión emocional entre madre e hija dentro de la cultura kichwa. A través de versos llenos de ternura, Lourdes evoca el dolor compartido: “Si tus ojos lloran, mis ojos también lloran”. \n
    🌿 En la cosmovisión kichwa, la madre no solo es la dadora de vida, sino también el centro emocional y espiritual del hogar. Este canto no es solo un lamento, sino también un reconocimiento del vínculo sagrado, del cariño inmenso y de la solidaridad emocional que atraviesa generaciones.`,
    media: [
      { type: 'video', id: '/noticia12.mp4' }
    ],
    alone: true
  },
  {
    id: '13',
    tag: 'Tradición',
    titulo: 'María Estela Alvarado: Asawata Upiay Kusaku',
    extracto: 'Celebración del vínculo amoroso a través del gesto ancestral de la entrega de la chicha.',
    contenido: `Como parte de la I Edición del Festival “Mujeres Kichwas Versiadoras del Cantón Tena” 2025, se produjo una serie de 8 videos breves, cada uno dedicado a una de nuestras sabias protagonistas. \n
    En esta ocasión, María Estela Alvarado nos presenta el tema "Asawata Upiay Kusaku" (Toma la Chicha, Esposo). Este canto celebra el vínculo amoroso y cotidiano entre la mujer y su esposo en la cultura kichwa, a través de un gesto ancestral: la entrega de la chicha. \n
    🌽 La mujer, símbolo de fortaleza y cuidado, prepara el vinillo con esmero y espera al esposo con cariño. En los versos, se expresa afecto, ternura y complicidad: “Si te emborrachas, duermes en mis piernas”. \n
    🌿 En la tradición kichwa, la chicha no es solo bebida, sino un acto de amor, hospitalidad y conexión comunitaria.`,
    media: [
      { type: 'video', id: '/noticia13.mp4' }
    ],
    alone: true
  },
  {
    id: '14',
    tag: 'Tradición',
    titulo: 'Marlene Andy: Asuamanga Tinaja',
    extracto: 'La olla de la chicha como símbolo del hogar y el saber femenino kichwa.',
    contenido: `Como parte de la I Edición del Festival “Mujeres Kichwas Versiadoras del Cantón Tena” 2025, se produjo una serie de 8 videos breves, cada uno dedicado a una de nuestras sabias protagonistas. \n
    En esta ocasión, Marlene Andy nos presenta el tema "Asuamanga Tinaja" (Olla de la Chicha). En este canto, la olla de la chicha se convierte en un símbolo del hogar, del amor y del saber femenino kichwa. La mujer sabia prepara la chicha en la casa de la guayusa, donde no solo se comparte bebida, sino también cuidado, afecto y tradición. \n
    💞 Marlene evoca un gesto íntimo y lleno de ternura: “Venga mi querido marido a tomar chicha… si te emborrachas, dormirás en mis piernas”. Es una declaración de cariño, fortaleza y hospitalidad que reafirma el rol esencial de la mujer en la vida familiar y comunitaria.`,
    media: [
      { type: 'video', id: '/noticia14.mp4' }
    ],
    alone: true
  },
  {
    id: '15',
    tag: 'Canto',
    titulo: 'Martha Alvarado: Chaguamango',
    extracto: 'Canto que une la naturaleza sagrada con el poder y la fertilidad femenina.',
    contenido: `Como parte de la I Edición del Festival “Mujeres Kichwas Versiadoras del Cantón Tena” 2025, se produjo una serie de 8 videos breves, cada uno dedicado a una de nuestras sabias protagonistas. \n
    🐦 En esta ocasión, Martha Alvarado nos presenta el tema "Chaguamango" (Pájaro Chaguamango). Este canto evoca la belleza y el misterio del pájaro Chaguamango, un ave que representa la conexión entre la naturaleza, la observación y la espiritualidad en la cultura kichwa. \n
    🌴 Lo vemos alimentándose de chonta amarilla, posado en el racimo, cantando “tururin, tururin” mientras observa con atención todo lo que lo rodea. Debajo del árbol, animales se alimentan y una hermosa mujer aparece como símbolo de fertilidad, vida y poder femenino.`,
    media: [
      { type: 'video', id: '/noticia15.mp4' }
    ],
    alone: true
  },
  {
    id: '16',
    tag: 'Relato',
    titulo: 'Silvia Mamallacta: Tamia Tuta',
    extracto: 'Historia cantada de amor y lealtad en las noches de lluvia de la selva.',
    contenido: `Como parte de la I Edición del Festival “Mujeres Kichwas Versiadoras del Cantón Tena” 2025, se produjo una serie de 8 videos breves, cada uno dedicado a una de nuestras sabias protagonistas. \n
    🌧️ En esta ocasión, Silvia Mamallacta nos presenta el tema "Tamia Tuta" (Noche de Lluvia). Este canto profundo y emotivo narra una historia de amor clandestino, marcada por la lluvia, el frío y las costumbres del entorno. En la voz de Silvia, escuchamos a una mujer que visita a su amado en la noche, en silencio, enfrentando juicios, miedos y secretos. \n
    🌿 Con versos como “si llegan 9 meses, te escondes en la selva” o “yo te seguiré queriendo, solo cuando mueras te dejaré”, el canto expresa lealtad, resistencia y afecto incondicional.`,
    media: [
      { type: 'video', id: '/noticia16.mp4' }
    ],
    alone: true
  }
];

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main id="news" class="relative z-20 max-w-[1400px] mx-auto px-6 py-24 bg-white">
      <!-- HEADER SECTION -->
      <div class="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-10">
        <div class="reveal-header">
            <h2 class="text-4xl md:text-5xl font-display font-bold text-amazon mb-4">Noticias del Festival</h2>
            <p class="text-gray-400 font-medium">Historias, aprendizajes y cantos de nuestra tierra.</p>
        </div>
        <div class="mt-8 md:mt-0 reveal-header" style="transition-delay: 200ms;">
            <span class="text-xs font-bold px-6 py-2 rounded-full bg-gray-50 text-terracotta uppercase tracking-widest border border-gray-100">Edición 2026</span>
        </div>
      </div>

      <!-- MAIN GRID (FIRST 6 NEWS) -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 mb-24">
        <div *ngFor="let item of noticiasPrincipales" 
             [id]="'card-' + item.id"
             [ngClass]="{
               'md:col-span-8 md:row-span-2': item.featured,
               'md:col-span-4': !item.featured,
               'opacity-100 translate-y-0': visibleCards.has(item.id),
               'opacity-0 translate-y-20': !visibleCards.has(item.id)
             }"
             class="group relative rounded-[3rem] overflow-hidden cursor-pointer transition-all duration-1000 ease-out bg-gray-50 border border-gray-100 min-h-[400px]"
             (click)="openModal('modal-' + item.id)">
          
          <div class="h-full relative">
              <ng-container [ngSwitch]="item.media[0].type">
                  <img *ngSwitchCase="'image'" [src]="item.media[0].id" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105">
                  <video *ngSwitchCase="'video'" [src]="item.media[0].id" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" autoplay muted playsinline loop [muted]="true"></video>
              </ng-container>
              
              <div class="absolute inset-0 bg-gradient-to-t from-amazon/90 via-amazon/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-8 md:p-10 w-full transform transition-transform duration-500">
                <span class="inline-block px-4 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">{{item.tag}}</span>
                <h3 class="text-xl md:text-3xl font-display font-bold text-white mb-3 leading-tight group-hover:text-sunset transition-colors">{{item.titulo}}</h3>
                <p class="text-gray-200 text-xs md:text-base line-clamp-2 font-light opacity-0 group-hover:opacity-100 transition-all duration-500">{{item.extracto}}</p>
              </div>
          </div>
        </div>
      </div>

      <!-- CAROUSEL SECTION (NEWS 7+) -->
      <div *ngIf="noticiasSecundarias.length > 0" class="mt-20">
        <div class="flex items-center justify-between mb-10 reveal-header">
            <h3 class="text-2xl font-display font-bold text-amazon">Más Crónicas y Saberes</h3>
            <div class="flex items-center gap-4">
                <button (click)="scrollCarousel(-1)" class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-amazon hover:text-white transition-all">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button (click)="scrollCarousel(1)" class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-amazon hover:text-white transition-all">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
        </div>

        <div id="news-carousel" 
             class="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-10"
             (mouseenter)="pauseAutoScroll()"
             (mouseleave)="startAutoScroll()">
          <div *ngFor="let item of noticiasSecundarias" 
               [id]="'card-' + item.id"
               [ngClass]="{
                 'opacity-100 translate-y-0': visibleCards.has(item.id),
                 'opacity-0 translate-y-20': !visibleCards.has(item.id)
               }"
               class="min-w-[300px] md:min-w-[400px] flex-shrink-0 group relative rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-1000 ease-out bg-gray-50 border border-gray-100 h-[450px]"
               (click)="openModal('modal-' + item.id)">
            
            <div class="h-full relative">
                <ng-container [ngSwitch]="item.media[0].type">
                    <img *ngSwitchCase="'image'" [src]="item.media[0].id" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105">
                    <video *ngSwitchCase="'video'" [src]="item.media[0].id" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" autoplay muted playsinline loop [muted]="true"></video>
                </ng-container>
                <div class="absolute inset-0 bg-gradient-to-t from-amazon/90 via-transparent to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-8 w-full">
                  <span class="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-widest rounded-full mb-3">{{item.tag}}</span>
                  <h4 class="text-xl font-display font-bold text-white mb-2 leading-tight group-hover:text-sunset transition-colors">{{item.titulo}}</h4>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- MODALS -->
    <dialog *ngFor="let item of noticias" [id]="'modal-' + item.id" 
            class="m-auto backdrop:bg-amazon/80 backdrop:backdrop-blur-xl bg-transparent border-none p-0 w-[95%] max-w-6xl overflow-visible"
            (click)="onBackdropClick($event, 'modal-' + item.id)"
            (close)="onDialogClose('modal-' + item.id)">
      
      <div class="bg-white rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]">
        <!-- Close Button -->
        <button (click)="closeModal('modal-' + item.id)" class="absolute top-6 right-6 md:top-8 md:right-8 z-50 p-3 bg-white/80 backdrop-blur-sm hover:bg-terracotta hover:text-white rounded-full text-amazon shadow-lg transition-all">
          <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <!-- LAYOUT NORMAL (SIDE BY SIDE) -->
        <div *ngIf="!item.alone" class="flex flex-col md:flex-row h-full overflow-hidden">
            <div class="w-full md:w-1/2 bg-amazon/5 flex flex-col p-6 md:p-10 relative overflow-hidden">
                <div *ngIf="item.media.length > 2" class="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                    <button (click)="scrollMedia('v-carousel-' + item.id, -1)" class="p-2 bg-white rounded-full shadow-md text-amazon hover:bg-terracotta hover:text-white transition-all">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                    </button>
                </div>
                <div [id]="'v-carousel-' + item.id" class="flex-1 overflow-y-auto no-scrollbar scroll-smooth space-y-6 md:space-y-8 pr-2">
                    <ng-container *ngFor="let m of item.media">
                        <div *ngIf="m.type === 'video'" class="rounded-[2rem] overflow-hidden relative shadow-lg bg-charcoal aspect-video">
                            <video [src]="m.id" class="w-full h-full object-cover" autoplay muted loop playsinline controls [muted]="true"></video>
                        </div>
                        <div *ngIf="m.type === 'image'" class="rounded-[2rem] overflow-hidden shadow-lg bg-gray-200">
                            <img [src]="m.id" class="w-full h-auto object-cover" [alt]="item.titulo">
                        </div>
                    </ng-container>
                </div>
                <div *ngIf="item.media.length > 2" class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                    <button (click)="scrollMedia('v-carousel-' + item.id, 1)" class="p-2 bg-white rounded-full shadow-md text-amazon hover:bg-terracotta hover:text-white transition-all">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                </div>
            </div>
            <div class="p-8 md:p-16 lg:p-20 overflow-y-auto custom-scrollbar flex-1 bg-white">
              <span class="text-terracotta font-bold uppercase tracking-widest text-[10px] mb-4 block">{{item.tag}}</span>
              <h2 class="text-lg md:text-3xl font-display font-bold text-amazon mb-8 md:mb-10 leading-tight">{{item.titulo}}</h2>
              <div class="prose prose-slate max-w-none text-gray-600 text-sm md:text-lg font-light leading-relaxed space-y-6">
                <div class="whitespace-pre-line">{{item.contenido}}</div>
              </div>
            </div>
        </div>

        <!-- LAYOUT ALONE (TOP MEDIA/TITLE, BOTTOM TEXT) -->
        <div *ngIf="item.alone" class="flex flex-col h-full overflow-y-auto custom-scrollbar">
            <!-- Row 1: Media and Title -->
            <div class="flex flex-col md:flex-row gap-10 p-8 md:p-16 pb-0">
                <!-- Media Box -->
                <div class="w-full md:w-1/2">
                    <div class="rounded-[3rem] overflow-hidden shadow-2xl bg-amazon/5 aspect-video md:aspect-square lg:aspect-video relative">
                        <ng-container [ngSwitch]="item.media[0].type">
                            <img *ngSwitchCase="'image'" [src]="item.media[0].id" class="w-full h-full object-cover">
                            <video *ngSwitchCase="'video'" [src]="item.media[0].id" class="w-full h-full object-cover" autoplay muted loop playsinline controls [muted]="true"></video>
                        </ng-container>
                    </div>
                </div>
                <!-- Title Box -->
                <div class="w-full md:w-1/2 flex flex-col justify-center">
                    <span class="text-terracotta font-bold uppercase tracking-widest text-[10px] mb-4 block">{{item.tag}}</span>
                    <h2 class="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-amazon leading-tight">{{item.titulo}}</h2>
                    <p class="mt-6 text-gray-400 font-medium italic border-l-4 border-terracotta pl-6">{{item.extracto}}</p>
                </div>
            </div>
            <!-- Row 2: Full Content -->
            <div class="p-8 md:p-16 pt-10">
                <div class="prose prose-slate max-w-none text-gray-600 text-base md:text-xl font-light leading-relaxed">
                    <div class="whitespace-pre-line bg-gray-50/50 p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-inner">
                        {{item.contenido}}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </dialog>
  `,
  styles: [`
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    .reveal-header { transition: all 1s ease-out; opacity: 0; transform: translateY(20px); }
    .reveal-header.visible { opacity: 1; transform: translateY(0); }
  `]
})
export class NewsComponent implements OnInit, AfterViewInit, OnDestroy {
  noticias = NOTICIAS_DATA;
  noticiasPrincipales = NOTICIAS_DATA.slice(0, 6);
  noticiasSecundarias = NOTICIAS_DATA.slice(6);
  visibleCards = new Set<string>();
  private autoScrollInterval: any;

  ngOnInit() { }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardId = entry.target.id.replace('card-', '');
          setTimeout(() => this.visibleCards.add(cardId), 100);
        }
      });
    }, { threshold: 0.1 });

    this.noticias.forEach(n => {
      const el = document.getElementById('card-' + n.id);
      if (el) observer.observe(el);
    });

    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.reveal-header').forEach(h => headerObserver.observe(h));
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.pauseAutoScroll();
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      const container = document.getElementById('news-carousel');
      if (container) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 350, behavior: 'smooth' });
        }
      }
    }, 4000);
  }

  pauseAutoScroll() {
    if (this.autoScrollInterval) clearInterval(this.autoScrollInterval);
  }

  scrollCarousel(direction: number) {
    const container = document.getElementById('news-carousel');
    if (container) container.scrollBy({ left: 450 * direction, behavior: 'smooth' });
  }

  scrollMedia(containerId: string, direction: number) {
    const container = document.getElementById(containerId);
    if (container) {
      const itemHeight = 350;
      container.scrollBy({ top: itemHeight * direction, behavior: 'smooth' });
    }
  }

  openModal(modalId: string) {
    const dialog = document.getElementById(modalId) as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
      const videos = dialog.querySelectorAll('video');
      videos.forEach(v => {
        v.muted = true;
        v.play();
      });
    }
  }

  closeModal(modalId: string) {
    const dialog = document.getElementById(modalId) as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  }

  onDialogClose(modalId: string) {
    document.body.style.overflow = '';
    const dialog = document.getElementById(modalId) as HTMLDialogElement;
    if (dialog) {
      const videos = dialog.querySelectorAll('video');
      videos.forEach(v => {
        v.pause();
        v.currentTime = 0;
      });
    }
  }

  onBackdropClick(event: MouseEvent, modalId: string) {
    const dialog = document.getElementById(modalId) as HTMLDialogElement;
    if (dialog) {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX && event.clientX <= rect.left + rect.width
      );
      if (!isInDialog) this.closeModal(modalId);
    }
  }
}
