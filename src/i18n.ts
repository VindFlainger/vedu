import {nextTick} from 'vue'
import {createI18n} from 'vue-i18n'


const i18n = createI18n(
    {
        locale: 'en',
        legacy: false
    }
)

export async function loadLocaleMessages(locale: string = 'en') {
    i18n.global.locale.value = locale
    const messages = await loadMessages(locale)
    i18n.global.setLocaleMessage(locale, messages)

    return nextTick()
}


const loadMessages = async function (locale: string) {
    const modules = import.meta.glob('./i18n/**/*.json')

    const messages = {}

    for (const module in modules) {
        const file = module.replace('./i18n/', '')
        const lang = file.substring(0, file.lastIndexOf('/'))

        if (lang === locale) {
            const view = file.replace('.json', '').substring(file.indexOf('/') + 1)

            const mod = await modules[module]()
            // @ts-ignore
            messages[view] = mod.default
        }
    }


    return messages
}

loadLocaleMessages()

export default i18n

