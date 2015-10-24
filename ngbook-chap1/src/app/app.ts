import {Component, bootstrap, FORM_DIRECTIVES,CORE_DIRECTIVES} from 'angular2/angular2'
import {RedditArticle} from './reddit-article'
import Article from './article'

@Component({
	selector:'reddit',
	template: `
			<section class="new-link">
				<div class="control-group">
					<div><label for="title">Title:</label></div>
					<div><input name="title" #newtitle></div>
				</div>
				<div class="control-group">
					<div><label for="link">Link:</label></div>
					<div><input name="link" #newlink></div>
				</div>				
				<button (click)="addArticle(newtitle,newlink)">Submit Link</button>
			</section>
			
			<reddit-article *ng-for="#article of articles" [article]="article" ></reddit-article>
			`,
	directives : [FORM_DIRECTIVES,CORE_DIRECTIVES,RedditArticle]
})
class RedditApp {
	articles: Array<Article>;
	
	constructor() {
		this.articles = [
			new Article('Angular 2', 'http://angular.io'),
			new Article('Fullstack', 'http://fullstack.io')
		];
	}
	addArticle(title,link){
		this.articles.push(new Article(title.value,link.value));
		title.value='';
		link.value='';
		console.log("Adding article with title", title.value, "and link", link.value);
		console.log(title);
		console.log(link);
	}
}

bootstrap(RedditApp);	