define(function(require) {
    
    // data
    var faces = require("./data");
    
    // create rubik app
    var rubik = React.createClass({
        
        displayName: "rubik",
        
        // properties
        propTypes: {
            id: React.PropTypes.string,
            faces: React.PropTypes.arrayOf(
                React.PropTypes.object
            )
        },
        
        // set state
        getInitialState: function() {
            return {
                faces: this.props.faces
            }
        },
        
        // lifecycle
        componentDidMount: function() {
                        
            // create script tag for source
            var tag = document.createElement("script");
            tag.type = "text/javascript";
            tag.async = true;
            tag.src = "lib/impress.js";
            tag.onload = function() {

                // initialize impress
                this.impress = window.impress("impress");
                this.impress.init();

            }.bind(this);

            // add script tage to document
            document.body.appendChild(tag);
  
        },
        
        // render
        render: function() {
            
            return React.DOM.main(

                // attributes
                {
                    id: this.props.id
                },
                
                // each cube face
                this.state.faces.map(function(item, idx) {

                    return React.DOM.div(

                        // attributes
                        {
                            key: idx,
                            className: "step",
                            id: item.url_name,
                            "data-x": item.datax,
                            "data-y": item.datay,
                            "data-z": item.dataz,
                            "data-rotate-x": item.rotatex,
                            "data-rotate-y": item.rotatey,
                            "data-rotate-z": item.rotatez,
                            "data-scale": item.scale
                        },

                        // item
                        React.DOM.p(
                            
                            // attributes
                            {},
                            
                            // content
                            item.text
                            
                        )

                    )

                }, this)

            )
            
        }
        
    });
    
    // rubik app
    ReactDOM.render(
        React.createElement(rubik, {
            id: "impress",
            faces: faces
        }),
        document.getElementById("app")
    );
    
});