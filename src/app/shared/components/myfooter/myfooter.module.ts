import {NgModule} from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from '../../../app.routes';

import { MyFooterComponent } from './myfooter.component';

@NgModule({
    declarations: [MyFooterComponent],
    imports: [RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })],
    exports: [MyFooterComponent]
})

export class MyFooterModule
{

}
