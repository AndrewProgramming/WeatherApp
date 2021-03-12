NODE_PORT=$(lsof -t -i:3001)
if [ -z "${NODE_PORT}" ]; then
    echo "no node app running..."
  else
    echo "stop app running on port ${NODE_PORT}"
    kill -9 ${NODE_PORT}
fi

