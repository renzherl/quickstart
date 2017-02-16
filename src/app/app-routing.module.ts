import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

import { CountdownLocalVarParentComponent } from './countdown/countdown-localvar-parent.component';
import { CountdownViewChildParentComponent } from './countdown/countdown-viewchild-parent.component';

const routes: Routes = [
    { path: 'heros', component: HeroComponent },
    { path: '', redirectTo: '/heros', pathMatch: 'full' },
    { path: 'localvariable', component: CountdownLocalVarParentComponent },
    { path: 'viewchild', component: CountdownViewChildParentComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
