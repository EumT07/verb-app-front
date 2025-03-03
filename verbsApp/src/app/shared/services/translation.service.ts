import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Translations } from "../interfaces"

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor() { }

  private translations: Translations = {
    en: {
      'hero.title': 'VerbsApp',
      'hero.subtitle': 'Learn, practice, and perfect your English verb conjugations with our interactive platform, Feel free to browse through our +200 verbs',
      'hero.cta': 'Start Learning Now',
      'about.title': 'About VerbApp',
      'about.subtitle': 'Leading the new Way in Language Education',
      'about.description': 'VerbsApp seeks to improve the correct pronunciation of verbs through IPA sounds. Our unique approach combines:',
      'about.feature1': 'Interactive learning experiences',
      'about.feature2': 'Better user interface',
      'about.feature3': 'Advanced AI technology',
      'about.feature4': 'Personalized learning paths',
      'about.success': 'With over 350 successful verbs, we\'re committed to making English learning accessible and enjoyable for everyone.',
      'faqs.title': 'Frequently Asked Questions',
      'footer.contact': 'Contact',
      'footer.quickLinks': 'Quick Links',
      'footer.slogan': 'Making English verb learning easy and fun.',
      'footer.rights': 'All rights reserved.',
      'team.title': 'Creator',
      'team.creator': 'Eublan Mata',
      'team.role': 'Creator & Lead Developer',
      'question1': 'How long does it take to learn all verbs?',
      'question2': 'Do you offer personalized learning plans?',
      'question3': 'Can I access the platform on mobile devices?',
      'question4': 'Are there native speakers available for practice?',
      'question5': 'Is VerbsApp free?',
      'question6': 'How many verbs are there in this website?',
      'question7': 'When are you going to include phrasal verbs?',
      'answer1': 'The learning process varies for each individual, but with consistent practice using our platform, most students see significant improvement within 2-3 months.',
      'answer2': 'Yes! Our AI-powered system creates a customized learning path based on your current level, goals, and learning style.',
      'answer3': 'Absolutely! Our platform is fully responsive and works seamlessly on smartphones, tablets, and desktop computers.',
      'answer4': 'Yes, we have a team of certified native English teachers available for live practice sessions and pronunciation guidance.',
      'answer5': 'For the moment this website is completely free, you can use it, but the resources will be limited because all processes (Hosting, DNS, cloud data) that help this page works correctly are expensive so it could work or not, so if you like this project and want to support us you can buy us a coffe, this support will be use for help this project to grow up.',
      'answer6': 'For the moment we have around 366 verbs including Regular and Irregular Verbs, we are working very hard to include more verbs.',
      'answer7': 'We are working on it, so it questions of time to include them in the page.'
    },
    es: {
      'hero.title': 'VerbsApp',
      'hero.subtitle': 'Aprende, practica y perfecciona tus conjugaciones de verbos en inglés con nuestra plataforma interactiva, siéntete libre de navegar a través de nuestros +200 verbos',
      'hero.cta': 'Comienza a Aprender',
      'about.title': 'Sobre VerbApp',
      'about.subtitle': 'Nuevos caminos en la enseñanza de idiomas',
      'about.description': 'VerbsApp pretende mejorar la pronunciación correcta de los verbos a través de los sonidos IPA. Nuestro enfoque único combina:',
      'about.feature1': 'Experiencias de aprendizaje interactivas',
      'about.feature2': 'Mejor interfaz de usuario',
      'about.feature3': 'Tecnología AI avanzada',
      'about.feature4': 'Rutas de aprendizaje personalizadas',
      'about.success': 'Con más de 350 verbos de éxito, nos comprometemos a hacer que el aprendizaje del inglés sea accesible y agradable para todos.',
      'faqs.title': 'Preguntas Frecuentes',
      'footer.contact': 'Contacto',
      'footer.quickLinks': 'Enlaces Rápidos',
      'footer.slogan': 'Haciendo el aprendizaje de verbos en inglés fácil y divertido.',
      'footer.rights': 'Todos los derechos reservados.',
      'team.title': 'Creador',
      'team.creator': 'Eublan Mata',
      'team.role': 'Creador y Desarrollador Principal',
      'question1': '¿Cuánto tiempo se tarda en aprender todos los verbos?',
      'question2': '¿Ofrecen planes de aprendizaje personalizados?',
      'question3': '¿Puedo acceder a la plataforma desde dispositivos móviles?',
      'question4': '¿Hay hablantes nativos disponibles para practicar?',
      'question5': '¿VerbsApp es gratuito?',
      'question6': '¿Cuántos verbos hay en este sitio web?',
      'question7': '¿Cuándo incluirán los phrasal verbs?',
      'answer1': 'El proceso de aprendizaje varía en función de cada persona, pero con una práctica constante utilizando nuestra plataforma, la mayoría de los estudiantes observan una mejora significativa en 2-3 meses.',
      'answer2': 'Sí. Nuestro sistema basado en IA crea una ruta de aprendizaje personalizada en función de tu nivel actual, tus objetivos y tu estilo de aprendizaje.',
      'answer3': 'Por supuesto. Nuestra plataforma es totalmente responsive y funciona a la perfección en smartphones, tablets y ordenadores de sobremesa.',
      'answer4': 'Sí, contamos con un equipo de profesores nativos de inglés certificados disponibles para sesiones de práctica en directo y orientación sobre pronunciación.',
      'answer5': 'De momento esta web es completamente gratuita, puedes usarla, pero los recursos serán limitados ya que todos los procesos (Hosting, DNS, datos en la nube) que ayudan a que esta página funcione correctamente son caros por lo que podría funcionar o no, así que si te gusta este proyecto y quieres apoyarnos puedes invitarnos a un café, este apoyo servirá para ayudar a que este proyecto crezca.',
      'answer6': 'Por el momento tenemos alrededor de 366 verbos incluyendo Verbos Regulares e Irregulares, estamos trabajando muy duro para incluir más verbos.',
      'answer7': 'Estamos trabajando en ello, así que cuestiones de tiempo para incluirlos en la página.'
    },
    pt: {
      'hero.title': 'VerbsApp',
      'hero.subtitle': 'Aprenda, pratique e aperfeiçoe suas conjugações verbais em inglês com nossa plataforma interativa. Fique à vontade para navegar por nossos mais de 200 verbos.',
      'hero.cta': 'Comece a Aprender',
      'about.title': 'Sobre VerbApp',
      'about.subtitle': 'Liderando o Caminho na Educação de Idiomas',
      'about.description': 'O VerbsApp busca melhorar a pronúncia correta dos verbos por meio dos sons do IPA. Nossa abordagem exclusiva combina:',
      'about.feature1': 'Experiências de aprendizado interativas',
      'about.feature2': 'Melhor interface de usuário',
      'about.feature3': 'Tecnologia AI avançada',
      'about.feature4': 'Caminhos de aprendizado personalizados',
      'about.success': 'Com mais de 350 verbos bem-sucedidos, temos o compromisso de tornar o aprendizado de inglês acessível e agradável para todos.',
      'faqs.title': 'Perguntas Frequentes',
      'footer.contact': 'Contato',
      'footer.quickLinks': 'Links Rápidos',
      'footer.slogan': 'Tornando o aprendizado de verbos em inglês fácil e divertido.',
      'footer.rights': 'Todos os direitos reservados.',
      'team.title': 'Criador',
      'team.creator': 'Eublan Mata',
      'team.role': 'Criador e Desenvolvedor Principal',
      'question1': 'Quanto tempo é necessário para aprender todos os verbos?',
      'question2': 'Vocês oferecem planos de aprendizado personalizados?',
      'question3': 'Posso acessar a plataforma em dispositivos móveis?',
      'question4': 'Há falantes nativos disponíveis para praticar?',
      'question5': 'O VerbsApp é gratuito?',
      'question6': 'Quantos verbos existem neste site?',
      'question7': 'Quando vocês vão incluir os phrasal verbs?',
      'answer1': 'O processo de aprendizado varia de acordo com cada indivíduo, mas com a prática consistente usando nossa plataforma, a maioria dos alunos percebe uma melhora significativa dentro de 2 a 3 meses.',
      'answer2': 'Sim! Nosso sistema alimentado por IA cria um caminho de aprendizagem personalizado com base em seu nível atual, metas e estilo de aprendizagem.',
      'answer3': 'Com certeza! Nossa plataforma é totalmente responsiva e funciona perfeitamente em smartphones, tablets e computadores desktop.',
      'answer4': 'Sim, temos uma equipe de professores de inglês nativos certificados disponíveis para sessões de prática ao vivo e orientação de pronúncia.',
      'answer5': 'No momento, este site é totalmente gratuito, você pode usá-lo, mas os recursos serão limitados, pois todos os processos (hospedagem, DNS, dados em nuvem) que ajudam esta página a funcionar corretamente são caros, portanto, ele pode funcionar ou não. Portanto, se você gostar deste projeto e quiser nos apoiar, pode nos comprar um café, pois esse apoio será usado para ajudar este projeto a crescer.',
      'answer6': 'No momento, temos cerca de 366 verbos, incluindo verbos regulares e irregulares, mas estamos trabalhando duro para incluir mais verbos.',
      'answer7': 'No momento, temos cerca de 366 verbos, incluindo verbos regulares e irregulares, e estamos nos esforçando para incluir mais verbos.'

    }
  };

  private currentLang = 'en';
  private languageSubject = new BehaviorSubject<string>(this.currentLang);

  language$ = this.languageSubject.asObservable();
  
  getCurrentLang(): string {
    return this.currentLang;
  }

  setLanguage(lang: string) {
    this.currentLang = lang;
    this.languageSubject.next(lang);
  }

  translate(key: string): string {
    return this.translations[this.currentLang][key] || key;
  }
}
