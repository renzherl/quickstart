import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

import { CountdownComponent } from './countdown/countdown.component';

const routes: Routes = [
    { path: 'heroes', component: HeroComponent },
    { path: '', redirectTo: '/heros', pathMatch: 'full' },
    { path: 'countdown', component: CountdownComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
