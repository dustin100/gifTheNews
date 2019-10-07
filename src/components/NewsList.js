import React, { Component } from 'react'
import axios from 'axios'

class NewsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            gifs: []

        }
    }



    renderContent() {
        // const { news, gifs } = this.state; I can use to replace this.state
        const articleList = this.state.news.map((items, index) => {
            const gifToUse = this.state.gifs[index];

            return (


                <div key={gifToUse.id} className="boxWarpper"> <a href={items.url} target="_blank" rel="noopener noreferrer">
                    <div className="mainImage"><img src={gifToUse.images.original.url} alt={gifToUse.title} /> </div>

                    <h3 className="mainTitle">{items.title}</h3>
                    <p className="articleSource">News Source: <span>{items.source.name}</span></p>
                    <p className="=desc"> {items.description}</p>
                </a>
                </div >
            )

        })

        return (
            <div className="mainContent" >
                {articleList}
            </div>
        )



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
        )
    }

    async fetchNews() {
        try {
            const newsData = await axios.get('https://newsapi.org/v2/everything', {
                params: {
                    apiKey: "0cc17ab873b944d08f7a6b7c222b403c",
                    sortBy: 'relevancy',
                    pageSize: 18,
                    language: 'en',
                    q: this.props.inputValue ? this.props.inputValue : 'breaking news',
                    page: this.props.newsPage

                }
            })
            const gifData = await axios.get('http://api.giphy.com/v1/gifs/search', {
                params: {
                    api_key: 'fqGHJALbZ8kmKJ6L76bs9FJmTV6GxJ8t',
                    limit: 18,
                    q: this.props.inputValue ? this.props.inputValue : 'breaking news',
                    offset: this.props.gifsPage
                }
            })

            this.setState({
                news: newsData.data.articles,
                gifs: gifData.data.data,


            })
            console.log(this.state)


        } catch (err) {
            console.log(err)
        }
    }
    componentDidMount() {
        this.fetchNews()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.inputValue !== prevProps.inputValue || this.props.newsPage !== prevProps.newsPage || this.props.gifsPage !== prevProps.gifsPage) {
            this.setState({
                news: [],
                gifs: []
            }, this.fetchNews);
        }
        console.log(this.props.newsPage)

    }
    render() {
        return (
            <section>

                {this.state.news.length ? this.renderContent() : this.loadingState()}
            </section>
        )
    }
}

export default NewsList