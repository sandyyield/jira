const CracoLessPlugin = require('craco-less');
const { getThemeVariables } = require('antd/dist/theme');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        // modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                        modifyVars: getThemeVariables({
                            dark: true, // 开启暗黑模式
                            // compact: true, // 开启紧凑模式
                        }),
                    },
                },
            },
        },
    ],
};