exports.isRecordExists = async (model, id)=> {
    const res = await model.count({where: {id: id}})
    return res>0;

}
