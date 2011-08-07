(function($) {
    $.fn.toggleState = function(radioselector, settings) {
        var config = {
            'on-selector': radioselector + '-on',
            'off-selector': radioselector + '-off',
            'on-value': 1,
            'attr': 'disabled',
            'on-attr': '',
            'off-attr': 'disabled',
            'on-class': 'normal',
            'off-class': 'inputvoid'
        };
        if (settings) $.extend(config, settings);

        this.each(function() {
            var on = $(this).val() == config['on-value'];

            $(config['on-selector'])
                .attr(config['attr'], on ? config['on-attr'] : config['off-attr'])
                .toggleClass(config['on-class'], on)
                .toggleClass(config['off-class'], !on);

            $(config['off-selector'])
                .attr(config['attr'], on ? config['off-attr'] : config['on-attr'])
                .toggleClass(config['on-class'], !on)
                .toggleClass(config['off-class'], on);
        });

        return this;
    };
})(jQuery);