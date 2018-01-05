import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import wpConfig from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(wpConfig);

app.use(
    require('webpack-dev-middleware')(compiler, {
        noInfo: false,
        publicPath: wpConfig.output.publicPath
    })
);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, err => {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});
