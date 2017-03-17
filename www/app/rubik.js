define(function(require) {
    
    function getRandomInt(min, max) {
        
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    
    };
    
    var editableSquare = require("./editable-square/square");
    
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
                data: this.props.faces
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
                
                // each cube face square
                this.state.data.map(function(item, idx) {
                    
                    var _self = this;
                    
                    // save data from components
                    function updateText(arg) {
                        
                        // clone data
                        var updateData = _self.state.data.slice();

                        // set new values
                        updateData[arg.idx].text = arg.content;

                        // set the state to reflect input
                        _self.setState({
                            data: updateData
                        });

                    };
                    
                    return React.DOM.div(

                        // attributes
                        {
                            key: idx,
                            className: "step color-" + getRandomInt(1,6),
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
                        React.createElement(editableSquare, {
                            content: item,
                            idx: idx,
                            updateText: updateText
                        })

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