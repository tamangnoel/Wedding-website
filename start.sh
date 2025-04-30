#!/bin/bash

npm audit fix --force
npm run build
#npm run dev

npm run dev -- --hostname 0.0.0.0 #Running temporarily to allow smart phone to view website and test using http://<computer-ip-address>:3000