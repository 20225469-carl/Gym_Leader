import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { LeaderInfo, GymLeader } from '../leader-info/leader-info';

@Component({
  selector: 'app-johto-region',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './johto-region.html',
  styleUrl: './johto-region.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JohtoRegion {
  johtoLeaders = signal<GymLeader[]>([
    {
      name: 'Falkner', age: 17, location: 'Violet City', badge: 'Zephyr Badge', typeColor: '#A890F0',
      intro: 'The Elegant Flier! I will show you the true value of flying Pokémon.',
      team: [{ name: 'Pidgey', level: 7 }, { name: 'Pidgeotto', level: 9 }]
    },
    {
      name: 'Bugsy', age: 12, location: 'Azalea Town', badge: 'Hive Badge', typeColor: '#A8B820',
      intro: 'The Walking Bug Encyclopedia. I know absolutely everything about buggy woods!',
      team: [{ name: 'Scyther', level: 17 }, { name: 'Metapod', level: 15 }, { name: 'Kakuna', level: 15 }]
    },
    {
      name: 'Whitney', age: 16, location: 'Goldenrod City', badge: 'Plain Badge', typeColor: '#A8A878',
      intro: 'The Incredibly Pretty Girl! Watch out for my devastating Miltank Rollout!',
      team: [{ name: 'Clefairy', level: 18 }, { name: 'Miltank', level: 20 }]
    },
    {
      name: 'Morty', age: 23, location: 'Ecruteak City', badge: 'Fog Badge', typeColor: '#705898',
      intro: 'The Mystic Seer of the Future. My ghosts hit from shadows you cannot view.',
      team: [{ name: 'Gastly', level: 21 }, { name: 'Haunter', level: 21 }, { name: 'Gengar', level: 25 }]
    }
  ]);
}