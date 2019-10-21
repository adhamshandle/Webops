import React, { useEffect } from 'react';
import SinglePhoto from './SinglePhoto';
import { connect } from 'react-redux';
import { getGeneric } from "../../appRedux/actions/Generic";
const Photos = () => {
    useEffect(() => {
        console.log("HELLOOOOOOOOOOO")
        getGeneric("photos")
      });
    return (
        <div>
            <SinglePhoto />
        </div>
    )
}
const mapStateToProps = ({ main }) => {
    return main
};
export default connect(mapStateToProps, { getGeneric })(Photos);