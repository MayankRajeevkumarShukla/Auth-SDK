#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

const installDeps = () => {
  try {
    // Resolve paths
    const backendPath = path.resolve(process.cwd(), 'backend');
    const frontendPath = path.resolve(process.cwd(), 'frontend-sdk');
    
    console.log(`Resolved backend path: ${backendPath}`);
    console.log(`Resolved frontend path: ${frontendPath}`);

    // Install backend dependencies
    console.log('Installing backend dependencies...');
    execSync('npm install', { stdio: 'inherit', cwd: backendPath });

    // Install frontend dependencies
    console.log('Installing frontend dependencies...');
    execSync('npm install', { stdio: 'inherit', cwd: frontendPath });

    console.log('Installation complete!');
  } catch (error) {
    console.error('Installation failed:', error.message);
    process.exit(1);
  }
};

installDeps();
