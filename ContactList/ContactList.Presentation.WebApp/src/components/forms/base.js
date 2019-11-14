var base = {
    props: {
        value: ""
    },

    methods: {
        updateSelf: function (value) {
            this.$emit('input', value);
        },

        updateSelect: function (value) {
            this.$emit('select', value);
        }
    }
}

export default base;