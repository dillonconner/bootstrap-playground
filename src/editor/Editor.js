import React from "react";
import Display from "./Display";
import Options from "./Options";
import Controls from "./Controls";
import Tools from "./Tools";

const Editor = () => {

    return (
        <div className="editor">
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col">
                        <Controls />
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col">
                        <Options />
                    </div>
                    <div className="col-10">
                        <Display />
                    </div>
                    
                    
                </div>
                <div className="row">
                    <div className="col">
                        <Tools />
                    </div>
                    
                </div>
            </div>
            
            
            
        </div>
    )
}
export default Editor