import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { LeaderInfo, GymLeader } from '../leader-info/leader-info';

@Component({
  selector: 'app-kanto-region',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './kanto-region.html',
  styleUrl: './kanto-region.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KantoRegion {
  kantoLeaders = signal<GymLeader[]>([
    {
      name: 'Brock', age: 15, location: 'Pewter City', badge: 'Boulder Badge', typeColor: '#8B8589',
      intro: 'The Rock-Solid Pokémon Trainer. My defense is impossible to breach!',
      team: [{ name: 'Geodude', level: 12 }, { name: 'Onix', level: 14 }]
    },
    {
      name: 'Misty', age: 13, location: 'Cerulean City', badge: 'Cascade Badge', typeColor: '#3399FF',
      intro: 'The Tomboyish Mermaid! You will drown under my strategic blue waves.',
      team: [{ name: 'Staryu', level: 18 }, { name: 'Starmie', level: 21 }]
    },
    {
      name: 'Lt. Surge', age: 34, location: 'Vermilion City', badge: 'Thunder Badge', typeColor: '#FFCC00',
      intro: 'The Lightning American. I will shock your little team right out of the sky!',
      team: [{ name: 'Voltorb', level: 21 }, { name: 'Pikachu', level: 18 }, { name: 'Raichu', level: 24 }]
    },
    {
      name: 'Erika', age: 19, location: 'Celadon City', badge: 'Rainbow Badge', typeColor: '#77CC55',
      intro: 'The Nature-Loving Princess. My grass-type aroma therapy will stun your senses.',
      team: [{ name: 'Victreebel', level: 29 }, { name: 'Tangela', level: 24 }, { name: 'Vileplume', level: 29 }]
    }
  ]);
}