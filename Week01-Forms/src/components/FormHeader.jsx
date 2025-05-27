import React from "react";

const FormHeader = () => {
    return(
        <>
            <div style={{textAlign:"center", fontStyle:"serif", color:"brown", padding:20, borderRadius:10, marginTop:2}}>
            <h1 className="form-header" style={{fontFamily:"serif", fontSize:30}}>Welcome!</h1>
            <p className="form-subheader" style={{fontFamily:"serif", fontSize:20}}>Fill in the Form Below</p>
            <hr className="mb-4"/>
            </div>
        </>
    );
};

export default FormHeader;