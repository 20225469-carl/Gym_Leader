import { Routes } from '@angular/router';
import { Home } from './home/home'; 
import { KantoRegion } from './kanto-region/kanto-region';
import { JohtoRegion } from './johto-region/johto-region';
import { HoennRegion } from './hoenn-region'; 
import { LeaderInfo } from './leader-info/leader-info';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'kanto', component: KantoRegion },
  { path: 'johto', component: JohtoRegion },
  { path: 'hoenn', component: HoennRegion }, 
  { path: 'leader-info', component: LeaderInfo },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];