import { BehaviorSubject } from "rxjs";
import { TextService } from "../services/text.service";

let userServiceStub: Partial<TextService>;

export default userServiceStub = {
  getText: () => { return new BehaviorSubject<string>('') },
  setText: (text) => { },
};