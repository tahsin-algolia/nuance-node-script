require('dotenv').config();
const { Octokit } = require('@octokit/rest');
const algoliasearch = require('algoliasearch');

// Connect and authenticate with your Algolia app
const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_WRITE_API_KEY
);
const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME);

const octokit = new Octokit();

octokit.rest.repos
  .listForOrg({
    org: process.env.ORG_ID,
    type: 'public',
  })
  .then(({ data }) => {
    const records = data.map(({ id, name, html_url, description }) => ({
      objectID: id,
      name,
      url: html_url,
      description,
      type: 'github'
    }));
    console.log('Retrieved the following data from Github');
    console.log(records);
    index.saveObjects(records, {
      autoGenerateObjectIDIfNotExist: true
    }).then(({ objectIDs }) => {
      console.log(`Added the following objects to Algolia \n ${objectIDs}`);
    });
  });
