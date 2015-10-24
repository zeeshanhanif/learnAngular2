export default class Article {
	title: string;
	link: string;
	votes: number;

	constructor(title, link) {
		this.title = title;
		this.link = link;
		this.votes = 0;
	}
	
	voteUp() {
		this.votes += 1;
		return false;
	}

	voteDown() {
		this.votes -= 1;
		return false;
	}
	
	domain() {
		var link = this.link.split('//')[1];
		return link.split('/')[0];
	}
}