function CustomSolidPlugin() {
    return {
        code: {
            post: (code) => {
                let newCode = code;
                newCode = newCode.replace(
                    'setChatElementAdded(true);',
                    'setChatElementAdded(true);\n' +
                    'if (container) scrollToEnd(container);'
                );
                return newCode;
            },
        },
    };
}

exports.CustomSolidPlugin = CustomSolidPlugin;
