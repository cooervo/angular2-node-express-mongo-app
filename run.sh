
# Import to mongo data from usecasedata.json
mongoimport --db motious_db --jsonArray --collection use_cases --drop --file ./server/database/usecasedata.json
echo "====> JSON data imported to MongoDB!!!"

# Installing dependencies
cd client/
npm install
echo "====> Client Dependencies installed!!!"

cd ../server/
npm install
echo "====> Server Dependencies installed!!!"

echo "

     ******************** ACHTUNG!!! ********************
     Server is starting,
     Now go in a *NEW* terminal to app/client:
     cd app/client
     and run: npm start
     ****************************************************

     "
# Run node.js server file
node server.js
