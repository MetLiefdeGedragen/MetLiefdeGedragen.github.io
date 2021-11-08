import { Injectable } from '@angular/core';
import { Contributor } from '../models/contributor';

@Injectable({
  providedIn: 'root',
})
export class ContributorService {
  contributors: Contributor[] = [
    {
      name: 'Lore',
      pictureUrl: '../../assets/fotoLore.jpg',
      description:
        'Ik ben Lore, derdejaarsstudente vroedkunde. Ik ben geïnteresseerd in gynaecologie en prenatale raadpleging. ' +
        'Ik vind het fijn om een diverse jobomschrijving te hebben en daarom heb ik ook voor deze studierichting gekozen.',
    },
    {
      name: 'Femke',
      pictureUrl: '../../assets/fotoFemke.png',
      description:
        'Hallo ik ben Femke, derdejaarsstudente vroedkunde op de PXL. Ik doe deze studie richting met heel mijn hart. ' +
        'Door de ruime keuze op basis van werk heb ik hiervoor gekozen. Zelf sta ik eigenlijk op alle afdelingen graag: ' +
        'zowel raadpleging, materniteit, verloskamer, gynaecologie, ... Ik zou me graag nog verder specialiseren in ' +
        'neonatologie na mijn opleiding vroedkunde.',
    },
    {
      name: 'Ine',
      pictureUrl: '../../assets/fotoIne.jpg',
      description:
        'Ik ben Ine, de informaticastudente die de website gemaakt heeft. Ik werk graag in de frontend, ' +
        'maar de backend schrikt me niet af. Ik programmeer graag en heb daarom ook de afstudeerrichting ' +
        'Applicatieontwikkeling Fullstack Development gekozen.',
    },
  ];

  getContributors(): Contributor[] {
    return this.contributors;
  }
}
