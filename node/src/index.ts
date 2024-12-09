import "reflect-metadata"
import fastify from 'fastify'
import passport from 'passport';
import passportStrategy from './shared/passport/passport';
import { AppDataSource } from "./shared/typeorm/data-source";

import { indexRoute } from "./shared/http/routes/index.routes"
import cors from '@fastify/cors'

passportStrategy(passport);
AppDataSource.initialize();

const server = fastify()

// Register routes
server.register(indexRoute, {prefix: '/api'})
server.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// Start server
server.listen({ host: '0.0.0.0', port: 3000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`🚀 Server started at ${address}`)
})
