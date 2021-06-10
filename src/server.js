const app = require('./app')

const port = process.env.PORT || 4000
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listenning on http://localhost:${port}`))
