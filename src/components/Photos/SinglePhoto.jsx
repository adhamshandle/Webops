import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
const Wrapper = styled.div`
display: inline-block;
height: 100%;
position: relative;
margin-top: 3%;
margin-left: 3%;
width: 30%;
:hover{
    cursor: pointer;
}
`;
const Photo = styled.img`
height: 230px;
src: url(${props => props.src});
object-fit: contain;
background-size: cover;
background-position: center;
`;
const PhotoTitle = styled.h3`
    color: #000;
    font-size: 17.3px;
    font-weight: bold;
    margin: 10px 16%;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 25px;
    height: 50px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;
const onPhotoClick = (props, photo) => {
    props.history.push({
        pathname: `photos/${photo.id}`,
        state: { photo, categories: props.categories }
    })
}
const SinglePhoto = (props) => {
    return (
        get(props, 'categories', get(props, 'photos', [])) ?
            get(props, 'categories', get(props, 'photos', [])).map(photo => (
                photo.photos ? photo.photos.map((photo =>
                    <Wrapper onClick={() => onPhotoClick(props, photo)} key={photo.id}>
                        <Photo alt={photo.title} src={photo.img} />
                        <PhotoTitle>
                            {photo.title}
                        </PhotoTitle>
                    </Wrapper>
                ))
                    :
                    <Wrapper onClick={() => onPhotoClick(props, photo)} key={photo.id}>
                        <Photo alt={photo.title} src={photo.img} />
                        <PhotoTitle>
                            {photo.title}
                        </PhotoTitle>
                    </Wrapper>))
            : <p>Loading...</p>
    )
}
export default SinglePhoto;