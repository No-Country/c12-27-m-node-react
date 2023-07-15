import { SuperUser } from "../interfaces/superUser.interface";

const statusNotFound = (res: any, alert: string) => {
  const data = res ? res : alert;
  return (data);
}

export default statusNotFound;
