export const ServerDeveloperMode = false;
export const Server = {
  URL: ServerDeveloperMode
    ? "http://127.0.0.1:3000"
    : process.env.BASE_URL || "https://api.vixxa.ir",
  SECRET:
    process.env.SECRET ||
    "a417644571a7a6fa842002f2836bce80a2ea7ed15df2ea76403098b381b16e5b",
  developerMode: false,
};
