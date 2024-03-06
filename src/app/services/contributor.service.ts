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
        'Ik ben Lore, masterstudente systeem- en procesinnovatie in de gezondheidszorg. ' +
        'Tijdens het schrijven van mijn bachelorproef en mijn stage op het provinciaal secretariaat bij Wit-Gele Kruis kwam ik erachter dat ik geïnteresseerd ben in wetenschappelijk onderzoek. ' +
        'Daarom vervolg ik mijn opleiding met een masteropleiding.',
    },
    {
      name: 'Femke',
      pictureUrl: '../../assets/fotoFemke.png',
      description:
        'Hallo ik ben Femke, tweedejaarsstudente verpleegkunde na vroedkunde op PXL. Ik doe deze studierichting met heel mijn hart. ' +
        'Door de ruime keuze op basis van werk heb ik hiervoor gekozen. Zelf sta ik eigenlijk op alle afdelingen graag: ' +
        'zowel raadpleging, materniteit, verloskamer, gynaecologie, ... Ik zou me graag nog verder specialiseren in ' +
        'neonatologie.',
    },
    {
      name: 'Ine',
      pictureUrl: '../../assets/fotoIne.jpg',
      description:
        'Ik ben Ine, de developer die de website gemaakt heeft. ' +
        'Momenteel werk ik als developer bij Jessa Ziekenhuis in Hasselt. ' +
        'Hier kan ik mijn passie voor programmeren combineren met het maken van nuttige applicaties voor zowel patiënten als medewerkers.',
    },
  ];

  getContributors(): Contributor[] {
    return this.contributors;
  }
}
