define(function (require) {
        
    return React.createClass({
        
        displayName: "inputText",
        
        //properties
        propTypes: {
            text: React.PropTypes.string,
            idx: React.PropTypes.number
        },
        
        // lifecycle
        componentDidMount: function() {
            this.refs.change.focus();
            this.refs.change.select();
        },
        
        // render
        render: function() {
            
            return React.DOM.form(

                // attributes
                null,

                // input
                React.DOM.textarea({
                    type: "text",
                    id: "select-" + this.props.idx,
                    name: "select-" + this.props.idx,
                    defaultValue: this.props.text,
                    ref: "change"
                })/*,

                // label
                React.DOM.label(

                    // attributes
                    {
                        htmlFor: "select-" + this.props.idx
                    }, 

                    // content
                    "please add text"

                )*/

            )
            
        }
        
    });
        
});