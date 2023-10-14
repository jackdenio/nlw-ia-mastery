import { fastify } from 'fastify'
import { getAllPromptRoute } from "./routes/get-all-prompts"
import { uploadVideosRoute } from "./routes/upload-videos"

const app = fastify()

app.register(getAllPromptRoute)
app.register(uploadVideosRoute)

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server running!')
})