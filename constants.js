import shelljs from "shelljs"

const { exec } = shelljs

const scripts = [
	{
		execute: () => {
			aptInstall('apt-transport-https curl')
			exec('sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg')
			exec('echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-release.list')
			aptUpdate()
			aptInstall('brave-browser')
		}
	},
	{
		execute: () => {
			snapInstall('--clasic code')
		}
	},
	{
		execute: () => {
			exec('git config --global user.name "Mateus Sponton"')
			exec('git config --global user.email "mateus.smarques.silva@gmail.com"')
		}
	},
	{
		
	}
]

export default scripts