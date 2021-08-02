import path from 'path'

console.log(`Filename: ${require?.main?.filename}`)
console.log(`Foldername: ${path.dirname(require?.main?.filename as string)}`)