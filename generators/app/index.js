const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        default: this.appname,
        message: 'what is your project name?'
      },
      {
        type: 'input',
        name: 'version',
        default: '1.0.0',
        messages: 'how is the version?'
      }
    ]).then(answers => this.answers = answers)
  }

  writing () {
    const templates = [
      'app.acss', 'app.js', 'app.json', 'ext.json', 'snapshot.png',
      'image/ant.png', 'page/biz/index.acss', 'page/biz/index.axml', 'page/biz/index.js', 'page/biz/index.json', 'page/biz/README.md',
      'page/component/index.acss','page/component/index.axml', 'page/component/index.js', 'page/component/index.json',
      'util/lifecycle.js','util/lifecycle.acss', 'util/lifecycle.axml'
    ]

    templates.forEach(temp => {
      this.fs.copyTpl(this.templatePath(temp), this.destinationPath(temp), this.answers)
    })
  }
}