const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');

const app = express();
const port = process.env.API_PORT || 3000; 
  if (!port) {
    console.error('API_PORT environment variable is not set.');
    process.exit(1);
  }

  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Hello DevOps  Jayyy TESTING Auto Merge test-9  '  + process.env.MY_ENV_NAME);
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });