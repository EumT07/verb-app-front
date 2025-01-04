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
      'hero.title': 'Master English Verbs',
      'hero.subtitle': 'Learn, practice, and perfect your English verb conjugations with our interactive platform.',
      'hero.cta': 'Start Learning Now',
      'about.title': 'About VerbMaster',
      'about.subtitle': 'Leading the Way in Language Education',
      'about.description': 'VerbMaster has been at the forefront of innovative language education since 2010. Our unique approach combines:',
      'about.feature1': 'Interactive learning experiences',
      'about.feature2': 'Native speaker guidance',
      'about.feature3': 'Advanced AI technology',
      'about.feature4': 'Personalized learning paths',
      'about.success': 'With over 100,000 successful students worldwide, we\'re committed to making English verb learning accessible and enjoyable for everyone.',
      'faqs.title': 'Frequently Asked Questions',
      'footer.contact': 'Contact',
      'footer.quickLinks': 'Quick Links',
      'footer.slogan': 'Making English verb learning easy and fun.',
      'footer.rights': 'All rights reserved.',
      'team.title': 'Our Team',
      'team.creator': 'John Doe',
      'team.role': 'Creator & Lead Developer'
    },
    es: {
      'hero.title': 'Domina los Verbos en Inglés',
      'hero.subtitle': 'Aprende, practica y perfecciona tus conjugaciones de verbos en inglés con nuestra plataforma interactiva.',
      'hero.cta': 'Comienza a Aprender',
      'about.title': 'Sobre VerbMaster',
      'about.subtitle': 'Liderando el Camino en la Educación de Idiomas',
      'about.description': 'VerbMaster ha estado a la vanguardia de la educación innovadora de idiomas desde 2010. Nuestro enfoque único combina:',
      'about.feature1': 'Experiencias de aprendizaje interactivas',
      'about.feature2': 'Guía de hablantes nativos',
      'about.feature3': 'Tecnología AI avanzada',
      'about.feature4': 'Rutas de aprendizaje personalizadas',
      'about.success': 'Con más de 100,000 estudiantes exitosos en todo el mundo, estamos comprometidos a hacer que el aprendizaje de verbos en inglés sea accesible y divertido para todos.',
      'faqs.title': 'Preguntas Frecuentes',
      'footer.contact': 'Contacto',
      'footer.quickLinks': 'Enlaces Rápidos',
      'footer.slogan': 'Haciendo el aprendizaje de verbos en inglés fácil y divertido.',
      'footer.rights': 'Todos los derechos reservados.',
      'team.title': 'Nuestro Equipo',
      'team.creator': 'John Doe',
      'team.role': 'Creador y Desarrollador Principal'
    },
    pt: {
      'hero.title': 'Domine os Verbos em Inglês',
      'hero.subtitle': 'Aprenda, pratique e aperfeiçoe suas conjugações de verbos em inglês com nossa plataforma interativa.',
      'hero.cta': 'Comece a Aprender',
      'about.title': 'Sobre VerbMaster',
      'about.subtitle': 'Liderando o Caminho na Educação de Idiomas',
      'about.description': 'VerbMaster tem estado na vanguarda da educação inovadora de idiomas desde 2010. Nossa abordagem única combina:',
      'about.feature1': 'Experiências de aprendizado interativas',
      'about.feature2': 'Orientação de falantes nativos',
      'about.feature3': 'Tecnologia AI avançada',
      'about.feature4': 'Caminhos de aprendizado personalizados',
      'about.success': 'Com mais de 100.000 alunos bem-sucedidos em todo o mundo, estamos comprometidos em tornar o aprendizado de verbos em inglês acessível e divertido para todos.',
      'faqs.title': 'Perguntas Frequentes',
      'footer.contact': 'Contato',
      'footer.quickLinks': 'Links Rápidos',
      'footer.slogan': 'Tornando o aprendizado de verbos em inglês fácil e divertido.',
      'footer.rights': 'Todos os direitos reservados.',
      'team.title': 'Nossa Equipe',
      'team.creator': 'John Doe',
      'team.role': 'Criador e Desenvolvedor Principal'
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
