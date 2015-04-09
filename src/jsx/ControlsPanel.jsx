var ControlsPanel = React.createClass({
    getControl: function(display) {
        var FX = this.props.app.FX;

        if (display instanceof FX.BarSpectrumDisplay) {
            return BarSpectrumControl;
        }
        else if (display instanceof FX.ImageDisplay) {
            return ImageControl;
        }
        else if (display instanceof FX.TextDisplay) {
            return TextControl;
        }
    },

    scrollToControl: function(index) {
        var node = React.findDOMNode(this.refs['ctrl' + index]);
        document.getElementById('controls').scrollTop = node.offsetTop;
    },

    render: function() {
        var controls = this.props.app.displays.map(function(display, index) {
            var Control = this.getControl(display);
            var props = {
                app: this.props.app,
                display: display,
                key: 'ctrl' + display.toString()
            };
            return <Control ref={'ctrl' + index} {...props} />;
        }, this);

        return (
            <div id="controls">
                {controls}
            </div>
        );
    }
});