import { Component, Input, ChangeDetectionStrategy, signal } from '@angular/core';

export interface Pokemon {
  name: string;
  level: number;
}

export interface GymLeader {
  name: string;
  age: number;
  location: string;
  badge: string;
  typeColor: string;
  intro: string;
  team: Pokemon[];
}

@Component({
  selector: 'app-leader-info',
  standalone: true,
  imports: [],
  templateUrl: './leader-info.html',
  styleUrl: './leader-info.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaderInfo {
  @Input({ required: true }) leader!: GymLeader;
  isDescriptionVisible = signal<boolean>(false);

  toggleDescription(): void {
    this.isDescriptionVisible.update(state => !state);
  }
}