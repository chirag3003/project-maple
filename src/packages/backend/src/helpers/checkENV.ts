export default (fn: any) => {
  const notDiffVars: string[] = [];
  try {
    if (process.env.NODE_ENV === "production") {
      ["NODE_ENV", "PORT", "MONGO_URI"].forEach((env) => {
        if (process.env[env] === undefined) {
          notDiffVars.push(env);
        }
      });
    } else {
      ["NODE_ENV", "PORT", "MONGO_URI"].forEach((env) => {
        if (!process.env[env]) {
          notDiffVars.push(env);
        }
      });
    }

    if (notDiffVars.length > 0) {
      throw new Error(`${notDiffVars.join(", ")} is not defined`);
    }
    if (typeof fn === "function") {
      fn();
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
