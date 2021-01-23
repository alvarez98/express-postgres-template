const app = require('./app')
const { Configuration, Keys } = require('./config')
const PORT = Configuration.get(Keys.SERVER_PORT) || 5000

// Start server
app.listen(PORT, () => {
  console.log(`API REST running on: http://localhost:${PORT}`)
})
