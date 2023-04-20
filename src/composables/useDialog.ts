import {ref} from "vue";

export function useDialog() {
    const isOpen = ref(false)
    const close = () => {
        isOpen.value = false
    }
    const show = () => {
        isOpen.value = true
    }
    const toggle = () => {
        isOpen.value = !isOpen.value
    }

    return {
        close,
        show,
        isOpen
    }
}