import {Component, bootstrap, FORM_DIRECTIVES,CORE_DIRECTIVES} from 'angular2/angular2'
import Article from './article'

@Component({
	selector: 'reddit-article',
	properties: ['article'],
	template: `
		<article>
			<div class="votes">{{ article.votes }}</div>
			<div class="main">
				<h2>
					<a href="{{ article.link }}">{{ article.title }}</a>
					<span>({{ article.domain() }})</span>
				</h2>
				<ul>
					<li><a href (click)='article.voteUp()'>upvote</a></li>
					<li><a href (click)='article.voteDown()'>downvote</a></li>
				</ul>
			</div>
		</article>
	` 
})
export class RedditArticle {
	article: Article;
}