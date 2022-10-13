import shelljs from 'shelljs';

const { exec } = shelljs

const utils = {
	consoleLogMensage: (type, mensage) => {
		const tagsMensage = {
			['error']: '[ERROR] - '
		}
		console.log(tagsMensage[type] + mensage)
	},
	
	testNet: () => {
		try {
			exec('ping -c 1 www.google.com')
		} catch (err) {
			consoleLogMensage('error', 'Você está sem acesso a internet')
		}
	},

	aptInstall: (soft) => {
		try {
			exec('apt install ' + soft)	
		} catch (err) {
			consoleLogMensage('error', 'Você está sem acesso a internet')
		}
	},

	aptUpdate: () => {
		try {
			exec('apt update')
		} catch (err) {
			consoleLogMensage('error', 'Você está sem acesso a internet')
		}
	},

	aptGetInstall: (soft) => {
		try {
			exec('apt-get install ' + soft)
		} catch (err) {
			consoleLogMensage('error', 'Você está sem acesso a internet')
		}
	},

	snapInstall: (soft) => {
		try {
			exec('snap install ' + soft)
		} catch (err) {
			consoleLogMensage('error', 'Você está sem acesso a internet')
		}
	}
}

export default utils