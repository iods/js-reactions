import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	root: './src',
	build: {
		outDir: '../dist',
	},
	publicDir: '../public',
	base: './',
	outDir: './',
	server: {
		strictPort: true,
		port: 3000
	},
	plugins: [react()]
})
