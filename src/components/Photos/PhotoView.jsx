import React, { useEffect } from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import { connect } from 'react-redux';
import { getGeneric } from "../../appRedux/actions/Generic";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

const WeddingBreadcrumb = styled.div`
width: 92%;
max-width: 1100px;
margin: 120px auto 0;
display: flex;
margin-bottom: 20px;
align-items: center;
flex-wrap: wrap;
`
const WeddingBreadcrumbLink = styled.h3`
line-height: 30px;
    height: 30px;
    margin: 0;
    text-transform: uppercase;
    display: inline-block;
    font-size: 18px;
    font-weight: 900;
    color: #010101;
`
const BreadcrubmLink = styled.a`
color: #008174;
    transition: all ease 0.1s;
    text-decoration: none;
`
const PhotoWrapper = styled.div`
display: flex;
flex-direction: row;
width: 92.5%;
max-width: 1100px;
margin: 15px auto 50px;
`
const PhotoContainerSingle = styled.div`
width: 55%
`
const ImageResponsive = styled.img`
display: block;
    max-width: 100%;
    float: right;
    height: auto;
    src: url(${props => props.src});
`
const PhotoDescription = styled.div`
width: 37%;
padding: 15px 20px;
`
const PhotoHeader = styled.h2`
margin: 0;
margin-bottom: 35px;
font-size: 35.1px;
font-weight: bold;
color: #000;
line-height: 1.2;
`
const PhotoHeader5 = styled.h5`
display: block;
margin: 0;
margin-bottom: 20px;
font-size: 23.6px;
line-height: 1.42;
color: #000;
`
const PhotoHeaderLink = styled.a`
color: #337ab7;
text-decoration: none;
`
const PhotoDescriptionLinks = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const PhotoView = (props) => {
    useEffect(() => {
        props.getGeneric("categories")
    }, []);
    return (
        <React.Fragment>
            <WeddingBreadcrumb>
                <WeddingBreadcrumbLink><BreadcrubmLink href={"/"}>GALLERY</BreadcrubmLink>{get(props, 'history.location.state.categories[0].id') ? <FontAwesomeIcon icon={faAngleRight} /> : ("")} <BreadcrubmLink href={`/categories/${get(props, 'history.location.state.categories[0].id')}`}>{get(props, 'history.location.state.categories[0].title', '')}</BreadcrubmLink> <FontAwesomeIcon icon={faAngleRight} /> {get(props, 'location.state.photo.title', '')} </WeddingBreadcrumbLink>
            </WeddingBreadcrumb>
            <PhotoWrapper>
                <PhotoContainerSingle>
                    <ImageResponsive src={get(props, 'location.state.photo.img')} />
                </PhotoContainerSingle>
                <PhotoDescription>
                    <PhotoHeader>
                        {get(props, 'location.state.photo.title', '')}
                    </PhotoHeader>
                    <PhotoHeader5>
                        {get(props, 'location.state.photo.title', '')} by {get(props, 'location.state.photo.maker', '')}
                    </PhotoHeader5>
                    <PhotoHeader5>
                        <PhotoHeaderLink>{get(props, 'location.state.photo.maker', '')}</PhotoHeaderLink>
                    </PhotoHeader5>
                    <PhotoDescriptionLinks>
                        <div>
                            <a href="">
                                <FontAwesomeIcon style={{ marginRight: '7px' }} size="2x" color="#000000" icon={faFacebook} />
                            </a>
                            <a href="">
                                <FontAwesomeIcon size="2x" color="#000000" icon={faTwitter} />

                            </a>
                        </div>
                    </PhotoDescriptionLinks>
                </PhotoDescription>
            </PhotoWrapper>
            <PhotoWrapper>
                <PhotoHeader>
                    Related Photos
                </PhotoHeader>
            </PhotoWrapper>
        </React.Fragment>
    )
}
const mapStateToProps = ({ main }) => {
    return { main }
};
export default connect(mapStateToProps, { getGeneric })(PhotoView);