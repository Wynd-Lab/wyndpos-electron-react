const path = require('path')
const { autoUpdater } = require("electron-updater")

const fastify = require('fastify')
const updateDownLoadInstall = require("./update_download_install")
module.exports = function createHttp(httpConf, update, callback) {

	return new Promise((resolve, reject) => {
		const port = httpConf.port

		if (callback) [
			callback('create_http', port)
		]
		const app = fastify()

		const localPath = httpConf.static || path.join(__dirname, '..', '..', 'local')

		app.register(require('fastify-static'), {
			root: localPath,
		})

		if (update) {
			app.all("/update/:version", async (req, res) => {
				// res.writeHead(200, {
				// 	'Content-Type': 'text/plain',
				// 	'Transfer-Encoding': 'chunked'
				// })
				res.send(autoUpdater.logger)
				// autoUpdater.logger.pipe(res)
				await updateDownLoadInstall(callback)
				res.end()
			})
		}

		server = app.listen(port, () => {
			if (callback) {
				callback('create_http_done', server)
			}
			resolve()
		})

	})
}