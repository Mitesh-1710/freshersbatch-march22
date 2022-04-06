//1. Write a query to insert a single record to a collection.
    db.collectionName.insertOne({
        EmployeeID: 105,
        EmployeeName: "Mitesh Mayavanshi",
        DepartmentNo: 201,
        Designation: "Analys",
        Manager: "Ravi",
        DOJ: ISODate("1998-11-07"),
        salary: 2000
      });

//2. Write a query to insert multiple records to a collection.
    db.collectionName.insertMany([
        {
            EmployeeID: "mm10",
            EmployeeName: "Mitesh Mayavanshi",
            DepartmentNo: 212,
            Designation: "MongoDB Developer",
            Manager: "Shankar",
            DOJ: ISODate("2022-03-17"),
            salary: 70000
        },
        {
            EmployeeID: "vk11",
            EmployeeName: "Vaibhav Kamthan",
            DepartmentNo: 250,
            Designation: "Jee Full Stack Developer",
            Manager: "Shankar",
            DOJ: ISODate("2022-03-17"),
            salary: 100000
        },
        {
            EmployeeID: "ak12",
            EmployeeName: "Ashish Katkar",
            DepartmentNo: 201,
            Designation: "software engineer",
            Manager: "Sasirekha",
            DOJ: ISODate("2022-03-16"),
            salary: 80000
        }
    ])

//3. Write a query to update a record in the Collection
    db.collectionName.updateOne(
        {EmployeeName: "Mitesh Mayavanshi"},
        {$set:{EmployeeName: "Miteshkumar Mayavanshi"}}
    )

//4. Write a query to delete a record in the collection
    db.collectionName.deleteOne({EmployeeName: "Mitesh Mayavanshi"})

//5. Write a Query to display employee details belong to deptno 201
    db.collectionName.find({DepartmentNo: 201})

//6. Write a Query to display employee details whose salaray below 100000
    db.collectionName.find({salary:{$lt:100000}})

//7. display empid, ename, salary and deptno from employee
    db.collectionName.find({},{EmployeeID:1,EmployeeName:1,salary:1,DepartmentNo:1})

//8. display ename, designation, salary and deptno from employee
    db.collectionName.aggregate([{$project:{EmployeeName:1,Designation:1,salary:1,DepartmentNo:1}}])

//9. Write a Query to display the number of employees.
    db.collectionName.aggregate([{$group: {_id:null,countNoEmployee:{$count:{}}}}])

//10. Write a Query to display the employeees who is earning more than 60000 in deptno 201
    db.collectionName.find({$and:[{DepartmentNo:201},{salary:{$gt:60000}}]})

//11. Write a Query to display the employee name starts with "M"
    db.collectionName.find({name: /^M/})

//12. Write a Query to display the employee name ends with "r"
    db.collectionName.find({name: /r$/})

//13. Write a Query to display employee whose designation is "software engineer"
    db.collectionName.find({Designation:"software engineer"})

//14. Write a Query to display employee data earning the lowest salary
    db.collectionName.aggregate([{$group:{_id: "$EmployeeName" }} , {$sort:{salary:1}}])

//15. Write a Query to display the employee data other than deptno 201
    db.collectionName.find({DepartmentNo:{$ne:201}})

//16. Write a Query to display the average salary of employees
    db.collectionName.aggregate([{$group:{_id:null, avgSalary:{$avg:"$salary"}}}])
    
//17. Write a Query to find to display the employee data in ascending order of their salary
    db.collectionName.aggregate([{$sort:{salary:1}}])

//18. Write a Query to dispaly the employee data in descending order of their employee number
    db.collectionName.aggregate([{$sort:{EmployeeID:-1}}])

//19. Write a Query to display the employee whose salary between 5000 and 7000.
    db.collectionName.aggregate([{$match:{$and:[{salary:{$gte:5000}},{salary:{$lte:7000}}]}}])
    