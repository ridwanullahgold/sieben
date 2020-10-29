import path from 'path'
import Express from 'express'
import Mongoose from 'mongoose'
import Webpack from 'webpack'
import BodyParser from 'body-parser'
import config from '@config'
import v1Router from '@routes'
import WebpackConfig from '@/webpack.config'
import WebpackHotMiddleware from 'webpack-hot-middleware';
import WebpackDevMiddleware from 'webpack-dev-middleware';
Mongoose.connect(config.databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const app = Express()
app.use(BodyParser.json())
const compiler = Webpack(WebpackConfig)

app.use(WebpackDevMiddleware(compiler, {
    hot:true,
    publicPath: WebpackConfig.output.publicPath
}))
app.use(WebpackHotMiddleware(compiler))

app.use(v1Router)

app.use(Express.static(path.resolve(__dirname, 'public')))

app.get('/sieben', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/seiben.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})



app.listen(3000, () => {
    console.log(' Port 3000 server started')
})
