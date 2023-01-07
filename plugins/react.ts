function CustomReactPlugin() {
  return {
    code: {
      post: (code) => {
        let newCode = code;

        newCode = newCode.replace(
          new RegExp(`stop\\-color`, "gm"),
          "stopColor"
        );

        newCode = newCode.replace(new RegExp("\\-rule", "gm"), "Rule");
        newCode = newCode.replace(
          new RegExp("stroke\\-width", "gm"),
          "strokeWidth"
        );
        newCode = newCode.replace(
          new RegExp("stroke\\-linecap", "gm"),
          "strokeLinecap"
        );
        newCode = newCode.replace(
          new RegExp("stroke\\-linejoin", "gm"),
          "strokeLinejoin"
        );
        newCode = newCode.replace(
          new RegExp("style jsx", "gm"),
          'style jsx="true"'
        );

        return newCode;
      },
    },
  };
}
exports.CustomReactPlugin = CustomReactPlugin;
