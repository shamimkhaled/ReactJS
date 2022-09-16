import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
  static defaultProps = {
    pageSize:9,
    country: 'us',
    category: 'general'
  }
  static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
  }
  capitalizeFirstletter= (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

    //Constructor
    constructor(props){
        super(props);
        //console.log('Hello i am a constructor from  News Component');
        //state
        this.state = {
           articles: [],
           loading: false,
           page:1,
           totalResults: 0
        }
        document.title = `${this.capitalizeFirstletter(this.props.category)} - NewsMonkey `
    }

    async updateNews(){
      this.props.setProgress(10);
      const url  = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
          loading:true
        });
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json()
        //console.log(parsedData);
        //this.props.setProgress(70);
        this.setState({ 
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          loading: false 
      
        })
        this.props.setProgress(100);
    }

    async componentDidMount(){
        //console.log("cdm");
        this.updateNews();
        
    }

     handlePrevClick = async ()=>{
      //console.log("Previous");
      this.setState({
        page: this.state.page - 1,});

        this.updateNews();

    }
    
     handleNextClick = async()=>{
      //console.log("Next");
      this.setState({
                  page: this.state.page + 1,
                 
                })
      this.updateNews();
      
      
    }
    fetchMoreData = async() => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        })
    };
 
    
  render() {

    return (
      <>
        <h2 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {this.capitalizeFirstletter(this.props.category)} Headlines</h2>
        { this.state.loading && <Spinner/>}
        <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
          > 
            <div className="container">
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return  <div className="col-md-4" key={element.url} >
                                  <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author: "Unknown"} date={element.publishedAt} source={element.source.name} />
                            </div>
                    })} 
                </div>
              </div> 
        </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                  <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                  <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark"  onClick={this.handleNextClick}>Next &rarr;</button>
              </div>
                */}
       
      </>
    )
  }
}



export default News