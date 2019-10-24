import React, { useEffect } from 'react';
import SinglePhoto from './SinglePhoto';
import { connect } from 'react-redux';
import { getGeneric } from "../../appRedux/actions/Generic";
import get from 'lodash/get'
const Photos = (props, { main }) => {
    useEffect(() => {
        props.getGeneric("photos")
    }, []);
    return (
        <div>
            <SinglePhoto photos={get(props, 'main.photos', [])} />
        </div>
    )
}
const mapStateToProps = ({ main }) => {
    return { main }
};
export default connect(mapStateToProps, { getGeneric })(Photos);