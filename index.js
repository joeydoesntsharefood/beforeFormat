import { testNet } from './utils.js'
import scripts from './constants.js'

for (let script of scripts) {
	testNet()
	script.execute()
}
