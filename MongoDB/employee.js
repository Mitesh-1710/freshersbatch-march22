db.createCollection("employee_data")

db.employeeData.insertMany([
   

        {
          "_id": "624bd75001fc639fb9b5a4db",
          "EmployeeID": 100,
          "EmployeeName": "Ravi",
          "DepartmentNo": 200,
          "Designation": "Principal",
          "Manager": "Shiv",
          "DOJ": ISODate("1998-11-07T00:00:00Z"),
          "salary": 5000
        },
        {
          "_id": "624bd75001fc639fb9b5a4dc",
          "EmployeeID": 101,
          "EmployeeName": " Prasad",
          "DepartmentNo": 201,
          "Designation": "Teacher",
          "Manager": "Shiv",
          "DOJ": ISODate("1998-11-07T00:00:00Z"),
          "salary": 2000
        },
        {
          "_id": "624bd75001fc639fb9b5a4dd",
          "EmployeeID": 102,
          "EmployeeName": "Ananya",
          "DepartmentNo": 202,
          "Designation": "Consultant",
          "Manager": "Sahil",
          "DOJ": ISODate("1998-11-07T00:00:00Z"),
          "salary": 3000
        },
        {
          "_id": "624bd75001fc639fb9b5a4de",
          "EmployeeID": 103,
          "EmployeeName": "Sana",
          "DepartmentNo": 201,
          "Designation": "Teacher",
          "Manager": "Ravi",
          "DOJ": ISODate("1998-11-07T00:00:00Z"),
          "salary": 2000
        },
        {
          "_id": "624bd75001fc639fb9b5a4df",
          "EmployeeID": 104,
          "EmployeeName": "Ajay",
          "DepartmentNo": 202,
          "Designation": "Consultant",
          "Manager": "Sahil",
          "DOJ": ISODate("1998-11-07T00:00:00Z"),
          "salary": 3000
        },
        {
          "_id": "624bd75001fc639fb9b5a4e0",
          "EmployeeID": 105,
          "EmployeeName": "Nikhil",
          "DepartmentNo": 201,
          "Designation": "Teacher",
          "Manager": "Ravi",
          "DOJ": ISODate("1998-11-07T00:00:00Z"),
          "salary": 2000
        },
        {
          "_id": "624bd75001fc639fb9b5a4e1",
          "EmployeeID": 106,
          "EmployeeName": "Anjali",
          "DepartmentNo": 201,
          "Designation": "Teacher",
          "Manager": "Ravi",
          "DOJ": ISODate("1998-11-07T00:00:00Z"),
          "salary": 2000
        },
        {
          "_id": "624bd75001fc639fb9b5a4e2",
          "EmployeeID": 107,
          "EmployeeName": "Hilal",
          "DepartmentNo": 202,
          "Designation": "Consultant",
          "Manager": "Sahil",
          "DOJ": ISODate("1998-11-07T00:00:00Z"),
          "salary": 3000
        },
        {
          "_id": "624bd75001fc639fb9b5a4e3",
          "EmployeeID": 108,
          "EmployeeName": "Deven",
          "DepartmentNo": 202,
          "Designation": "Consultant",
          "Manager": "Sahil",
          "DOJ": 28,
          "salary": 3000
        },
        {
          "_id": "624bd75001fc639fb9b5a4e4",
          "EmployeeID": 109,
          "EmployeeName": "Neelofar",
          "DepartmentNo": 203,
          "Designation": "Director",
          "Manager": "Heena",
          "DOJ": 29,
          "salary": 8000
        }
    
    
])

db.employeeData.find({name:{$ne:"Miteshkumar Mayavanshi"}})

db.employeeData.find({DOJ:ISODate("2022-03-17")})

db.employeeData.find({DepartmentNo:{$ne:201}})

{ $year: ISODate("1998-11-07T00:00:00Z") }

db.employeeData.aggregate([ { $match: {EmployeeName: "Sana",$skip:2  }},{$limit:5}])

db.employeeData.find({},{EmployeeID:1,EmployeeName:1,salary:1,DepartmentNo:1})

db.employeeData.find({$and:[{DepartmentNo:201},{salary:{$gt:1000}}]})


db.employeeData.aggregate([{$group:{_id: "$EmployeeName" }} , {$sort:{salary:1}}])

db.employeeData.aggregate([{$match: {DepartmentNo:{$ne:201}}}])

