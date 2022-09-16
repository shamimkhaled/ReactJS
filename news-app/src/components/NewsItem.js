import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imgUrl, newsUrl, author, date, source} = this.props;

    return (
      <div className='my-3' >
            <div className="card" >
            <img src={!imgUrl?"https://www.gannett-cdn.com/presto/2022/08/15/USAT/3b02f4a9-f268-4354-9059-b6eea2df34e5-GettyImages-1078250394.jpg?auto=webp&crop=2120,1193,x0,y0&format=pjpg&width=1200":imgUrl } className="card-img-top" alt="..."/>
            <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  position: 'absolute',
                  right: '0'
                }}>
                  <span className="badge rounded-pill bg-danger"   style={{left: '86%', zIndex: '1'}} >
                      {source}
                  </span>
                </div>
            <div className="card-body">
                <h5 className="card-title">{title}... </h5>
                
                  
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()} </small></p>
                <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem