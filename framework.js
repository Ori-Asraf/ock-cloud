// App Framework
const framework = require('express')
const listener = 3000
const app = framework()

// Framework Files
app.use(framework.static('public'))
app.use('/js', framework.static(__dirname + 'public/js'))
app.use('/css', framework.static(__dirname + 'public/css'))
app.use('/assets', framework.static(__dirname + 'public/assets'))

// Framework Views
app.set('views', './views')
app.set('view engine', 'ejs')
app.get('/', function(req, res){res.render('index')});
app.get('*', function(req, res){res.render('404')});

// Framework Listening
app.listen(listener, () => console.log('Framework listening on port '+listener))