import {Component, bootstrap, FORM_DIRECTIVES} from 'angular2/angular2'

@Component({
	selector:'my-app',
	template: `
			<h1>{{title}}</h1>
			<h2>{{hero.name}} details!</h2>
			<div>
				<label>Id: </label>{{hero.id}}
			</div>
			<div>
				<label>Name: </label>
				<div><input [(ng-model)]="hero.name"  placeholder="Name"></div>
			</div>
			`,
	directives : [FORM_DIRECTIVES]
})
class AppComponent {
	public title = 'Tour of Heroes';
	public hero: Hero = {
		id:1,
		name:'Windstorm'
	}
}

bootstrap(AppComponent);	