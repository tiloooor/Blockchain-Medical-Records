/**
 * Place an order for a vehicle
 * @param {org.acme.bmr.healthrecord.updateVisitLog} updateVisitLog - the updatePastVisits transaction
 * @transaction
 */
function updateVisitLog(visit){
    console.log('Update visit log.');
    var id = visit.patientInfo.patientID;
    return getAssetRegistry('org.acme.bmr.healthrecords.PatientInfo')
        .then(function(ar) {
        return ar.get(id).then(function(info){
            info.pastVisitsArray.push(visit.newVisit);
            return ar.update(info);
        })
    })
}
