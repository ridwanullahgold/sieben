<template>
    <input
        :type="type"
        :name="name"
        :value="value"
        :placeholder="placeholder"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
        @change="$emit('input', $event.target.value)"
        @input="$emit('input', $event.target.value)"
        class="form-control"
    >
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: false,
                default: 'text'
            },
            name: {
                type: String,
                required: true,
                
            },
            value: {
                type: String,
                required: false,
                default: ''
            }
        }
    }
</script>