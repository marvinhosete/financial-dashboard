export const PROFILE = {
    name: 'Marcos Vinicius',
    user: 'marvinho',
    avatar: 'https://avatars.githubusercontent.com/u/60021030?s=400&v=4'
}

export const CARDS = [
    {
        type: 'Credit',
        name: 'Marcos Vinicius',
        number: '4000 0566 5566 5556',
        flag: 'visa',
        date: '11/29'
    },
    {
        type: 'Debit',
        name: 'Marcos Vinicius',
        number: '5200 8282 8282 8210',
        flag: 'mastercard',
        date: '11/29'
    },
    {
        type: 'Credit',
        name: 'Marcos Vinicius',
        number: '3714 496353 98431',
        flag: 'amex',
        date: '11/29'
    },
    {
        type: 'Debit',
        name: 'Marcos Vinicius',
        number: '6011 0009 9013 9424',
        flag: 'discover',
        date: '11/29'
    },
    {
        type: 'Credit',
        name: 'Marcos Vinicius',
        number: '3056 93090 25904',
        flag: 'dinners',
        date: '11/29'
    },
    {
        type: 'Debit',
        name: 'Marcos Vinicius',
        number: '3566 0020 2036 0505',
        flag: 'jcb',
        date: '11/29'
    },
    {
        type: 'Credit',
        name: 'Marcos Vinicius',
        number: '6200 0000 0000 0005',
        flag: 'unionpay',
        date: '11/29'
    },
    {
        type: 'Debit',
        name: 'Marcos Vinicius',
        number: '6759 6498 2643 8453',
        flag: 'maestro',
        date: '11/29'
    },
] as { type: 'Debit' | 'Credit', name: string, number: string, flag: string, date: string }[]

export const MY_BALANCE = [
    { name: 'Jan', income: 1000, spend: 3000 },
    { name: 'Feb', income: 5000, spend: 2500 },
    { name: 'Mar', income: 2000, spend: 4000 },
    { name: 'Apr', income: 3500, spend: 1500 },
    { name: 'May', income: 3000, spend: 3500 },
    { name: 'Jun', income: 4000, spend: 2000 },
    { name: 'Jul', income: 2500, spend: 4500 },
    { name: 'Aug', income: 4500, spend: 1000 },
    { name: 'Sep', income: 1500, spend: 3500 },
    { name: 'Oct', income: 3500, spend: 2000 },
    { name: 'Nov', income: 5000, spend: 3000 },
    { name: 'Dec', income: 2000, spend: 4000 },
] as { name: string, income: number, spend: number }[]

export const MONTLY_EXPENSES = [
    {
        name: 'Food',
        value: 900,
        fill: 'rgb(65 255 198 / 34%)',
        stroke: 'rgb(65, 255, 198)',
    },
    {
        name: 'Internet',
        value: 700,
        fill: 'rgb(255 233 54 / 20%)',
        stroke: 'rgb(255 237 94)',
    },
    {
        name: 'Advertising',
        value: 500,
        fill: 'rgb(87 43 173 / 19%)',
        stroke: 'rgb(160 111 255)',
    },
    {
        name: 'Insurence',
        value: 200,
        fill: 'rgb(248 86 64 / 47%)',
        stroke: 'rgb(255 103 82)',
    },
] as { name: string, value: number, fill: string, stroke: string }[]

export const PENDING_PAYMENTS = [
    {
        icon: 'laundry',
        color: '#25d75720',
        name: 'Laundry Service'
    },
    {
        icon: 'veterinary',
        color: '#864cff20',
        name: 'Veterinary Expenses'
    },
    {
        icon: 'internet',
        color: '#41ffc620',
        name: 'Internet Bill'
    },
    {
        icon: 'medical',
        color: '#ff41b320',
        name: 'Medical Expenses'
    },
    {
        icon: 'furniture',
        color: '#f8564020',
        name: 'Furniture Cleaning'
    }
] as { icon: string, color: string, name: string }[]

export const RECENT_TRANSACTIONS = [
    {
        name: 'Jane Cooper',
        avatar: '/users/user-1.png',
        time: '1 hour',
        total: -200
    },
    {
        name: 'Leslie Alexander',
        avatar: '/users/user-2.png',
        time: '3 hours',
        total: 300
    },
    {
        name: 'Jenny Wilson',
        avatar: '/users/user-3.png',
        time: '5 hours',
        total: -500
    },
    {
        name: 'Jacob Jones',
        avatar: '/users/user-4.png',
        time: '3 hours',
        total: +750
    },
    {
        name: 'Jerome Bell',
        avatar: '/users/user-5.png',
        time: '10 hours',
        total: -1000
    }
] as { name: string, avatar: string, time: string, total: number }[]