
const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props;
    return (
        <div className='my-3'>
            <div className="card" >
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill top-0 start-100 text-bg-danger">{source}</span>
                </div>
                <img src={!imageUrl ? "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/22_05_2023_17_58_49_1063407.jpg?width=920&format=jpeg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className='card-text'><small className='text-muted'>By {author ? author : "unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
                </div>
            </div>
        </div>
    )
}


export default NewsItem
