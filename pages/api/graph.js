import nc from "next-connect";
import cors from "cors";

const remoteServerUrl = "https://api-eu-central-1.graphcms.com/v2/ckm5wfx4hhhng01xhe7gfaavz";

const handler = nc()
  // use connect based middleware
  .use(cors())
  .post(async (req, res) => {
    const response = await fetch(remoteServerUrl, config);
    res.json(response);
  }); 

export default handler;
export {remoteServerUrl};