import Pageclip from 'pageclip'
const pageclipAPIKey = 'api_eRSNavqWrVWd2OGkSz4UqxZxVITgM0Wv'
const pageclip = new Pageclip(pageclipAPIKey)

// pageclip.send({ some: 'data' }).then((response) => {
//     console.log(response.status, response.data) // => 200, [Item, Item]
// }).then(() => {
//     return pageclip.fetch()
// }).then((response) => {
//     console.log(response.status, response.data) // => 200, [Item, Item]
// })

pageclip.fetch().then((response) => {
    console.log(response.status, JSON.stringify(response.data));
})