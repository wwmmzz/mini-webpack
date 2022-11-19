const Compiler = require('./compiler')


function webpack(options){
  const compiler = new Compiler(options)
  compiler.run()
}



// console.log(path.join(__dirname, "./a.js"),);

module.exports = webpack
