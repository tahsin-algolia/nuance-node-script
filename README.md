# Algolia Indexing Script for Github

This is a simple Node.js script to retrieve the list of public repositories from Nuance's Github organization and index to Algolia

## Usage
1. Create a `.env` file at the root directory
2. Add the following environment variables

```
  ORG_ID="<GITHUB_ORG_NAME>"
  ALGOLIA_APP_ID="<ALGOLIA_APP_ID>"
  ALGOLIA_WRITE_API_KEY="<ALGOLIA_WRITE_API_KEY>"
  ALGOLIA_INDEX_NAME="<ALGOLIA_INDEX_NAME>"
```

3. Install the NPM dependencies

```bash
   npm install
   ```

4. Run the script

```bash
   node index.js
   ```
