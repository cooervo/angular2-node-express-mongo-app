
# Import to mongo data at usecasedata.json
mongoimport --db motious_db --jsonArray --collection use_cases --drop --file ./server/database/usecasedata.json
echo "JSON data imported to MongoDB!"

# Run node.js server file
node ./server/server.js
