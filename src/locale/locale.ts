import en from './message/en.json'
import ptBR from './message/pt-br.json'

export const message = (lang: string) => {
    switch (lang.toLowerCase()) {
        case 'pt-br': return ptBR
        default: return en
    }
}