import React, { Component } from 'react';
import axios from 'axios';
import Qs from 'qs';

class NewsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			news: [],
			gifs: [],
		};
	}

	renderContent() {
		const articleList = this.state.gifs.map((items, index) => {
			const newsToUse = this.state.news[index];

			

			return (
				<div key={items.id} className="boxWarpper">
					
					<a href={newsToUse.url} target="_blank" rel="noopener noreferrer">
						<div className="mainImage">
							<img src={items.images.original.url} alt={items.title} />
						</div>

						<h3 className="mainTitle">{newsToUse.title}</h3>
						<p className="articleSource">
							News Source: <span>{newsToUse.source.name}</span>
						</p>
						<p className="=desc"> {newsToUse.description}</p>
					</a>
				</div>
			);
		});

		return <div className="mainContent">{articleList}</div>;
	}

	loadingState() {
		return (
			<div className="loadingContainer">
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		);
	}

	async fetchNews() {
		try {
			// const newsData = await axios.get('https://newsapi.org/v2/everything', {
			// 	params: {

			// 		apiKey: '0cc17ab873b944d08f7a6b7c222b403c',
			// 		sortBy: 'relevancy',
			// 		pageSize: 18,
			// 		language: 'en',
			// 		q: this.props.inputValue ? this.props.inputValue : 'breaking news',
			// 		page: this.props.newsPageNum ? this.props.newsPageNum : 1,
			// 	},
			// });

			// had to reconfigure code to use a proxy
			axios({
				method: 'GET',
				url: 'https://proxy.hackeryou.com',
				responseType: 'json',
				paramsSerializer: function (params) {
					return Qs.stringify(params, { arrayFormat: 'brackets' });
				},
				params: {
					reqUrl: 'https://newsapi.org/v2/everything',
					proxyHeaders: {
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Headers': 'Content-Type, Authorization',
					},
					params: {
						apiKey: '0cc17ab873b944d08f7a6b7c222b403c',
						sortBy: 'relevancy',
						pageSize: 18,
						language: 'en',
						q: this.props.inputValue ? this.props.inputValue : 'breaking news',
						page: this.props.newsPageNum ? this.props.newsPageNum : 1,
					},
					xmlToJSON: false,
				},
			}).then((res) => {
				this.setState({
					news: res.data.articles,
				});
			});

			axios({
				method: 'GET',
				url: 'https://api.giphy.com/v1/gifs/search',
				params: {
					api_key: 'fqGHJALbZ8kmKJ6L76bs9FJmTV6GxJ8t',
					limit: 18,
					q: this.props.inputValue ? this.props.inputValue : 'breaking news',
					offset: this.props.gifPageNum ? this.props.gifPageNum : 0,
				},
			}).then((res) => {
				this.setState({
					gifs: res.data.data,
				});
			});
		} catch (err) {
			console.log(err);
		}
	}
	componentDidMount() {
		this.fetchNews();
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			this.props.inputValue !== prevProps.inputValue ||
			this.props.newsPageNum !== prevProps.newsPageNum
		) {
			this.setState(
				{
					news: [],
					gifs: [],
				},
				this.fetchNews
			);
		}
	}

	render() {
		return (
			<section>
				{this.state.news.length ? this.renderContent() : this.loadingState()}
			</section>
		);
	}
}

export default NewsList;
