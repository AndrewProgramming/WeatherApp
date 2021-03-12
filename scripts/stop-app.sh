NODE_PORT=$(lsof -t -i:3001)
if [ !-z "${NODE_PORT}" ]; then
    kill -9 ${NODE_PORT}
fi