import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Patient,Provider} from './org.acme.bmr.participants';
import {ContactInformation,Gender,Race} from './org.acme.bmr.generaldata';
// export namespace org.acme.bmr.healthrecord{
   export class PatientInformation extends Asset {
      patientId: string;
      patient: Patient;
      contact: ContactInformation;
      gender: Gender;
      race: Race;
   }
   export class Visits {
      visitDate: Date;
      provider: Provider;
      visitNotes: VisitNotes;
   }
   export class VisitNotes {
      description: string;
   }
   export class updateVisitLog extends Transaction {
      newVisit: Visits;
      patientInfo: PatientInformation;
   }
// }
