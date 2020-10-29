import { v4 as uuidv4 } from 'uuid'
import { FLASH_MESSAGE, CLEAR_FLASH_MESSAGE } from '@store/flash/mutations'

export default {
    computed: {
        flashMessages() {
            return this.$store.state.flash.messages
        }
    },
    methods: {
        flash(message, type = 'success') {
            const id = uuidv4()

            this.$store.commit(FLASH_MESSAGE, {
                id,
                type,
                message
            })

            setTimeout(() => {
                this.$store.commit(CLEAR_FLASH_MESSAGE, id)
            }, 6000)
        }
    }
}