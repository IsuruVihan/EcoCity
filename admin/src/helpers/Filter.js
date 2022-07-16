const Filter = (borrowRecord, returned, returnedOn, fPlayerId, fLate) => {
  const date = new Date();
  const today = (date.getFullYear())+"-"+((date.getMonth()+1)<10?("0"+(date.getMonth()+1)):(date.getMonth()+1))+"-"+(date.getDate());

  if (returned && (borrowRecord.returnedOn == null)) return false;
  if (!returned && (borrowRecord.returnedOn != null)) return false;
  if ((returnedOn != '') && (borrowRecord.returnedOn != returnedOn)) return false;
  if ((fPlayerId != '') && (fPlayerId != borrowRecord.PlayerId)) return false;
  return !(fLate && (borrowRecord.returnOn >= today));
}

export default Filter;
