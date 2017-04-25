define(function (require) {
    
    var inputText = require("./inputText");
    var displayText = require("./displayText");
       
    // create editable text component
    var square = React.createClass({
        
        displayName: "editableSquare",
        
        // properties
        propTypes: {
            content: React.PropTypes.object,
            idx: React.PropTypes.number,
            updateText: React.PropTypes.func
        },
        
        // set state
        getInitialState: function() {
            return {
                data: this.props.content,
                edit: null
            };
        },
        
        // listen for click on day
        _showEditor: function(event) {
            
            // set state
            this.setState({
                edit: {
                    idx: this.props.idx
                }
            });
            
        },
        
        // listen for editing finish
        _save: function(event) {
            
            var _self = this;
            console.log(_self);
            // stop default
            event.preventDefault();
            
            // get bound data
            var idx = _self.state.edit.idx;
            
            // get input
            var input = event.target;
            
            // expose to parent
            this.props.updateText({ idx: idx, content: input });
            
            // set state
            this.setState({
                edit: null
            });
            
        },
        
        // render
        render: function() {
            
            var content = this.props.content.text;
            var edit = this.state.edit;
            var textInput = React.createElement(displayText, {
                content: this.props.content,
                idx: this.props.idx
            });
            
            // check if edit is set and
            // if the active edit is this square
            if (edit && edit.idx === this.props.idx) {

                // make a form to input the day hours
                textInput = React.createElement(inputText, {
                    text: content.text,
                    idx: this.props.idx,
                    onDoubleClick: this.focus
                });

            };
                        
            return React.DOM.div(
                
                // attributes
                {
                    onDoubleClick: this._showEditor,
                    onBlur: this._save,
                    onChange: this._save
                },
                    
                // content
                React.DOM.div(

                    // attributes
                    null,
        
                    // content
                    textInput

                )
                                                 
            )
            
        }
        
    });
    
    return square;
    
});