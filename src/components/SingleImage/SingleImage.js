import React from 'react';
import {Figure} from "react-bootstrap";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";

function SingleImage({post,style}) {

    const imgPrev = post.data.preview.images[0].resolutions[post.data.preview.images[0].resolutions.length - 1].url
    const imgUrl = imgPrev.replace(/&amp;/g, "&");

        return (
        <>
            <Figure style={style}>
                <FigureImage
                    variant="top"
                    src={imgUrl}
                    height={post.data.preview.images[0].source.height}
                    width={post.data.preview.images[0].source.width}
                    margin='10px'
                    controls/>
                <FigureCaption>
                    <h3 style={{
                        maxWidth: post.data.preview.images[0].source.width,
                        textOverflow:'hidden'}}>{post.data.title}</h3>
                    <p>Karma: {post.data.ups.toLocaleString()}</p>
                    <a target="_blank" rel="noopener noreferrer" href={'https://www.reddit.com/'+post.data.permalink}>Reddit Link</a><br/>
                    <a target="_blank" rel="noopener noreferrer" href={post.data.url}>Direct Link</a>
                    <p>Original size
                        : {post.data.preview.images[0].source.width}x{post.data.preview.images[0].source.height}</p>
                </FigureCaption>
            </Figure>
        </>
        )


}

export default SingleImage;