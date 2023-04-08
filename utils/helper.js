const Worker = require("../models/workerModel")

//Function For Department Group Relationship
exports.updateDepartmentInWorkers = async (department, type = 'update') => {

    if(type === 'update'){
        await Worker.updateMany({department:department._id}, {$set : {department: null}});
    }
    const newWorkerDetail = {
        department: department._id.toString()
    };
    department?.users?.length > 0 && department.users.forEach(async (worker) => {
        await Worker.findByIdAndUpdate(worker._id.toString(), newWorkerDetail , {
            new: true,
            runValidators: false,
            useFindAndModify: false,
        });
    })
}
