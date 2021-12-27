import express from 'express'
import { Server, createServer } from 'http'

interface WithDevServer {
	devServer?: Server
}

const { devServer } = global as typeof global & WithDevServer

export const app = express()
const server = devServer ?? createServer(app)

export default server
