module.exports = async function azGetSecrets(secretName) {
  // This function uses Azure to get secret from keyvault
  // replace items below with correct values to work
  // if it doesn't work, a app registration might be necessary with
  // a plataform type "Mobile and Desktop Application" configured
  // and with the "redirect Uri" configured

  // VARS TO CHANGE
  const azTenantID = "d1******-****-****-****-**********06";
  const azKeyVaultURI = "https://<VaultName>.vault.azure.net/";
  const azRedirectUri = "http://localhost:3000/";
  const azKvSecretName = secretName;
  // standard imports
  require("dotenv").config();
  const { SecretClient } = require("@azure/keyvault-secrets");
  const { InteractiveBrowserCredential } = require("@azure/identity");

  // set Azure credential
  const credential = new InteractiveBrowserCredential({
    tenantId: azTenantID,
    redirectUri: azRedirectUri,
  });

  // set client to get kv secrets
  const client = new SecretClient(azKeyVaultURI, credential);
  try {
    // get secrets
    const secret = await client.getSecret(azKvSecretName);
    console.log("DEB_AZ_Success: ", secret);
    return secret;
  } catch (error) {
    console.log("DEB_AZ_Err:", error);
    return {
      status: 500,
      message: "Not able to retreive secret",
      detail: error,
    };
  }
};
