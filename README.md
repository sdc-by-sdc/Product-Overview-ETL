# Product-Overview-ETL
Code for the ETL process separated out of the main service code

To use:

1) NPM install the dependencies
2) Create a .env file using the "dotenvSAMPLE" file as a guide for the needed values
3) Start up MongoDB
4) Create a new database
5) Import each of the 6 CSV files with mongoimport()
6) Confirm you now have 6 new collections in your database with the imported documents
7) In db/pipeline, uncomment the first section of formatCSV() function, "const phase1" then save and run the server. Wait until you get the the "DONE WITH PHASE ONE" message in the terminal.
8) Stop the server, recomment out "const phase1" and then uncomment "const phase2" and save. Run the server again until you recieve the "DONE WITH PHASE TWO" message in the terminal.
9) Stop the server, recomment out "const phase2" and then uncomment "const phase3" and save. Run the server again until you recieve the "DONE WITH PHASE THREE" message in the terminal.
10) Stop the server, recomment out "const phase3" and then uncomment "const phase4" and save. Run the server again until you recieve the "DONE WITH PHASE FOUR" message in the terminal.
11) Stop the server one last time. Double check your database has the two new, properly formatted collections. If everything is good, feel free to dump the 6 initial collections that are no longer needed, and rename the 2 final collections.