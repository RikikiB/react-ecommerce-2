import express from 'express'

function makeServer() {
    const app = express()

    app.get('/api/products', (req, res) => {
        res.status(200).json([])
    })
    return app
}
export { makeServer };
export default makeServer;
