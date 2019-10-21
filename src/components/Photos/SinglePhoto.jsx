import React, { useState } from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
height: 100%;
position: relative;
margin-top: 3%;
width: 30%;
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
const SinglePhoto = () => {
    return (
        <Wrapper>
            <Photo src="https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/32/src/medium-733b43212189cb003c4f90deb8e481d5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20191021%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20191021T122714Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=6461f2d94a06919a581d86b5c1e70281088b7bb5ea7621bb4f3d5e91e7795936" />
            <PhotoTitle>
                Wedding Cake
            </PhotoTitle>
        </Wrapper>
    )
}
export default SinglePhoto;