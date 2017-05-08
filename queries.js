//1. Find docs with awards.
db.bios.find({ "awards": {$exists: true} });

//2. Find docs without awards.
db.bios.find({ "awards": {$exists: false} });

//3. Find docs with contributions to OOP or UNIX.
db.bios.find({ "contribs": { $in: ["OOP", "UNIX"] } });

//4. Find docs with "Turing" awards.
db.bios.find({ "awards.award": "Turing Award" });

//5. Find docs with IDs between 3 - 7.
db.bios.find({ "_id": {$gt: 3, $lt: 7} });

//6. Find docs with awards awarded before 2000.
db.bios.find({ "awards.year": {$lt: 2000} });

//7. Find docs with birth dates AND no death dates.
db.bios.find({ $and: [{ "death": {$exists: false} }, { "birth": {$exists: true} } ] });
