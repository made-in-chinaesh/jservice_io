import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
	public async welcome(): Promise<string> {
		return (
			'<!DOCTYPE html>\n' +
			'<html lang="en">\n' +
			'\t<head>\n' +
			'\t\t<meta charset="UTF-8" />\n' +
			'\t\t<meta http-equiv="X-UA-Compatible" content="IE=edge" />\n' +
			'\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n' +
			'\t\t<title>Welcome Page</title>\n' +
			'\t\t<style>\n' +
			'\t\t\tbody {\n' +
			'\t\t\t\tbackground-color: black;\n' +
			'\t\t\t\tcolor: white;\n' +
			'\t\t\t\tdisplay: flex;\n' +
			'\t\t\t\talign-items: center;\n' +
			'\t\t\t\tjustify-content: center;\n' +
			'\t\t\t\theight: 100vh;\n' +
			'\t\t\t\tmargin: 0;\n' +
			'\t\t\t\tfont-family: sans-serif;\n' +
			'\t\t\t}\n' +
			'\t\t</style>\n' +
			'\t</head>\n' +
			'\t<body>\n' +
			'\t\t<h1>Welcome to JService.io API!</h1>\n' +
			'\t</body>\n' +
			'</html>\n'
		)
	}
}
