import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.bmr.participants{
   export class Name {
      firstName: string;
      lastName: string;
   }
   export abstract class Person extends Participant {
      patientId: string;
      fullName: Name;
      title: string;
   }
   export class Provider extends Person {
      hospital: string;
   }
   export class Patient extends Person {
   }
// }
