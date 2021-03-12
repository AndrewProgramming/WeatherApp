echo "starting weather app..."
set -x
npm start &

sleep 5
echo $! > ~/pidfile
set +x