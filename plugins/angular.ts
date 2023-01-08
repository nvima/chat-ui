function CustomAngularPlugin() {
    return {
      code: {
        post: (code) => {
          let newCode = code;
          return newCode;
        },
      },
    };
}

exports.CustomAngularPlugin = CustomAngularPlugin;
