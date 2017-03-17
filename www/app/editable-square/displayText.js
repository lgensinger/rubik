define(function () {
    
    return React.createClass({
        
        displayName: "displayText",
        
        // properties
        propTypes: {
            content: React.PropTypes.object.isRequired,
            idx: React.PropTypes.number.isRequired
        },
        
        // render
        render: function() {
            
            return React.DOM.p(
                                        
                // attributes
                {
                    key: this.props.idx
                },

                // content
                this.props.content.text

            )

        }
        
    });
    
});