<template>
    <button type="submit" class="btn btn-primary" :class="{ 'btn-primary': !loading, 'btn-primary cursor-not-allowed': loading }">
        <loader v-if="loading" />
        <span v-else>{{ label }}</span>
    </button>
</template>

<script>
    export default {
        props: {
            
            label: {
                type: String,
                required: true
            },
            loading: {
                type: Boolean,
                required: false,
                default: false
            }
        }
    }
</script>