import { fastify } from 'fastify'
import { getAllPromptRoute } from "./routes/get-all-prompts"
import { uploadVideosRoute } from "./routes/upload-videos"
import { createTranscriptionRoute } from "./routes/create-transcriptions"

const app = fastify()

app.register(getAllPromptRoute)
app.register(uploadVideosRoute)
app.register(createTranscriptionRoute)

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server running!')
})