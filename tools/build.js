import webpack from 'webpack';
import config from '../webpack.config.js';
import colors from 'colors';

webpack(config).run((error, stats) => {

    console.log('Webpack-ing solution. Please hold ...'.cyan);

    if (error)
    {
        console.log(error.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarnings) {
        console.log('Webpack generated the following warnings: '.yellow);
        jsonStats.warnings.map(warning => console.log(warning.yellow));
    }

    console.log(`Webpack stats: ${stats}`);

    // if we got this far, the build succeeded.
    console.log('Your app is compiled in production mode in /dist. It\'s ready to roll!'.green);

    return 0;
});