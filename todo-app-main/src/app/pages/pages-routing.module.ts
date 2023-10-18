import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../core/guards/auth.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./home/home.module').then((m) => m.HomePageModule),
		canActivate: [authGuard(true)],
	},
	{
		path: 'login',
		loadChildren: () =>
			import('./login/login.module').then((m) => m.LoginPageModule),
		canActivate: [authGuard(false)],
	},
	{
		path: 'register',
		loadChildren: () =>
			import('./register/register.module').then(
				(m) => m.RegisterPageModule,
			),
		canActivate: [authGuard(false)],
	},
	{
		path: 'recovery',
		loadChildren: () =>
			import('./recovery-password/recovery-password.module').then(
				(m) => m.RecoveryPasswordPageModule,
			),
		canActivate: [authGuard(false)],
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule {}
