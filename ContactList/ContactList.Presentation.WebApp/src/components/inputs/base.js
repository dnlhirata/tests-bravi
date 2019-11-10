var base = {
    props: {
        value: ""
    },

    methods: {
        updateSelf: function (value) {
            this.$emit('input', value);
        }
    }
}

export default base;