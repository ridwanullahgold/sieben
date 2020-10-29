<template>
<div>
    <div class="cfield">
    <input
      :id="name"
      :name="name"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
      @blur="$emit('validate')"
      @keypress="$emit('validate')"
    />
    <p class="form-input-hint text-danger" v-if="!!error">{{ error }}</p>
</div>
</div>
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
                required: true,
                
            },
            error: { required: true },
            label: { required: true },
        }
    }
</script>