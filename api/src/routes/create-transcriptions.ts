import { FastifyInstance } from "fastify";
import { z } from 'zod';
import { prisma } from "../lib/prisma";

export async function createTranscriptionRoute(app: FastifyInstance) {
  app.post('/upload-videos/:videoId/transcription', async(res) => {
    const paramsSchema = z.object({
      videoId = z.string().uuid(),
    })
    const videoId = paramsSchema.parse(req.params)
  })

  
}