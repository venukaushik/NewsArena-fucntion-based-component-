import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date } = props

    return (
        <div className="my-3">
            <div className="card text-start">
                <img src={imageUrl ? imageUrl : 'https://www.niddk.nih.gov/-/media/Images/Components/Default-Social-Media-Images/News-Card.png'} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    <p className="card-text"><small className="text-body-secondary">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>

                </div>
            </div>
        </div>
    )

}

export default NewsItem