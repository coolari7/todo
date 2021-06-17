/**
 * @returns GAPI Auth Object or Error
 */
export const getAuthInstance = async () => {
  return new Promise((resolve, reject) => {
    window.gapi.load("client:auth2", () => {
      console.log("loaded");
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
          scope: "email",
        })
        .then(
          () => {
            console.log("Authentication Successful!");
            resolve(window.gapi.auth2.getAuthInstance());
          },
          (error) => {
            console.error("Authentication Unsuccessful!", error);
            reject(error);
          }
        )
        .catch((err) => {
          console.error("Unexpected Error!", err);
        });
    });
  });
};
