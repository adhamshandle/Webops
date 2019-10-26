import React, { useEffect } from 'react';
import SinglePhoto from './SinglePhoto';
import { connect } from 'react-redux';
import { getGeneric, getGenericSingle } from "../../appRedux/actions/Generic";
import get from 'lodash/get'
import styled from 'styled-components';
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

const Photos = (props) => {

    useEffect(() => {
        get(props, 'history.location.pathname').includes("categories") ?
            props.getGenericSingle("categories", get(props, 'match.params.id', '1')) :
            props.getGeneric("photos")
    }, []);
    return (
        <div>
            {get(props, 'main.categories') ?
                <WeddingBreadcrumb>
                    <WeddingBreadcrumbLink><BreadcrubmLink href="/">GALLERY</BreadcrubmLink> > {get(props, 'main.categories[0].title', '')}</WeddingBreadcrumbLink>
                </WeddingBreadcrumb>
                : ("")}
            <SinglePhoto history={props.history} categories={get(props, 'main.categories')} photos={get(props, 'main.photos', [])} />
        </div>
    )
}
const mapStateToProps = ({ main }) => {
    return { main }
};
export default connect(mapStateToProps, { getGeneric, getGenericSingle })(Photos);